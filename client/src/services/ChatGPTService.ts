
const CHATGPT_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;
export async function getChatGPTResponse (question: string):Promise<string> {
  try {
    const response = await fetch (CHATGPT_API_ENDPOINT, { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${CHATGPT_API_KEY}`,
      },
      body: JSON.stringify({question}),
    });
    const data = await response.json();
    console.log("chatgpt answer: ", data.answer);
    return data.answer;
  } catch(error) {
    console.log("error fetching chatgpt answer: ", error);
    throw error;
  }
}