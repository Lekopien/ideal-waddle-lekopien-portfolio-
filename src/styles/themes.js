export const themes = {
  // Professional/Corporate Theme (LinkedIn-style)
  professional: {
    name: 'Professional',
    colors: {
      primary: '#0077B5',
      secondary: '#00A0DC',
      accent: '#F3F2F0',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: {
        primary: '#000000',
        secondary: '#666666',
        light: '#999999'
      },
      border: '#E0E0E0'
    },
    fonts: {
      primary: '"Inter", sans-serif',
      heading: '"Inter", sans-serif',
      accent: '"Inter", sans-serif'
    },
    animations: {
      duration: '0.2s',
      easing: 'ease-out',
      scale: 0.3 // Low animation scale for professional feel
    },
    layout: {
      borderRadius: '4px',
      spacing: '1.2rem',
      maxWidth: '1200px'
    }
  },

  // Creative/Artistic Theme
  creative: {
    name: 'Creative',
    colors: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FFE66D',
      background: '#2D1B69',
      surface: '#3A2A7C',
      text: {
        primary: '#FFFFFF',
        secondary: '#E0E0E0',
        light: '#CCCCCC'
      },
      border: '#4A3A8C'
    },
    fonts: {
      primary: '"Inter", sans-serif',
      heading: '"Orbitron", sans-serif',
      accent: '"Orbitron", monospace'
    },
    animations: {
      duration: '0.6s',
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      scale: 0.8 // High animation scale for creative feel
    },
    layout: {
      borderRadius: '12px',
      spacing: '1.5rem',
      maxWidth: '1300px'
    }
  },

  // Minimal/Clean Theme
  minimal: {
    name: 'Minimal',
    colors: {
      primary: '#2D3748',
      secondary: '#4A5568',
      accent: '#E2E8F0',
      background: '#FFFFFF',
      surface: '#FAFAFA',
      text: {
        primary: '#1A202C',
        secondary: '#4A5568',
        light: '#A0AEC0'
      },
      border: '#E2E8F0'
    },
    fonts: {
      primary: '"Inter", sans-serif',
      heading: '"Inter", sans-serif',
      accent: '"Inter", sans-serif'
    },
    animations: {
      duration: '0.3s',
      easing: 'ease',
      scale: 0.4 // Minimal animations
    },
    layout: {
      borderRadius: '2px',
      spacing: '1rem',
      maxWidth: '1000px'
    }
  },

  // Dark Theme
  dark: {
    name: 'Dark',
    colors: {
      primary: '#BB86FC',
      secondary: '#03DAC6',
      accent: '#CF6679',
      background: '#121212',
      surface: '#1E1E1E',
      text: {
        primary: '#FFFFFF',
        secondary: '#E0E0E0',
        light: '#A0A0A0'
      },
      border: '#333333'
    },
    fonts: {
      primary: '"Inter", sans-serif',
      heading: '"Orbitron", sans-serif',
      accent: '"Inter", monospace'
    },
    animations: {
      duration: '0.4s',
      easing: 'ease-in-out',
      scale: 0.6 // Medium animation scale
    },
    layout: {
      borderRadius: '8px',
      spacing: '1.4rem',
      maxWidth: '1200px'
    }
  }
};

// Personality assessment theme (futuristic blue)
export const assessmentTheme = {
  name: 'Assessment',
  colors: {
    primary: '#00D4FF',
    secondary: '#0099CC',
    accent: '#66E5FF',
    background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 50%, #2D3B4E 100%)',
    surface: 'rgba(255, 255, 255, 0.05)',
    text: {
      primary: '#FFFFFF',
      secondary: '#B3D9FF',
      light: '#7FB8E5'
    },
    border: 'rgba(0, 212, 255, 0.3)',
    glow: '0 0 20px rgba(0, 212, 255, 0.5)'
  },
  fonts: {
    primary: '"Inter", sans-serif',
    heading: '"Orbitron", sans-serif',
    accent: '"Orbitron", monospace'
  },
  animations: {
    duration: '0.8s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    scale: 1.0 // Full animation scale for assessment
  },
  layout: {
    borderRadius: '16px',
    spacing: '2rem',
    maxWidth: '800px'
  }
};
