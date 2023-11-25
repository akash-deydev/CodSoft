import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  title: "",
  questions: [],
};

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState(initialState);

  const addQuestion = () => {
    const newQuestion = {
      text: "",
      options: ["", "", "", ""],
      answer: 0,
    };

    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      questions: [...prevQuiz.questions, newQuestion],
    }));
  };

  const handleQuestionChange = (questionIndex, field, value) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions[questionIndex][field] = value;
    setQuiz(updatedQuiz);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions[questionIndex].options[optionIndex] = value;
    setQuiz(updatedQuiz);
  };

  const saveQuiz = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "quizes"), {
        quiz: quiz,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="quiz-creation">
      <h2>Create a New Quiz</h2>

      <label htmlFor="quiz-title">What is the Title of the Quiz?</label>
      <input
        type="text"
        id="quiz-title"
        name="title"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />

      {quiz.questions.map((question, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={question.text}
              placeholder="Your Question"
              onChange={(e) =>
                handleQuestionChange(index, "text", e.target.value)
              }
            />
            {question.options.map((option, optionIndex) => (
              <input
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                onChange={(e) =>
                  handleOptionChange(index, optionIndex, e.target.value)
                }
                key={optionIndex}
              />
            ))}
          </div>
        );
      })}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={saveQuiz}>Save Quiz</button>
    </div>
  );
};

export default CreateQuiz;
