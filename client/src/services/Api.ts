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

export const fetchUserData = async (): Promise<UserData> => {
      try {
        const response = await fetch(`${baseUrl}/user`);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('error fetching data:', error);
        throw error;
      }
    }

  