import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { themes, assessmentTheme } from '../styles/themes';

// Action types
const SET_THEME = 'SET_THEME';
const SET_PERSONALITY_SCORE = 'SET_PERSONALITY_SCORE';
const SET_ASSESSMENT_COMPLETE = 'SET_ASSESSMENT_COMPLETE';
const LOAD_PREFERENCES = 'LOAD_PREFERENCES';

// Initial state
const initialState = {
  currentTheme: 'professional',
  personalityScore: 0, // 0 = very serious, 1 = very playful
  assessmentComplete: false,
  theme: themes.professional,
  preferences: null
};

// Reducer
function themeReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
        theme: themes[action.payload]
      };
    case SET_PERSONALITY_SCORE:
      return {
        ...state,
        personalityScore: action.payload
      };
    case SET_ASSESSMENT_COMPLETE:
      return {
        ...state,
        assessmentComplete: action.payload
      };
    case LOAD_PREFERENCES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

// Create context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('lekopien-preferences');
    if (savedPreferences) {
      try {
        const preferences = JSON.parse(savedPreferences);
        dispatch({
          type: LOAD_PREFERENCES,
          payload: {
            currentTheme: preferences.currentTheme || 'professional',
            personalityScore: preferences.personalityScore || 0,
            assessmentComplete: preferences.assessmentComplete || false,
            theme: themes[preferences.currentTheme] || themes.professional,
            preferences
          }
        });
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
  }, []);

  // Save preferences to localStorage when state changes
  useEffect(() => {
    const preferences = {
      currentTheme: state.currentTheme,
      personalityScore: state.personalityScore,
      assessmentComplete: state.assessmentComplete,
      timestamp: Date.now()
    };
    localStorage.setItem('lekopien-preferences', JSON.stringify(preferences));
  }, [state.currentTheme, state.personalityScore, state.assessmentComplete]);

  // Helper function to get recommended theme based on personality score
  const getRecommendedTheme = (score) => {
    if (score <= 0.2) return 'professional'; // Very serious
    if (score <= 0.4) return 'minimal';      // Somewhat serious
    if (score <= 0.6) return 'dark';         // Balanced
    if (score <= 0.8) return 'creative';     // Somewhat playful
    return 'creative';                       // Very playful
  };

  // Actions
  const setTheme = (themeName) => {
    dispatch({ type: SET_THEME, payload: themeName });
  };

  const setPersonalityScore = (score) => {
    dispatch({ type: SET_PERSONALITY_SCORE, payload: score });
    
    // Auto-select theme based on personality if assessment just completed
    if (!state.assessmentComplete) {
      const recommendedTheme = getRecommendedTheme(score);
      dispatch({ type: SET_THEME, payload: recommendedTheme });
    }
  };

  const completeAssessment = () => {
    dispatch({ type: SET_ASSESSMENT_COMPLETE, payload: true });
  };

  const resetAssessment = () => {
    dispatch({ type: SET_ASSESSMENT_COMPLETE, payload: false });
    dispatch({ type: SET_PERSONALITY_SCORE, payload: 0 });
    dispatch({ type: SET_THEME, payload: 'professional' });
    localStorage.removeItem('lekopien-preferences');
  };

  const value = {
    ...state,
    assessmentTheme,
    themes,
    setTheme,
    setPersonalityScore,
    completeAssessment,
    resetAssessment,
    getRecommendedTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
