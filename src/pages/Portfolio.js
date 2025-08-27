import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

// Styled Components
const PortfolioContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  transition: all 0.5s ease;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${props => props.theme.colors.background}95;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
`;

const Logo = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MainContent = styled.main`
  padding-top: 80px; /* Account for fixed header */
`;

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PersonalityIndicator = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 50;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 0.8rem;
  backdrop-filter: blur(10px);
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text.secondary};
  opacity: 0.8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Portfolio() {
  const { theme, personalityScore, currentTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const getPersonalityLabel = (score) => {
    if (score <= 0.2) return 'Professional Focus';
    if (score <= 0.4) return 'Balanced Professional';
    if (score <= 0.6) return 'Creative Professional';
    if (score <= 0.8) return 'Creative Focus';
    return 'Highly Creative';
  };

  // Animation variants based on personality score
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: theme.animations.duration.replace('s', '') * theme.animations.scale,
        staggerChildren: 0.1 * theme.animations.scale
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: theme.animations.duration.replace('s', '') * theme.animations.scale,
        ease: theme.animations.easing
      }
    }
  };

  return (
    <PortfolioContainer theme={theme}>
      <Header theme={theme}>
        <Logo 
          theme={theme}
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          LEKOPIEN
        </Logo>
        
        <Navigation>
          <NavLinks>
            <NavLink 
              theme={theme}
              onClick={() => scrollToSection('about')}
              whileHover={{ y: -2 }}
            >
              About
            </NavLink>
            <NavLink 
              theme={theme}
              onClick={() => scrollToSection('skills')}
              whileHover={{ y: -2 }}
            >
              Skills
            </NavLink>
            <NavLink 
              theme={theme}
              onClick={() => scrollToSection('projects')}
              whileHover={{ y: -2 }}
            >
              Projects
            </NavLink>
            <NavLink 
              theme={theme}
              onClick={() => scrollToSection('contact')}
              whileHover={{ y: -2 }}
            >
              Contact
            </NavLink>
          </NavLinks>
          
          <ThemeSwitcher />
        </Navigation>
      </Header>

      <MainContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Section id="hero" theme={theme}>
            <motion.div variants={itemVariants}>
              <Hero />
            </motion.div>
          </Section>

          <Section id="about" theme={theme}>
            <motion.div variants={itemVariants}>
              <About />
            </motion.div>
          </Section>

          <Section id="skills" theme={theme}>
            <motion.div variants={itemVariants}>
              <Skills />
            </motion.div>
          </Section>

          <Section id="projects" theme={theme}>
            <motion.div variants={itemVariants}>
              <Projects />
            </motion.div>
          </Section>

          <Section id="contact" theme={theme}>
            <motion.div variants={itemVariants}>
              <Contact />
            </motion.div>
          </Section>
        </motion.div>
      </MainContent>

      <PersonalityIndicator theme={theme}>
        Personality: {getPersonalityLabel(personalityScore)} • Theme: {theme.name}
      </PersonalityIndicator>
    </PortfolioContainer>
  );
}
