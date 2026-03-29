// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization...');

    // Initialize AOS
    try {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        console.log('AOS initialized successfully');
    } catch (error) {
        console.error('Error initializing AOS:', error);
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        // Check for saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Refresh AOS
            AOS.refresh();
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
                strings: ['Harini R K', 'Web Designer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: '|',
                wrapperClassName: 'typewriter-text'
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
            description: 'A dashboard created to view sales, inventory and other details in a retail store.',
            technologies: ['Streamlit', 'Python', 'Data Analysis'],
            image: 'images/smart-retail.png',
            link: 'https://github.com/Harini4805/Smart_retail_analytics'
        },
        // {
        //     title: 'PodcastSpark AI',
        //     description: 'A system designed to generate podcast ideas based on user preferences.',
        //     technologies: ['HTML', 'CSS', 'JavaScript','API Integration'],
        //     image: 'images/podcast-website.png',
        //     link: 'https://harini4805.github.io/podcast-idea-hrk/'
        // },
        {
            title: 'Simple E-Commerce Platform',
            description: 'A simple e-commerce platform that allows users to browse and purchase products.',
            technologies: ['HTML','CSS', 'JavaScript', 'PHP', 'MySQL'],
            image: 'images/e-commerce.png',
            link: 'https://github.com/Harini4805/Simple-E-Commerce-Platform'
        },
        {
            title: 'Face Recognition for Smart Attendance',
            description: 'Educational institution attendance system using face recognition technology.',
            technologies: ['TensorFlow', 'Flask', 'OpenCV', 'SQLite'],
            image: 'images/smart-attendance.jpg',
            link: 'https://github.com/Harini4805/Face_Recognition_For_Smart_Attendance'
        },
        {
            title: 'Online Course Finder Bot',
            description: 'A chatbot designed to help students find and enroll in online courses.',
            technologies: ['HTML','CSS', 'JavaScript', 'Python', 'API Integration'],
            image: 'images/online-course-finder-bot.png',
            link: 'https://online-course-finder-bot.vercel.app/'
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website to showcase my projects and experience.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'images/portfolio.png',
            link: 'https://harini4805.github.io/Harini_portfolio/'
        },
        // {
        //     title: 'Podcast Idea Generator',
        //     description: 'A system designed to generate podcast ideas based on user preferences.',
        //     technologies: ['HTML', 'CSS', 'JavaScript','API Integration'],
        //     image: 'images/podcast-idea-generator.png',
        //     link: 'https://harini4805.github.io/podcast/'
        // },
        {
            title: 'Discipline Management System',
            description: 'A system designed to manage and track student discipline incidents in educational institutions.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            image: 'images/discipline-management.png',
            link: 'https://github.com/Campus-Discipline-Hub'
        },
        
    ];

    // Experience Data
    const experienceData = [
        {
            year: '2026',
            title: 'Full Stack Developer',
            company: 'Technology Inovation Hub (MKCE)',
            description: 'Built and maintained scalable full-stack web applications, integrating responsive frontend designs with robust backend functionality.'
        },
        {
            year: '2025',
            title: 'Full Stack Developer',
            company: 'Micro IT',
            description: 'Developing and maintaining full-stack web applications, ensuring seamless integration of frontend interfaces and backend logic.'
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
        
        if (!projectsGrid) {
            console.error('Projects grid not found!');
            return;
        }

        // Clear existing content
        projectsGrid.innerHTML = '';

        // Add projects to the grid
        projectsData.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-aos', 'fade-up');
            projectCard.setAttribute('data-aos-delay', `${index * 100}`);
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x225?text=${encodeURIComponent(project.title)}'">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });

        console.log('Projects initialization completed');
    }

    // Initialize Experience
    function initExperience() {
        console.log('Initializing experience...');
        const timeline = document.querySelector('.timeline');
        
        if (!timeline) {
            console.error('Timeline not found!');
            return;
        }

        // Clear existing content
        timeline.innerHTML = '';

        experienceData.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.setAttribute('data-aos', 'fade-up');
            timelineItem.setAttribute('data-aos-delay', `${index * 100}`);
            
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

    // Initialize EmailJS (if form exists)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        try {
            emailjs.init("43w93KIHSuAwPDZYr");
            
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalBtnText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Remove any existing messages
                contactForm.querySelectorAll('.success-message, .error-message').forEach(el => el.remove());

                try {
                    const formData = {
                        user_name: contactForm.querySelector('input[name="user_name"]').value.trim(),
                        user_email: contactForm.querySelector('input[name="user_email"]').value.trim(),
                        message: contactForm.querySelector('textarea[name="message"]').value.trim()
                    };

                    const response = await emailjs.send(
                        "service_j8790ql",
                        "template_vqz3l6s",
                        formData
                    );

                    console.log('Email sent successfully:', response);

                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';
                    contactForm.appendChild(successMessage);

                    contactForm.reset();
                    setTimeout(() => successMessage.remove(), 4000);

                } catch (error) {
                    console.error('EmailJS error:', error);

                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.innerHTML = '❌ Failed to send. Please email directly: <a href="mailto:harinixid@gmail.com">harinixid@gmail.com</a>';
                    contactForm.appendChild(errorMessage);

                    setTimeout(() => errorMessage.remove(), 5000);
                } finally {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            });
        } catch (error) {
            console.error('Error initializing EmailJS:', error);
        }
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Initialize all sections
    console.log('Starting section initialization...');
    initProjects();
    initExperience();
    console.log('All sections initialized');
});
