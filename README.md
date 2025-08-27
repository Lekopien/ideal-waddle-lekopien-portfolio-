# Lekopien Portfolio - Adaptive Portfolio Experience

A personality-driven portfolio that adapts its design and content based on the visitor's personality assessment. Built with React and designed for future Rails backend integration.

## 🚀 Features

- **Personality Assessment**: Interactive questionnaire that determines user preferences
- **Adaptive Themes**: 4 distinct themes that change based on personality:
  - Professional/Corporate (LinkedIn-style)
  - Minimal/Clean 
  - Creative/Artistic
  - Dark Theme
- **Dynamic Content**: Content adapts to match the user's personality score
- **Progressive Animations**: More playful users see more animations
- **Theme Switching**: Users can manually switch between themes
- **Persistent Preferences**: Uses localStorage to remember user choices
- **Responsive Design**: Works seamlessly across all device sizes

## 🛠 Tech Stack

- **Frontend**: React 18, Styled Components, Framer Motion
- **Routing**: React Router v6
- **State Management**: React Context + useReducer
- **Animations**: Framer Motion with personality-based scaling
- **Styling**: Styled Components with theme system
- **Future Backend**: Ruby on Rails API (planned)

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   └── ThemeSwitcher.js
├── pages/
│   ├── PersonalityAssessment.js
│   └── Portfolio.js
├── styles/
│   └── themes.js
├── utils/
│   └── ThemeContext.js
├── App.js
└── index.js
```

## 🎨 Themes

### Assessment Theme (Futuristic Blue)
- Used during personality assessment
- Features LEKOPIEN hero section
- Futuristic blue gradient background
- Glowing effects and smooth animations

### Portfolio Themes
1. **Professional**: LinkedIn-inspired, clean and corporate
2. **Minimal**: Simple, clean lines with subtle animations
3. **Creative**: Bold colors, artistic gradients, bouncy animations
4. **Dark**: Modern dark theme with purple accents

## 🧠 Personality Scoring

The system uses a 0-1 scale:
- 0.0-0.2: Very serious → Professional theme
- 0.2-0.4: Somewhat serious → Minimal theme  
- 0.4-0.6: Balanced → Dark theme
- 0.6-0.8: Somewhat playful → Creative theme
- 0.8-1.0: Very playful → Creative theme with maximum animations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 968px
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lekopien-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/lekopien-portfolio"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `build`
4. Deploy automatically on every push

## 🔮 Future Enhancements

- Rails backend API for:
  - User analytics
  - Contact form handling
  - Admin dashboard
  - Performance metrics
- Additional personality questions
- More theme variations
- Blog integration
- Project case studies
- Testimonials section

## 📄 License

MIT License - feel free to use this as inspiration for your own projects!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Lekopien
