import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './QuizList.module.css';

const quizzes = [
    { id: 1, title: 'Math Quiz', description: 'Algebra and Geometry basics.' },
    { id: 2, title: 'Science Quiz', description: 'Physics and Chemistry basics.' },
    { id: 3, title: 'History Quiz', description: 'World history basics.' },
    { id: 4, title: 'Geography Quiz', description: 'World geography basics.' },
    { id: 5, title: 'English Quiz', description: 'Grammar and vocabulary basics.' },
]

const QuizList: React.FC = () => {
    return (
        <Box className={styles['quiz-list-container']}>
            <Typography variant="h4" className={styles['quiz-list-title']}>
                Available Quizzes
            </Typography>
            <Box className={styles['quiz-list']}>
                {quizzes.map((quiz) => (
                    <Card key={quiz.id} className={styles['quiz-card']}>
                        <CardContent>
                            <Typography variant="h5" className={styles['quiz-title']}>
                                {quiz.title}
                            </Typography>
                            <Typography variant="body2" className={styles['quiz-description']}>
                                {quiz.description}
                            </Typography>
                            <Button variant="contained" color="primary" className={styles['take-quiz-button']} component={Link} to={`/Dashboard/Student/quizzes/${quiz.id}`}>
                                Take Quiz
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default QuizList;