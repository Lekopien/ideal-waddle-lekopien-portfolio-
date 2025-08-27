import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../utils/ThemeContext';

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactMethod = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.light};
  font-weight: 500;
`;

const ContactValue = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
`;

const Input = styled.input`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const TextArea = styled.textarea`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  border: none;
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.theme.colors.primary}40;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export default function Contact() {
  const { theme, personalityScore } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Form submitted:', formData);
    alert(personalityScore > 0.7 ? 'Message sent! ✨ I\'ll get back to you soon!' : 'Thank you for your message! I\'ll respond shortly.');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "lekopien@codeyetu.org",
      href: "mailto:lekopien@codeyetu.org"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "/in/lekopien",
      href: "https://linkedin.com/in/lekopien"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "@Lekopien",
      href: "https://github.com/Lekopien"
    },
    {
      icon: "🐦",
      label: "Twitter/ X ",
      value: "@M_Lekopien",
      href: "https://x.com/M_Lekopien"
    }
  ];

  return (
    <ContactContainer>
      <SectionTitle
        theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {personalityScore > 0.7 ? "Let's Create Something Amazing! 🚀" : "Get In Touch"}
      </SectionTitle>

      <ContactGrid>
        <ContactInfo>
          <motion.p
            theme={theme}
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: theme.colors.text.secondary,
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalityScore > 0.7 ? 
              "Ready to turn your wildest ideas into digital reality? Let's chat! I'm always excited to collaborate on amazing projects and meet fellow creators. Drop me a line and let's make some magic happen! ✨" :
              personalityScore > 0.4 ?
              "I'm always interested in discussing new opportunities, collaborating on exciting projects, or simply connecting with fellow developers. Feel free to reach out!" :
              "I am available for consulting, full-time opportunities, and project collaborations. Please feel free to contact me through any of the channels below."
            }
          </motion.p>

          {contactMethods.map((method, index) => (
            <ContactMethod
              key={index}
              theme={theme}
              as="a"
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <ContactIcon theme={theme}>{method.icon}</ContactIcon>
              <ContactDetails>
                <ContactLabel theme={theme}>{method.label}</ContactLabel>
                <ContactValue theme={theme}>{method.value}</ContactValue>
              </ContactDetails>
            </ContactMethod>
          ))}
        </ContactInfo>

        <ContactForm
          theme={theme}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FormGroup>
            <Label theme={theme}>Name</Label>
            <Input
              theme={theme}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={personalityScore > 0.7 ? "What should I call you? 😊" : "Your name"}
            />
          </FormGroup>

          <FormGroup>
            <Label theme={theme}>Email</Label>
            <Input
              theme={theme}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={personalityScore > 0.7 ? "Where can I reach you? 📧" : "your.email@example.com"}
            />
          </FormGroup>

          <FormGroup>
            <Label theme={theme}>Message</Label>
            <TextArea
              theme={theme}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={personalityScore > 0.7 ? 
                "Tell me about your awesome project idea! 🚀" : 
                "Tell me about your project or how I can help you..."}
            />
          </FormGroup>

          <SubmitButton
            theme={theme}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalityScore > 0.7 ? "Send Message ✨" : "Send Message"}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
}
