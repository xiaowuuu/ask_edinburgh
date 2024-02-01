const baseUrl = 'http://localhost:9000/';

export type UserData = {
  user: {
    _id: string;
    username: string;
  };
  questions: {
    question: {
      _id: string;
      questionText: string;
    };
    answers: {
      _id: string;
      answerText: string;
    }[];
  }[];
};

const handleFetch = async (endpoint:string): Promise<any> => {
      try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('error fetching data:', error);
        throw error;
      }
    }
    export const fetchUserData = async(): Promise<UserData[]> => {
      return handleFetch('user');
    }
  