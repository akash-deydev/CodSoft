import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";

const TakeQuiz = () => {
  useEffect(() => {
    getQuizFromDb();
  }, []);

  const getQuizFromDb = async (e) => {
    try {
      const data = await getDocs(collection(db, "quizes"));
      console.log(data.docs[0].data());
    } catch (error) {
      console.log(error);
    }
  };

  return <div>Take Quiz</div>;
};

export default TakeQuiz;
