import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import PersonalityAssessment from './pages/PersonalityAssessment';
import Portfolio from './pages/Portfolio';

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
    transition: all 0.5s ease;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }

  /* Smooth transitions for theme changes */
  * {
    transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
  }

  /* Custom selection colors */
  ::selection {
    background: ${props => props.theme.colors.primary}40;
    color: ${props => props.theme.colors.text.primary};
  }
`;

// App content wrapper that has access to theme context
function AppContent() {
  const { theme, assessmentComplete, assessmentTheme } = useTheme();

  return (
    <StyledThemeProvider theme={assessmentComplete ? theme : assessmentTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              assessmentComplete ? 
              <Navigate to="/portfolio" replace /> : 
              <PersonalityAssessment />
            } 
          />
          <Route 
            path="/assessment" 
            element={<PersonalityAssessment />} 
          />
          <Route 
            path="/portfolio" 
            element={
              assessmentComplete ? 
              <Portfolio /> : 
              <Navigate to="/" replace />
            } 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
}

// Main App component
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
