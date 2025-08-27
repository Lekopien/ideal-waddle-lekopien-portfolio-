import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import { useNavigate } from 'react-router-dom';

// Animations
const glow = keyframes`
  0% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
  100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const Container = styled(motion.div)`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(102, 229, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(0, 153, 204, 0.05) 0%, transparent 50%);
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${props => props.theme.layout.maxWidth};
  width: 100%;
`;

const HeroSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, #00D4FF, #66E5FF, #0099CC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: ${glow} 3s ease-in-out infinite;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const QuestionCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 3rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  animation: ${float} 6s ease-in-out infinite;
`;

const Question = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AnswerButton = styled(motion.button)`
  background: ${props => props.selected ? 
    `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})` : 
    'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.colors.glow};
    border-color: ${props => props.theme.colors.primary};
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin: 2rem 0;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 2px;
`;

const NextButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  border: none;
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.colors.glow};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

// Questions data
const questions = [
  {
    id: 1,
    question: "How are you feeling today?",
    answers: [
      { text: "Ready for business", value: 0 },
      { text: "Pretty good", value: 0.3 },
      { text: "Feeling creative", value: 0.7 },
      { text: "Absolutely fantastic!", value: 1 }
    ]
  },
  {
    id: 2,
    question: "What would you like to explore?",
    answers: [
      { text: "Professional achievements", value: 0 },
      { text: "Technical skills", value: 0.2 },
      { text: "Creative projects", value: 0.8 },
      { text: "Fun experiments", value: 1 }
    ]
  },
  {
    id: 3,
    question: "How do you prefer to learn about someone?",
    answers: [
      { text: "Through their resume", value: 0 },
      { text: "Their work samples", value: 0.3 },
      { text: "Their creative process", value: 0.7 },
      { text: "Their personality", value: 1 }
    ]
  },
  {
    id: 4,
    question: "What catches your attention first?",
    answers: [
      { text: "Clean, organized layouts", value: 0 },
      { text: "Clear information", value: 0.2 },
      { text: "Interesting visuals", value: 0.8 },
      { text: "Fun animations", value: 1 }
    ]
  },
  {
    id: 5,
    question: "Your ideal website experience is:",
    answers: [
      { text: "LinkedIn-style professional", value: 0 },
      { text: "Clean and minimal", value: 0.3 },
      { text: "Visually engaging", value: 0.7 },
      { text: "Interactive and playful", value: 1 }
    ]
  }
];

export default function PersonalityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { assessmentTheme, setPersonalityScore, completeAssessment } = useTheme();
  const navigate = useNavigate();

  const handleAnswerSelect = (answerId, value) => {
    setSelectedAnswer(answerId);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestion + 1] !== undefined ? 
        questions[currentQuestion + 1].answers.findIndex(a => a.value === answers[currentQuestion + 1]) : null);
    } else {
      // Calculate final personality score
      const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
      const averageScore = totalScore / questions.length;
      
      setPersonalityScore(averageScore);
      completeAssessment();
      navigate('/portfolio');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container theme={assessmentTheme}>
      <Content theme={assessmentTheme}>
        <HeroSection
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            LEKOPIEN
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Welcome to my adaptive portfolio. Let's personalize your experience 
            by understanding what you're looking for today.
          </Subtitle>
        </HeroSection>

        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion}
            theme={assessmentTheme}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Question theme={assessmentTheme}>
              {questions[currentQuestion].question}
            </Question>
            
            <AnswerGrid>
              {questions[currentQuestion].answers.map((answer, index) => (
                <AnswerButton
                  key={index}
                  theme={assessmentTheme}
                  selected={selectedAnswer === index}
                  onClick={() => handleAnswerSelect(index, answer.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {answer.text}
                </AnswerButton>
              ))}
            </AnswerGrid>

            <ProgressBar theme={assessmentTheme}>
              <ProgressFill
                theme={assessmentTheme}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </ProgressBar>

            <NextButton
              theme={assessmentTheme}
              onClick={handleNext}
              disabled={selectedAnswer === null}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Enter Portfolio'}
            </NextButton>
          </QuestionCard>
        </AnimatePresence>
      </Content>
    </Container>
  );
}
