import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Loader, Environment, useFBX, useAnimations, OrthographicCamera } from '@react-three/drei';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { LinearEncoding, sRGBEncoding } from 'three/src/constants';
import { LineBasicMaterial, MeshPhysicalMaterial, Vector2 } from 'three';
import ReactAudioPlayer from 'react-audio-player';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createAnimation from './converter';
import blinkData from './blendDataBlink.json';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as THREE from 'three';
import _ from 'lodash';
import './App.css';

// Initialize Supabase
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');
const host = 'https://talking-avatar.onrender.com';

function Avatar({ avatar_url, speak, setSpeak, text, setAudioSource, playing }) {
    let gltf = useGLTF(avatar_url);
    let morphTargetDictionaryBody = null;
    let morphTargetDictionaryLowerTeeth = null;

    const [
        bodyTexture,
        eyesTexture,
        teethTexture,
        bodySpecularTexture,
        bodyRoughnessTexture,
        bodyNormalTexture,
        teethNormalTexture,
        hairTexture,
        tshirtDiffuseTexture,
        tshirtNormalTexture,
        tshirtRoughnessTexture,
        hairAlphaTexture,
        hairNormalTexture,
        hairRoughnessTexture,
    ] = useTexture([
        "/images/body.webp",
        "/images/eyes.webp",
        "/images/teeth_diffuse.webp",
        "/images/body_specular.webp",
        "/images/body_roughness.webp",
        "/images/body_normal.webp",
        "/images/teeth_normal.webp",
        "/images/h_color.webp",
        "/images/tshirt_diffuse.webp",
        "/images/tshirt_normal.webp",
        "/images/tshirt_roughness.webp",
        "/images/h_alpha.webp",
        "/images/h_normal.webp",
        "/images/h_roughness.webp",
    ]);

    _.each([
        bodyTexture,
        eyesTexture,
        teethTexture,
        teethNormalTexture,
        bodySpecularTexture,
        bodyRoughnessTexture,
        bodyNormalTexture,
        tshirtDiffuseTexture,
        tshirtNormalTexture,
        tshirtRoughnessTexture,
        hairAlphaTexture,
        hairNormalTexture,
        hairRoughnessTexture,
    ], t => {
        t.encoding = sRGBEncoding;
        t.flipY = false;
    });

    bodyNormalTexture.encoding = LinearEncoding;
    tshirtNormalTexture.encoding = LinearEncoding;
    teethNormalTexture.encoding = LinearEncoding;
    hairNormalTexture.encoding = LinearEncoding;

    gltf.scene.traverse(node => {
        if (node.type === 'Mesh' || node.type === 'LineSegments' || node.type === 'SkinnedMesh') {
            node.castShadow = true;
            node.receiveShadow = true;
            node.frustumCulled = false;

            if (node.name.includes("Body")) {
                node.material = new MeshPhysicalMaterial();
                node.material.map = bodyTexture;
                node.material.roughness = 1.7;
                node.material.roughnessMap = bodyRoughnessTexture;
                node.material.normalMap = bodyNormalTexture;
                node.material.normalScale = new Vector2(0.6, 0.6);
                morphTargetDictionaryBody = node.morphTargetDictionary;
                node.material.envMapIntensity = 0.8;
            }

            if (node.name.includes("Eyes")) {
                node.material = new MeshStandardMaterial();
                node.material.map = eyesTexture;
                node.material.roughness = 0.1;
                node.material.envMapIntensity = 0.5;
            }

            if (node.name.includes("Brows")) {
                node.material = new LineBasicMaterial({ color: 0x000000 });
                node.material.linewidth = 1;
                node.material.opacity = 0.5;
                node.material.transparent = true;
                node.visible = false;
            }

            if (node.name.includes("Teeth")) {
                node.material = new MeshStandardMaterial();
                node.material.roughness = 0.1;
                node.material.map = teethTexture;
                node.material.normalMap = teethNormalTexture;
                node.material.envMapIntensity = 0.7;
            }

            if (node.name.includes("Hair")) {
                node.material = new MeshStandardMaterial();
                node.material.map = hairTexture;
                node.material.alphaMap = hairAlphaTexture;
                node.material.normalMap = hairNormalTexture;
                node.material.roughnessMap = hairRoughnessTexture;
                node.material.transparent = true;
                node.material.depthWrite = false;
                node.material.side = 2;
                node.material.color.setHex(0x000000);
                node.material.envMapIntensity = 0.3;
            }

            if (node.name.includes("TSHIRT")) {
                node.material = new MeshStandardMaterial();
                node.material.map = tshirtDiffuseTexture;
                node.material.roughnessMap = tshirtRoughnessTexture;
                node.material.normalMap = tshirtNormalTexture;
                node.material.color.setHex(0xffffff);
                node.material.envMapIntensity = 0.5;
            }

            if (node.name.includes("TeethLower")) {
                morphTargetDictionaryLowerTeeth = node.morphTargetDictionary;
            }
        }
    });

    const [clips, setClips] = useState([]);
    const mixer = useMemo(() => new THREE.AnimationMixer(gltf.scene), []);

    useEffect(() => {
        if (speak === false) return;

        makeSpeech(text)
            .then(response => {
                let { blendData, filename } = response.data;
                let newClips = [
                    createAnimation(blendData, morphTargetDictionaryBody, 'HG_Body'),
                    createAnimation(blendData, morphTargetDictionaryLowerTeeth, 'HG_TeethLower')
                ];
                filename = host + filename;

                setClips(newClips);
                setAudioSource(filename);
            })
            .catch(err => {
                console.error(err);
                setSpeak(false);
            });
    }, [speak]);

    let idleFbx = useFBX('/idle.fbx');
    let { clips: idleClips } = useAnimations(idleFbx.animations);

    idleClips[0].tracks = _.filter(idleClips[0].tracks, track => {
        return track.name.includes("Head") || track.name.includes("Neck") || track.name.includes("Spine2");
    });

    idleClips[0].tracks = _.map(idleClips[0].tracks, track => {
        if (track.name.includes("Head")) {
            track.name = "head.quaternion";
        }
        if (track.name.includes("Neck")) {
            track.name = "neck.quaternion";
        }
        if (track.name.includes("Spine")) {
            track.name = "spine2.quaternion";
        }
        return track;
    });

    useEffect(() => {
        let idleClipAction = mixer.clipAction(idleClips[0]);
        idleClipAction.play();

        let blinkClip = createAnimation(blinkData, morphTargetDictionaryBody, 'HG_Body');
        let blinkAction = mixer.clipAction(blinkClip);
        blinkAction.play();
    }, []);

    useEffect(() => {
        if (playing === false) return;

        _.each(clips, clip => {
            let clipAction = mixer.clipAction(clip);
            clipAction.setLoop(THREE.LoopOnce);
            clipAction.play();
        });
    }, [playing]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <group name="avatar">
            <primitive object={gltf.scene} dispose={null} />
        </group>
    );
}

async function makeSpeech(text) {
    const response = await axios.post('BEDROCK_ENDPOINT', { input: text }, {
        headers: {
            'Authorization': `Bearer ${process.env.AWS_BEDROCK_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data; // Adjust based on your response structure
}

const STYLES = {
    area: { position: 'absolute', bottom: '0', left: '0', zIndex: 500 },
    speak: { padding: '5px', display: 'block', color: '#FFFFFF', background: '#222222', border: 'None' },
    label: { color: '#777777', fontSize: '0.5em' },
}

function App() {
    const [chats, setChats] = useState([{ msg: 'Hi there! How can I assist you today?', who: 'bot', exct: '0' }]);
    const [text, setText] = useState("Hello I am joi, your 3D virtual assistant.");
    const [msg, setMsg] = useState("");
    const [exct, setexct] = useState("");
    const [load, setLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [vis, setVis] = useState(false);
    const [speak, setSpeak] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [audioSource, setAudioSource] = useState("");

    const getResponse = async (msg) => {
        if (msg === '') {
            toast.error("Prompt can't be empty.");
            return;
        }
        if (load === true || speak === true) {
            toast.error("Already generating response!");
            return;
        }

        setChats(chats => [...chats, { msg, who: 'me' }]);
        setMsg("");
        setLoad(true);

        try {
            const start = new Date();
            const response = await makeSpeech(msg);
            const text = response.output; // Adjust based on your Bedrock response structure
            const timeTaken = (new Date()) - start;

            await supabase.from('chat_messages').insert([{ message: msg, sender: 'me' }]);
            await supabase.from('chat_messages').insert([{ message: text, sender: 'bot' }]);

            setSpeak(true);
            setText(text);
            setexct(timeTaken / 1000);
        } catch (error) {
            console.error(error);
        } finally {
            setLoad(false);
        }
    };

    const fetchChatHistory = async () => {
        const { data, error } = await supabase
            .from('chat_messages')
            .select('*')
            .order('created_at', { ascending: true });
        if (error) {
            console.error('Error fetching chat history:', error);
        } else {
            setChats(data);
        }
    };

    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <>
            <ToastContainer />
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Avatar
                    avatar_url="/path/to/your/avatar.glb"
                    speak={speak}
                    setSpeak={setSpeak}
                    text={text}
                    setAudioSource={setAudioSource}
                    playing={playing}
                />
                <Environment preset="city" />
            </Canvas>
            <div style={STYLES.area}>
                <input
                    type="text"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={() => getResponse(msg)} style={STYLES.speak}>
                    Send
                </button>
                <ul>
                    {chats.map((chat, index) => (
                        <li key={index} style={{ color: chat.who === 'me' ? 'blue' : 'green' }}>
                            {chat.msg}
                        </li>
                    ))}
                </ul>
                <ReactAudioPlayer
                    src={audioSource}
                    autoPlay
                    controls
                    onEnded={() => setPlaying(false)}
                    onPlay={() => setPlaying(true)}
                />
            </div>
        </>
    );
}

export default App;
