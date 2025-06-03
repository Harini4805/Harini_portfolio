// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization...');

    // Initialize AOS
    try {
        AOS.init({
            duration: 1000,
            once: true
        });
        console.log('AOS initialized successfully');
    } catch (error) {
        console.error('Error initializing AOS:', error);
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Typewriter Effect
    try {
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement && window.Typewriter) {
            new Typewriter(typewriterElement, {
                strings: ['Harini R K', 'ML Engineer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: '|',
                wrapperClassName: 'typewriter-text',
                onStringTyped: (arrayPos) => {
                    console.log(`String ${arrayPos} typed`);
                }
            });
            console.log('Typewriter effect initialized successfully');
        } else {
            console.warn('Typewriter element or library not found');
        }
    } catch (error) {
        console.error('Error initializing typewriter:', error);
    }

    // Projects Data
    const projectsData = [
        {
            title: 'Smart Retail Analytics',
            description: 'A dashboard is created to view the sales,inventory and other details in a retail store.',
            technologies: ['streamlit','Python'],
            image: 'images/smart-retail.png',
            link: 'https://github.com/Harini4805/Smart_retail_analytics'
        },
        {
            title: 'Simple E-Commerce Platform',
            description: 'The project is a simple e-commerce platform that allows users to buy the products.',
            technologies: ['HTML/CSS', 'JavaScript', 'PHP','MySQL'],
            image: 'images/e-commerce.png',
            link: 'https://github.com/Harini4805/Simple-E-Commerce-Platform'
        },
        {
            title: 'Face Recognition for Smart Attendance',
            description: 'The project helps the educational institutions to mark attendance of students using face recognition.',
            technologies: ['TensorFlow', 'Flask', 'OpenCV','SQLite'],
            image: 'images/smart-attendance.jpg',
            link: 'https://github.com/Harini4805/Face_Recognition_For_Smart_Attendance'
        }
    ];

    // Experience Data
    const experienceData = [
        {
            year: '2025',
            title: 'Full Stack Developer',
            company: 'Micro IT',
            description: 'Developed and maintained full-stack web applications, ensuring seamless integration of frontend interfaces and backend logic.'
        },
        {
            year: '2024',
            title: 'Web Developer',
            company: 'Prodgy Infotech',
            description: 'Designed and developed responsive websites, optimized for performance and user experience using modern web technologies.'
        }
    ];

    // Initialize Projects
    function initProjects() {
        console.log('Initializing projects...');
        const projectsGrid = document.querySelector('.projects-grid');
        console.log('Projects grid element:', projectsGrid);
        
        if (!projectsGrid) {
            console.error('Projects grid not found!');
            return;
        }

        // Clear existing content
        projectsGrid.innerHTML = '';

        // Add projects to the grid
        projectsData.forEach((project, index) => {
            console.log(`Creating project card ${index + 1}:`, project.title);
            
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-aos', 'fade-up');
            
            const projectHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Project</a>
                </div>
            `;
            
            projectCard.innerHTML = projectHTML;
            projectsGrid.appendChild(projectCard);
            
            console.log(`Project card ${index + 1} created and added to grid`);
        });

        console.log('Projects initialization completed');
    }

    // Initialize Experience
    function initExperience() {
        console.log('Initializing experience...');
        const timeline = document.querySelector('.timeline');
        console.log('Timeline element:', timeline);
        
        if (!timeline) {
            console.error('Timeline not found!');
            return;
        }

        // Clear existing content
        timeline.innerHTML = '';

        experienceData.forEach((exp, index) => {
            console.log(`Creating timeline item ${index + 1}:`, exp.title);
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.setAttribute('data-aos', 'fade-up');
            
            timelineItem.innerHTML = `
                <div class="timeline-year">${exp.year}</div>
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });

        console.log('Experience initialization completed');
    }

    // Initialize EmailJS
    emailjs.init("43w93KIHSuAwPDZYr");

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Get form values
                const nameInput = contactForm.querySelector('input[type="text"]');
                const emailInput = contactForm.querySelector('input[type="email"]');
                const messageInput = contactForm.querySelector('textarea');

                console.log('Form inputs:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                });

                const formData = {
                    user_name: nameInput.value,     // User's name
                    user_email: emailInput.value,   // User's email
                    message: messageInput.value     // User's message
                };

                console.log('Sending email with data:', formData);

                // Send email using EmailJS
                const response = await emailjs.send(
                    "service_j8790ql",
                    "template_vqz3l6s",
                    formData
                );

                console.log('Email sent successfully:', response);

                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Message sent successfully!';
                contactForm.appendChild(successMessage);

                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);

                // Reset form
                contactForm.reset();
            } catch (error) {
                console.error('Error sending message:', error);
                console.error('Error details:', {
                    message: error.message,
                    text: error.text,
                    status: error.status
                });
                
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = `Failed to send message: ${error.message || 'Please try again.'}`;
                contactForm.appendChild(errorMessage);

                // Remove error message after 3 seconds
                setTimeout(() => {
                    errorMessage.remove();
                }, 3000);
            } finally {
                // Reset button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize all sections
    console.log('Starting section initialization...');
    initProjects();
    initExperience();
    console.log('All sections initialized');
});
  