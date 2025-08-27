import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../utils/ThemeContext';

// Styled Components
const AboutContainer = styled.div`
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;

  ${props => props.theme.name === 'Creative' && `
    background: linear-gradient(45deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}

  ${props => props.theme.name === 'Minimal' && `
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 2.5rem);
  `}
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.text.secondary};

  ${props => props.theme.name === 'Professional' && `
    font-size: 1rem;
    line-height: 1.6;
    color: ${props.theme.colors.text.primary};
  `}

  ${props => props.theme.name === 'Minimal' && `
    font-size: 1rem;
    line-height: 1.6;
  `}
`;

const HighlightBox = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 2rem;
  position: relative;

  ${props => props.theme.name === 'Creative' && `
    background: linear-gradient(135deg, ${props.theme.colors.primary}10, ${props.theme.colors.secondary}10);
    border: 2px solid ${props.theme.colors.primary}20;
  `}

  ${props => props.theme.name === 'Professional' && `
    background: ${props.theme.colors.accent};
    border: 1px solid ${props.theme.colors.border};
  `}
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.layout.borderRadius};
  border: 1px solid ${props => props.theme.colors.border};

  ${props => props.theme.name === 'Creative' && `
    background: linear-gradient(135deg, ${props.theme.colors.primary}05, ${props.theme.colors.secondary}05);
  `}
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 500;
`;

const SkillTagsContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const SkillTagsTitle = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled(motion.span)`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: calc(${props => props.theme.layout.borderRadius} * 2);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.primary}30;

  ${props => props.theme.name === 'Professional' && `
    background: ${props.theme.colors.surface};
    color: ${props.theme.colors.text.primary};
    border: 1px solid ${props.theme.colors.border};
  `}
`;

const QuoteBox = styled(motion.div)`
  background: ${props => props.theme.colors.primary}08;
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1.5rem 2rem;
  border-radius: 0 ${props => props.theme.layout.borderRadius} ${props => props.theme.layout.borderRadius} 0;
  font-style: italic;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.primary};
  margin: 2rem 0;
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default function About() {
  const { theme, personalityScore } = useTheme();

  const getContent = () => {
    if (personalityScore <= 0.2) {
      return {
        title: "About Me",
        paragraphs: [
          "I am a seasoned full-stack developer with over 10 years of experience in building scalable web applications. My expertise spans across modern JavaScript frameworks, particularly React, and robust backend development with Ruby on Rails.",
          "Throughout my career, I have successfully delivered numerous enterprise-level projects, consistently meeting deadlines and exceeding client expectations. My approach focuses on writing clean, maintainable code and implementing best practices in software development.",
          "I am committed to continuous learning and staying current with industry standards, ensuring that I deliver solutions using the most effective and up-to-date technologies available."
        ],
        quote: "Quality code is not just about functionality—it's about creating solutions that stand the test of time and scale.",
        skills: ["React", "Ruby on Rails", "TypeScript", "PostgreSQL", "AWS", "Docker", "Git", "Agile"]
      };
    } else if (personalityScore <= 0.4) {
      return {
        title: "About Me",
        paragraphs: [
          "I'm a passionate full-stack developer who loves solving complex problems through elegant code. With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences.",
          "My journey in web development has been driven by curiosity and a desire to build things that matter. I specialize in React and Ruby on Rails, but I'm always eager to explore new technologies and methodologies.",
          "When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and sharing knowledge with the developer community."
        ],
        quote: "The best solutions come from understanding both the technical requirements and the human experience.",
        skills: ["React", "Ruby on Rails", "Node.js", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Testing"]
      };
    } else if (personalityScore <= 0.6) {
      return {
        title: "About Me",
        paragraphs: [
          "I'm a creative developer who bridges the gap between technical excellence and innovative design. My passion lies in crafting digital experiences that are not only functional but also delightful to use.",
          "With a background in both development and design thinking, I approach every project with a holistic perspective. I believe great software is born from the intersection of solid engineering and creative problem-solving.",
          "My toolkit includes React, Ruby on Rails, and various modern technologies, but what really drives me is the opportunity to bring unique ideas to life and create meaningful connections between users and technology."
        ],
        quote: "Code is poetry in motion—every line should serve both function and beauty.",
        skills: ["React", "Ruby on Rails", "UI/UX Design", "Animation", "Creative Coding", "Prototyping", "User Research", "Design Systems"]
      };
    } else if (personalityScore <= 0.8) {
      return {
        title: "Hey, Let Me Tell You About Myself!",
        paragraphs: [
          "I'm a developer who believes that technology should be fun, engaging, and accessible to everyone! My journey started with a simple 'Hello World' and has evolved into a passion for creating digital experiences that bring joy to users.",
          "What makes me tick? The moment when a user interacts with something I've built and it just clicks. Whether it's a smooth animation, an intuitive interface, or a powerful backend feature, I love making technology feel human.",
          "I specialize in React and Ruby on Rails, but I'm always experimenting with new tools and techniques. My goal is to keep pushing the boundaries of what's possible while keeping the user experience at the heart of everything I do."
        ],
        quote: "The best technology doesn't just work—it makes people's lives a little bit more awesome every day!",
        skills: ["React", "Ruby on Rails", "Creative Coding", "Interactive Design", "API Development", "User Experience", "Innovation", "Mentoring"]
      };
    } else {
      return {
        title: "The Story Behind The Code! ✨",
        paragraphs: [
          "Hey there! I'm the kind of developer who turns coffee into code and dreams into digital reality! 🚀 My adventure in tech started with curiosity and has blossomed into a full-blown love affair with creating amazing web experiences.",
          "What's my superpower? I make boring stuff fun and complex things simple! Whether I'm crafting pixel-perfect interfaces with React or building rock-solid backends with Ruby on Rails, I sprinkle a little magic into everything I create. ✨",
          "When I'm not busy conquering bugs or architecting solutions, you'll find me experimenting with the latest tech trends, contributing to open-source projects, or sharing my knowledge through mentoring. Because great code is meant to be shared! 💝"
        ],
        quote: "Life's too short for boring websites—let's make the web a more delightful place, one commit at a time! 🎨🚀",
        skills: ["React ⚛️", "Ruby on Rails 💎", "Creative Coding 🎨", "UI Animation 🎭", "API Magic ✨", "User Delight 😊", "Innovation 🚀", "Community Building 🤝"]
      };
    }
  };

  const content = getContent();

  const stats = [
    { number: "9+", label: "Years Experience" },
    { number: "75+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Learning Mode" }
  ];

  return (
    <AboutContainer>
      <SectionTitle
        theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content.title}
      </SectionTitle>

      <ContentGrid>
        <TextContent>
          {content.paragraphs.map((paragraph, index) => (
            <Paragraph
              key={index}
              theme={theme}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {paragraph}
            </Paragraph>
          ))}

          {personalityScore > 0.3 && (
            <QuoteBox
              theme={theme}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {content.quote}
            </QuoteBox>
          )}

          <SkillTagsContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SkillTagsTitle theme={theme}>Core Technologies</SkillTagsTitle>
            <SkillTags>
              {content.skills.map((skill, index) => (
                <SkillTag
                  key={index}
                  theme={theme}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillTags>
          </SkillTagsContainer>
        </TextContent>

        <HighlightBox
          theme={theme}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 style={{ 
            color: theme.colors.primary, 
            marginBottom: '1.5rem', 
            fontFamily: theme.fonts.heading,
            fontSize: '1.3rem',
            fontWeight: 600
          }}>
            {personalityScore <= 0.2 ? "Professional Metrics" : 
             personalityScore <= 0.4 ? "Key Achievements" :
             personalityScore <= 0.6 ? "Creative Impact" :
             personalityScore <= 0.8 ? "Fun Facts" : "Magic Numbers ✨"}
          </h3>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                theme={theme}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <StatNumber theme={theme}>{stat.number}</StatNumber>
                <StatLabel theme={theme}>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>

          {personalityScore > 0.6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: theme.colors.text.secondary
              }}
            >
              {personalityScore > 0.8 ? 
                "* Results may vary depending on coffee intake ☕" :
                "Always growing, always learning!"
              }
            </motion.div>
          )}
        </HighlightBox>
      </ContentGrid>
    </AboutContainer>
  );
}
