import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../utils/ThemeContext';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}20, ${props => props.theme.colors.secondary}20);
  border-radius: ${props => props.theme.layout.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: ${props => props.theme.layout.borderRadius};
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled(motion.a)`
  background: ${props => props.primary ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})` : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text.primary};
  border: ${props => props.primary ? 'none' : `1px solid ${props.theme.colors.border}`};
  padding: 0.8rem 1.5rem;
  border-radius: ${props => props.theme.layout.borderRadius};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default function Projects() {
  const { theme, personalityScore } = useTheme();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Rails backend. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "Stripe"],
      icon: "🛒",
      demo: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: "📋",
      demo: "#",
      code: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive charts, and responsive design that adapts to different screen sizes.",
      tech: ["React", "Weather API", "Chart.js", "CSS Grid"],
      icon: "🌤️",
      demo: "#",
      code: "#"
    }
  ];

  return (
    <ProjectsContainer>
      <SectionTitle
        theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {personalityScore > 0.7 ? "Things I've Built ✨" : "Featured Projects"}
      </SectionTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <ProjectImage theme={theme}>
              {project.icon}
            </ProjectImage>
            
            <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
            
            <ProjectDescription theme={theme}>
              {project.description}
            </ProjectDescription>
            
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex} theme={theme}>
                  {tech}
                </TechTag>
              ))}
            </TechStack>
            
            <ProjectLinks>
              <ProjectLink
                href={project.demo}
                theme={theme}
                primary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {personalityScore > 0.7 ? "See Magic ✨" : "Live Demo"}
              </ProjectLink>
              <ProjectLink
                href={project.code}
                theme={theme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}
