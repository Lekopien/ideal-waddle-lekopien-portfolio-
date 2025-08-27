import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

// Styled Components
const SwitcherContainer = styled.div`
  position: relative;
  z-index: 1000;
`;

const SwitcherButton = styled(motion.button)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  color: ${props => props.theme.colors.text.primary};
  padding: 0.8rem 1.2rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 140px;
  justify-content: space-between;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  min-width: 200px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const MenuItem = styled(motion.button)`
  width: 100%;
  background: ${props => props.selected ? 
    `linear-gradient(135deg, ${props.theme.colors.primary}15, ${props.theme.colors.secondary}15)` : 
    'transparent'};
  border: none;
  padding: 1rem 1.2rem;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.border}15;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background: ${props => `${props.theme.colors.primary}20`};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ThemePreview = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid ${props => props.theme.colors.border};
  flex-shrink: 0;
`;

const ThemeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ThemeName = styled.span`
  font-weight: 500;
  line-height: 1.2;
`;

const ThemeDescription = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text.light};
  line-height: 1.2;
`;

const ResetButton = styled(motion.button)`
  width: 100%;
  background: ${props => props.theme.colors.accent}20;
  border: none;
  padding: 0.8rem 1.2rem;
  color: ${props => props.theme.colors.text.secondary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.colors.border}15;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.accent}30;
    color: ${props => props.theme.colors.text.primary};
  }
`;

// Theme configurations for display
const themeConfigs = {
  professional: {
    name: 'Professional',
    description: 'Clean, LinkedIn-style',
    color: '#0077B5'
  },
  minimal: {
    name: 'Minimal',
    description: 'Simple and clean',
    color: '#2D3748'
  },
  creative: {
    name: 'Creative',
    description: 'Bold and artistic',
    color: '#FF6B35'
  },
  dark: {
    name: 'Dark',
    description: 'Sleek dark theme',
    color: '#BB86FC'
  }
};

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, theme, resetAssessment, personalityScore } = useTheme();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const handleReset = () => {
    resetAssessment();
    setIsOpen(false);
  };

  const ChevronIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M4 6l4 4 4-4H4z"/>
    </svg>
  );

  return (
    <SwitcherContainer ref={dropdownRef}>
      <SwitcherButton
        theme={theme}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{themeConfigs[currentTheme]?.name || 'Theme'}</span>
        <ChevronIcon />
      </SwitcherButton>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            theme={theme}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {Object.entries(themeConfigs).map(([key, config]) => (
              <MenuItem
                key={key}
                theme={theme}
                selected={currentTheme === key}
                onClick={() => handleThemeChange(key)}
                whileHover={{ x: 4 }}
                whileTap={{ x: 2 }}
              >
                <ThemePreview color={config.color} theme={theme} />
                <ThemeInfo>
                  <ThemeName>{config.name}</ThemeName>
                  <ThemeDescription theme={theme}>{config.description}</ThemeDescription>
                </ThemeInfo>
              </MenuItem>
            ))}
            
            <ResetButton
              theme={theme}
              onClick={handleReset}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ↻ Retake Personality Assessment
            </ResetButton>
          </DropdownMenu>
        )}
      </AnimatePresence>
    </SwitcherContainer>
  );
}
