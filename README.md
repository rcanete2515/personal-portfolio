# Frontend Developer Portfolio Website

A professional, responsive portfolio website showcasing 5+ years of frontend development experience. Built with HTML5, SCSS, and Vanilla JavaScript following modern web development best practices.

## ✨ Features

- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Interactive Elements**:
  - Animated skill progress bars
  - Count-up statistics
  - Project filtering system
  - Form validation with real-time feedback
- **SEO Optimized**: Semantic HTML5, meta tags, structured data
- **Accessible**: ARIA labels, keyboard navigation, WCAG AA compliant
- **Performance**: Optimized animations, lazy loading ready

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Compile SCSS to CSS**

   ```bash
   npm run build
   ```

4. **Start development mode** (watches for SCSS changes)

   ```bash
   npm run dev
   ```

5. **Open the website**
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server (VS Code extension)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── main.scss          # Main SCSS entry point
│   ├── _variables.scss    # Design tokens (colors, fonts, spacing)
│   ├── _mixins.scss       # Reusable SCSS functions
│   ├── _base.scss         # Reset, typography, base styles
│   ├── _layout.scss       # Layout components (header, footer, grid)
│   ├── _components.scss   # UI components (buttons, cards, forms)
│   ├── _themes.scss       # Dark theme styles
│   └── main.css           # Compiled CSS (generated)
├── js/
│   ├── main.js            # Application initialization
│   ├── navigation.js      # Smooth scroll, mobile menu
│   ├── theme-toggle.js    # Dark/light mode toggle
│   ├── scroll-animations.js  # Intersection Observer animations
│   ├── skill-animations.js   # Skill bars & counter animations
│   ├── project-filter.js     # Portfolio filtering
│   └── form-validation.js    # Contact form validation
├── images/
│   ├── profile.jpg        # Profile photo
│   └── projects/          # Project screenshots
├── assets/
│   └── resume.pdf         # Resume download
├── package.json
└── README.md
```

## 🎨 Customization

### 1. Personal Information

Update the following in `index.html`:

- **Name**: Replace "Your Name" throughout the file
- **Contact Info**: Update email, phone, location in the Contact section
- **Social Links**: Update GitHub, LinkedIn, Twitter URLs
- **Company Names**: Replace placeholder company names in Experience section
- **Profile Photo**: Replace `images/profile.jpg` with your photo
- **Resume**: Add your resume PDF to `assets/resume.pdf`

### 2. Projects

Update project information in the Projects section:

- Replace project images in `images/projects/`
- Update project titles, descriptions, and technologies
- Update project links (currently placeholder `#`)

### 3. Colors & Styling

Edit `css/_variables.scss` to customize:

- Color palette
- Typography (fonts, sizes)
- Spacing
- Breakpoints

### 4. Content

Modify sections in `index.html`:

- About section: Update professional summary
- Skills section: Add/remove skills, adjust proficiency levels
- Experience section: Update job details and achievements
- Education section: Update degree and institution

## 📜 Available Scripts

```bash
# Compile SCSS once
npm run build

# Watch SCSS for changes (development)
npm run dev

# Compile SCSS (alternative)
npm run sass
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Sections

1. **Hero**: Name, title, tagline, CTA buttons
2. **About**: Professional summary, statistics
3. **Skills**: Technical skills with progress bars
4. **Experience**: Work history timeline
5. **Projects**: Portfolio grid with filtering
6. **Education**: Academic background
7. **Contact**: Contact form and information
8. **Footer**: Links and social media

## 🎯 Performance

- Semantic HTML5 for better SEO
- CSS animations using GPU-accelerated transforms
- Intersection Observer for efficient scroll animations
- Modular JavaScript for better maintainability
- Optimized for Lighthouse score 90+

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast meets WCAG AA standards
- Screen reader compatible

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Built with modern web technologies:

- HTML5
- SCSS (Sass)
- Vanilla JavaScript
- Google Fonts (Poppins, Inter)

---

**Note**: This is a template. Remember to replace all placeholder content with your actual information before deploying!
