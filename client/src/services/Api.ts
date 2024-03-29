const baseURL = 'http://localhost:9000/question'

export const getData = async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error fetching data:', error);
    throw error;
  }
}
export const postData = async (userId:any, questionText:string, answerText:string) => {
  try {

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({userId, questionText, answerText}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error posting data', error);
    throw error;
  }
}
