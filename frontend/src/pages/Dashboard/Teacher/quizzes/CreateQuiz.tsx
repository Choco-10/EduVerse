import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from './CreateQuiz.module.css';

const CreateQuiz = () => {
    const [quizTitle, setQuizTitle] = useState("");
    const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], answer: ""}]);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { question: "", options: ["", "", "", ""], answer: "" },
        ]);
    };

    const handleQuizChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const updatedQuestions = [...questions];
        if (type === "question") {
            updatedQuestions[index].question = event.target.value;
        }
        else if(type === "option") {
            updatedQuestions[index].options[parseInt(event.target.name)] = event.target.value;
        }
        else if (type === "answer"){
            updatedQuestions[index].answer = event.target.value;
        }
        setQuestions(updatedQuestions);
    };

    const handleSubmit = () => {
        const quizData = { title: quizTitle, questions: questions };
        console.log("Quiz Data Submitted: ", quizData);
        navigate("/dashboard/teacher/quiz-results");
    };

    return (
        <Box className={styles["create-quiz-container"]}>
            <Typography variant="h4" className={styles["create-quiz-title"]}>
                Create Quiz
            </Typography>

            <TextField label="Quiz Title" variant="outlined" fullWidth value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)} className={styles["create-quiz-field"]} />

            {questions.map((q, index) => (
                <Box key={index} className={styles["create-quiz-question-container"]}>
                    <TextField label={`Question ${index + 1}`} variant="outlined" fullWidth value={q.question}
                    onChange={(e) => handleQuizChange(index, e, "question")}
                    className={styles["create-quiz-field"]} />

                    {q.options.map((option, optionIndex) => (
                        <TextField key={optionIndex} label={`Option ${optionIndex + 1}`} variant="outlined" fullWidth value={option}
                        onChange={(e) => handleQuizChange(index, e, "option")}
                        name={String(optionIndex)} className={styles["create-quiz-field"]} />
                    ))}

                    <TextField label="Correct Answer" variant="outlined" fullWidth value={q.answer} 
                        onChange={(e) => handleQuizChange(index, e, "answer")}
                        className={styles["create-quiz-field"]} />
                </Box>
            ))}

            <Button variant="contained" color="primary" onClick={handleAddQuestion} className={styles["add-question-button"]} >
                Add Question
            </Button>

            <Button variant="contained" color="secondary" onClick={handleSubmit} className={styles["submit-quiz-button"]} >
                Submit Quiz
            </Button>
        </Box>
    );
};

export default CreateQuiz;