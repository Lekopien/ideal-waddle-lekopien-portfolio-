import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../utils/ThemeContext';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 60vh;
  gap: 4rem;
  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    min-height: 50vh;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  max-width: 600px;
`;

const VisualSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.1;
  
  ${props => props.theme.name === 'Creative' && `
    background: linear-gradient(45deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary}, ${props.theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${pulse} 3s ease-in-out infinite;
  `}
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.4;

  ${props => props.theme.name === 'Professional' && `
    font-weight: 500;
    color: ${props.theme.colors.text.primary};
  `}
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 500px;

  ${props => props.theme.name === 'Minimal' && `
    font-size: 1rem;
    max-width: 400px;
  `}
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  border: none;
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${props => props.theme.colors.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.theme.colors.primary}50;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${props => props.theme.colors.text.primary};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Avatar = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: ${props => props.theme.layout.borderRadius};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}20, ${props => props.theme.colors.secondary}20);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;

  ${props => props.theme.name === 'Creative' && `
    border-radius: 50%;
    animation: ${float} 4s ease-in-out infinite;
    background: linear-gradient(45deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary}, ${props.theme.colors.accent});
  `}

  ${props => props.theme.name === 'Professional' && `
    border-radius: 8px;
    background: ${props.theme.colors.surface};
    border: 1px solid ${props.theme.colors.border};
  `}

  ${props => props.theme.name === 'Minimal' && `
    border-radius: 4px;
    background: ${props.theme.colors.surface};
    border: 1px solid ${props.theme.colors.border};
  `}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
    animation: ${sparkle} 3s linear infinite;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 6rem;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary}60;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  ${props => props.theme.name === 'Professional' && `
    display: none;
  `}

  ${props => props.theme.name === 'Minimal' && `
    opacity: 0.3;
  `}
`;

export default function Hero() {
  const { theme, personalityScore } = useTheme();

  const getContent = () => {
    if (personalityScore <= 0.2) {
      return {
        title: "Lekopien",
        subtitle: "Senior Full-Stack Developer",
        description: "Experienced professional specializing in React and Ruby on Rails development. Focused on delivering high-quality, scalable solutions for enterprise applications.",
        primaryCTA: "View Resume",
        secondaryCTA: "Contact Me"
      };
    } else if (personalityScore <= 0.4) {
      return {
        title: "Lekopien",
        subtitle: "Full-Stack Developer & Problem Solver",
        description: "Building clean, efficient web applications with modern technologies. Passionate about writing maintainable code and creating intuitive user experiences.",
        primaryCTA: "Explore Work",
        secondaryCTA: "Get in Touch"
      };
    } else if (personalityScore <= 0.6) {
      return {
        title: "Hello, I'm Lekopien",
        subtitle: "Creative Developer & Digital Craftsperson",
        description: "I blend technical expertise with creative vision to build engaging web experiences. Always exploring new technologies and design patterns.",
        primaryCTA: "See My Projects",
        secondaryCTA: "Let's Chat"
      };
    } else if (personalityScore <= 0.8) {
      return {
        title: "Hey there! I'm Lekopien",
        subtitle: "Full-Stack Developer & Creative Technologist",
        description: "I love bringing ideas to life through code! From sleek user interfaces to robust backend systems, I create digital experiences that delight and inspire.",
        primaryCTA: "Check Out My Work",
        secondaryCTA: "Start a Conversation"
      };
    } else {
      return {
        title: "Welcome! I'm Lekopien ✨",
        subtitle: "Creative Developer & Digital Magician 🚀",
        description: "I turn coffee into code and ideas into amazing digital experiences! Whether it's a stunning frontend or a powerful backend, I love creating things that make people smile.",
        primaryCTA: "Let's Explore Together! 🎨",
        secondaryCTA: "Say Hello! 👋"
      };
    }
  };

  const content = getContent();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <HeroContainer>
      <ContentSection>
        <MainTitle
          theme={theme}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {content.title}
        </MainTitle>
        
        <Subtitle
          theme={theme}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {content.subtitle}
        </Subtitle>
        
        <Description
          theme={theme}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {content.description}
        </Description>
        
        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <PrimaryButton
            theme={theme}
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.primaryCTA}
          </PrimaryButton>
          
          <SecondaryButton
            theme={theme}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.secondaryCTA}
          </SecondaryButton>
        </CTAButtons>
      </ContentSection>

      <VisualSection>
        <Avatar
          theme={theme}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          👨‍💻
        </Avatar>

        {personalityScore > 0.4 && (
          <FloatingElements>
            <FloatingIcon
              theme={theme}
              delay="0s"
              style={{ top: '10%', left: '10%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ⚡
            </FloatingIcon>
            <FloatingIcon
              theme={theme}
              delay="2s"
              style={{ top: '20%', right: '15%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              🚀
            </FloatingIcon>
            <FloatingIcon
              theme={theme}
              delay="4s"
              style={{ bottom: '30%', left: '20%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              💡
            </FloatingIcon>
            <FloatingIcon
              theme={theme}
              delay="1s"
              style={{ bottom: '10%', right: '10%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              ✨
            </FloatingIcon>
          </FloatingElements>
        )}
      </VisualSection>
    </HeroContainer>
  );
}
