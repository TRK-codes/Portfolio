// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });
    
    // Initialize Typed.js
    const typed = new Typed('.typed-text-output', {
        strings: document.querySelector('.typed-text').innerHTML.split(','),
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
    
    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4e54c8"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4e54c8",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
    
    // Form Submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Show success message (in a real application, you would send this data to a server)
            alert('Thank you for your message! In a real application, this would be sent to a server.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Projects Section Functionality
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    
    // Project data
    const projectsData = [
        {
            id: 1,
            title: "Computer Vision Healthcare System",
            shortDescription: "Medical image analysis system for early disease detection.",
            fullDescription: "This computer vision system uses deep learning to analyze medical images for early disease detection. Built with TensorFlow and OpenCV, it achieves 94% accuracy in identifying potential health issues from X-rays, MRIs, and other medical imaging. The system includes a Flask backend API and React frontend for healthcare professionals to review results and manage patient data securely.",
            image: "https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg",
            tags: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
            features: [
                "Automated disease detection from X-rays and MRIs",
                "Real-time analysis with 94% accuracy",
                "Interactive visualization of detected anomalies",
                "Secure patient data management",
                "Integration with hospital management systems"
            ],
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            title: "Predictive Analytics Dashboard",
            shortDescription: "Real-time business intelligence platform with predictive capabilities.",
            fullDescription: "This predictive analytics dashboard provides businesses with real-time insights and forecasting capabilities. Built with Python and R for backend analytics and React with D3.js for the frontend visualization, it enables data-driven decision making. The platform processes streaming data to provide up-to-date metrics, predictive sales forecasting, and customer segmentation analysis.",
            image: "https://cdn.pixabay.com/photo/2017/12/11/15/34/binary-3012331_1280.jpg",
            tags: ["Python", "R", "D3.js", "PostgreSQL", "React"],
            features: [
                "Real-time data processing",
                "Predictive sales forecasting",
                "Customer segmentation",
                "Interactive data visualization",
                "Automated reporting"
            ],
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 3,
            title: "Distributed Database System",
            shortDescription: "High-performance distributed database with real-time analytics.",
            fullDescription: "This distributed database system provides high performance and reliability for data-intensive applications. Built primarily in Java with support for both SQL (PostgreSQL) and NoSQL (MongoDB) data models, it offers flexible data storage options. The system includes real-time data processing with Kafka, in-memory caching with Redis, and automatic failover mechanisms.",
            image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
            tags: ["Java", "PostgreSQL", "MongoDB", "Redis", "Kafka"],
            features: [
                "Horizontal scaling across multiple nodes",
                "Real-time data processing",
                "Automatic failover and recovery",
                "Multi-model data support (SQL and NoSQL)",
                "Built-in analytics engine"
            ],
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "NLP-Powered Customer Service Bot",
            shortDescription: "Intelligent customer service automation with natural language processing.",
            fullDescription: "This NLP-powered customer service bot automates support interactions while maintaining a natural conversational experience. Built using Python with TensorFlow and BERT for natural language understanding, it accurately interprets customer inquiries and provides relevant responses. The system includes sentiment analysis to detect customer frustration and automated ticket classification for efficient routing.",
            image: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
            tags: ["Python", "TensorFlow", "BERT", "Flask", "React"],
            features: [
                "Natural language understanding",
                "Sentiment analysis",
                "Automated ticket classification",
                "Multi-language support",
                "Integration with CRM systems"
            ],
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "Financial Data Analysis Platform",
            shortDescription: "Comprehensive financial data analysis and visualization tool.",
            fullDescription: "This financial data analysis platform provides comprehensive tools for investment professionals and financial analysts. Built with Python and R for data processing and statistical modeling, it offers advanced capabilities for stock market analysis, portfolio optimization, and risk assessment. The platform includes interactive dashboards built with D3.js for visualizing financial data and trends.",
            image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            tags: ["Python", "R", "Pandas", "D3.js", "MongoDB"],
            features: [
                "Stock market data analysis",
                "Portfolio optimization",
                "Risk assessment models",
                "Interactive financial dashboards",
                "Automated trading strategy backtesting"
            ],
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "IoT Data Processing Pipeline",
            shortDescription: "Scalable IoT data processing and analytics system.",
            fullDescription: "This IoT data processing pipeline handles large volumes of sensor data for real-time analytics and monitoring. Built with Kafka for data ingestion, Spark for stream processing, and MongoDB for storage, it scales to support thousands of connected devices. The system includes sophisticated anomaly detection algorithms to identify unusual patterns and predictive maintenance models to forecast equipment failures.",
            image: "https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_1280.jpg",
            tags: ["Python", "Kafka", "Spark", "MongoDB", "Grafana"],
            features: [
                "Real-time data ingestion from thousands of sensors",
                "Stream processing for immediate insights",
                "Anomaly detection algorithms",
                "Time-series data visualization",
                "Predictive maintenance modeling"
            ],
            demoLink: "#",
            githubLink: "#"
        }
    ];
    
    // Toggle project details
    document.querySelectorAll('.project-expand').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = toggle.closest('.project-card');
            card.classList.toggle('expanded');
            
            // Toggle icon rotation
            const icon = toggle.querySelector('i');
            if (card.classList.contains('expanded')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Open project modal
    document.querySelectorAll('.learn-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const projectId = parseInt(btn.getAttribute('data-project-id'));
            const project = projectsData.find(p => p.id === projectId);
            
            if (project) {
                // Populate modal with project data
                document.querySelector('.project-modal-image img').src = project.image;
                document.querySelector('.project-modal-image img').alt = project.title;
                document.getElementById('projectModalLabel').textContent = project.title;
                
                // Clear and populate tech stack
                const techStackContainer = document.querySelector('.project-modal-tags');
                techStackContainer.innerHTML = '';
                project.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'badge bg-light text-dark me-2 mb-2';
                    span.textContent = tag;
                    techStackContainer.appendChild(span);
                });
                
                // Set description
                document.querySelector('.project-modal-description').textContent = project.fullDescription;
                
                // Clear and populate features
                const featuresList = document.querySelector('.project-features-list');
                featuresList.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Set links
                document.querySelector('.modal-github-link').href = project.githubLink;
                document.querySelector('.modal-demo-link').href = project.demoLink;
                
                // Show modal
                const modal = new bootstrap.Modal(document.getElementById('projectModal'));
                modal.show();
            }
        });
    });
    
    // Add animation to project cards on hover
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('expanded')) {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--box-shadow)';
            }
        });
    });
    
    // Add animation to skill bars
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('aria-valuenow') + '%';
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1s ease-in-out';
            }, 100);
        });
    };
    
    // Trigger skill bar animation when skills section is in view
    const skillsSection = document.querySelector('#skills');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
});