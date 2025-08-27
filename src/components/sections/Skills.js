import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../utils/ThemeContext';

const SkillsContainer = styled.div`
  padding: 4rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 2rem;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
`;

const SkillItem = styled(motion.span)`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.layout.borderRadius};
  font-size: 0.9rem;
  font-weight: 500;
`;

export default function Skills() {
  const { theme, personalityScore } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Styled Components", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Ruby on Rails", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Testing", "Agile"]
    }
  ];

  return (
    <SkillsContainer>
      <SectionTitle
        theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {personalityScore > 0.7 ? "My Magical Toolkit ✨" : "Skills & Technologies"}
      </SectionTitle>

      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <CategoryTitle theme={theme}>{category.title}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  theme={theme}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}
