"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import "../../styles/globals.css";
import Image from "next/image";
import WhiteLogo from "@/components/white-logo";

import {
  ArrowLeft,
  BotIcon,
  LoaderCircleIcon,
  SendHorizontalIcon,
  User2Icon,
} from "lucide-react";
import Tempchatlogo from "@/components/tempchatlogo";
import Loadingsvg from "./loadingsvg";
import GenieLogo from "@/components/genie-logo";
import AWS from 'aws-sdk';
import config from 'C:/Users/User/Downloads/SiteGenie-main/SiteGenie-main/src/app/chatbot/aws-config.js'; // Ensure you have your AWS config

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  var router = useSearchParams();
  useEffect(() => {
    setQuestion(router.get("url") || "");
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: question },
    ]);

    const bedrock = new AWS.Bedrock();

    const params = {
      InputText: question,
      /* other parameters according to your Bedrock model */
    };

    try {
      const result = await bedrock.invokeModel(params).promise();
      const textData = result.OutputText; // Adjust based on Bedrock response structure

      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "bot", message: textData },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after receiving the result
    }
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <section className="flex flex-col w-full h-full">
          <nav className="chatbot-header bg-gradient-to-r from-violet-800 to-violet-600 text-white py-1 fixed top-0 w-full z-50">
            <div className="flex items-center justify-between px-4">
              <Button
                variant="primary"
                className="flex items-center bg-gradient-to-r from-violet-800 to-violet-600 text-white hover:bg-violet-600"
              >
                <a href="/preview" className="flex items-center space-x-2">
                  <ArrowLeft className="text-bold" />
                  <div className="flex items-center">
                    <span className="text-xl ml-4">Your </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 770 208"
                      xmlSpace="preserve"
                    >
                      {/* SVG content */}
                    </svg>
                  </div>
                </a>
              </Button>
              <div>{time}</div>
            </div>
          </nav>

          <div className="flex-grow overflow-y-auto p-4">
            {chatLog.map((entry, index) => (
              <div key={index} className={`chat-message ${entry.type}`}>
                {entry.message}
              </div>
            ))}
            {isLoading && <Loadingsvg />}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center p-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded"
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Chatbot;

