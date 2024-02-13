const CHATGPT_API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY = process.env.REACT_APP_API_KEY;
console.log(CHATGPT_API_KEY);
export async function getChatGPTResponse (question:any):Promise<string> {
  try {
        if(!CHATGPT_API_KEY){
          throw new Error("chatgpt api key is not defined")
        }
        const response = await fetch(CHATGPT_API_ENDPOINT, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHATGPT_API_KEY}`,
      },
          body: JSON.stringify({
            model:"gpt-3.5-turbo",
            "messages": [{"role": "user", "content": `fun fact of edinburgh about ${question}`}],
            max_tokens: 3,
            
          }),
    });
      
    const data = await response.json();
    console.log("chatgpt answer: ", data);
    return data.answer;
  } catch(error) {
    console.log("error fetching chatgpt answer: ", error);
    throw error;
  }
}