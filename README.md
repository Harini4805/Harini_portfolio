# Modern Portfolio Website

A clean, modern, and responsive single-page portfolio website built with HTML, CSS, and vanilla JavaScript. This portfolio template is perfect for DevOps engineers and cloud enthusiasts to showcase their skills, projects, and experience.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle with local storage persistence
- ✨ Smooth scroll-based animations using AOS.js
- ⌨️ Typewriter effect for dynamic text animation
- 📱 Fully responsive layout using Flexbox and CSS Grid
- 📊 Interactive skills visualization
- 📝 Dynamic timeline for experience
- 🖼️ Project showcase with modal details
- 📬 Contact form integration with EmailJS
- 🔗 Social media integration
- 📄 Resume download option

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- AOS.js for scroll animations
- Typewriter.js for text animations
- EmailJS for contact form
- Font Awesome for icons

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Customize the content:
   - Update personal information in `index.html`
   - Modify the timeline data in `script.js`
   - Add your skills and projects
   - Update social media links
   - Add your own images

4. Set up EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` in `script.js`

5. Add your resume:
   - Place your resume file in the project directory
   - Update the download link in `index.html`

## Customization

### Colors
The color scheme can be easily modified by updating the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --section-bg: #f3f4f6;
}
```

### Content
Update the following data in `script.js`:
- Timeline data
- Skills data
- Projects data
- Typewriter text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern portfolio designs
- Icons provided by Font Awesome
- Animations powered by AOS.js
- Typewriter effect by Typewriter.js 