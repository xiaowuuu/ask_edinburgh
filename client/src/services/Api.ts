const baseURL = 'http://localhost:9000/'

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
