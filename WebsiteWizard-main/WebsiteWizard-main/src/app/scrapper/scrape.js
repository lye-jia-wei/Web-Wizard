const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { Configuration, OpenAIApi } = require("openai");
const { createClient } = require("@supabase/supabase-js");



exports.handler = async (event) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let scrapedData = [];

    $('selector').each((index, element) => {
      scrapedData.push($(element).text());
    });

    const params = {
      TableName: 'WebsiteWizard',
      Item: {
        id: 'unique-id',
        data: scrapedData
      }
    };

    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(scrapedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};




const configuration = new Configuration({
  apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);
const supabase = createClient(supabaseUrl, supabaseKey);

const createEmbeddings = async (data) => {
  const response = await openai.createEmbedding({
    input: data,
    model: "text-embedding-ada-002"
  });
  return response.data.embeddings;
};

exports.handler = async (event) => {
  try {
    const response = await axios.get('https://example.com');
    const html = response.data;
    const $ = cheerio.load(html);
    let scrapedData = [];

    $('selector').each((index, element) => {
      scrapedData.push($(element).text());
    });

    const dataString = scrapedData.join(' ');
    const embeddings = await createEmbeddings(dataString);

    // Save embeddings to Supabase
    const { data, error } = await supabase
      .from('scraped_data')
      .insert([{ data: dataString, embeddings, created_at: new Date().toISOString() }]);

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
