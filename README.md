# Tahreem Rashid - Data Scientist Portfolio

A professional portfolio website for Tahreem Rashid, a Data Scientist, featuring a modern design with animations and responsive layout.

## Live Demo

You can view the live website at: https://work-1-sqiodhcchnuuibbb.prod-runtime.all-hands.dev/

## Features

- Responsive design that works on all devices
- Modern aesthetics with professional animations
- Interactive particles background
- Animated skill bars
- Typing animation for job titles
- Smooth scrolling navigation
- Project showcase section
- Skills and experience timeline
- Contact form

## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap 5 for responsive layout
- AOS (Animate On Scroll) library for scroll animations
- Particles.js for interactive background
- Typed.js for typing animation
- Font Awesome for icons
- Google Fonts for typography

## Sections

1. **Hero Section** - Introduction with animated typing
2. **About Section** - Professional background and personal information
3. **Projects Section** - Showcase of data science projects
4. **Skills Section** - Technical skills with animated progress bars
5. **Experience Section** - Work history and education timeline
6. **Contact Section** - Contact form and information

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/TRK-codes/Portfolio.git
   cd Portfolio
   ```

2. Run a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to `http://localhost:8000`

## Customization

- The website uses web links for images instead of local files for better performance
- The resume is available in both HTML and PDF formats in the `assets/resume` directory
- To customize:
  - Modify the content in `index.html` to reflect your personal information
  - Adjust colors and styling in `css/style.css`
  - Customize animations and interactions in `js/main.js`
  - Update the resume in `assets/resume/resume.html` and regenerate the PDF using wkhtmltopdf:
    ```bash
    wkhtmltopdf assets/resume/resume.html assets/resume/resume.pdf
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.