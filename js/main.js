// Project data
const projectsData = [
    {
        id: 1,
        title: "Predictive Analytics for Healthcare",
        image: "https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg",
        description: "Developed a machine learning model to predict patient readmission rates with 92% accuracy, helping hospitals optimize resource allocation and improve patient care outcomes.",
        longDescription: "This project involved analyzing over 100,000 patient records to identify key factors contributing to hospital readmissions. Using a combination of structured medical data and unstructured clinical notes, I built a predictive model that helps healthcare providers identify high-risk patients and implement targeted interventions.",
        features: [
            "Preprocessing of complex medical data including lab results, medications, and demographics",
            "Feature engineering to extract meaningful patterns from clinical notes using NLP",
            "Implementation of ensemble models (Random Forest, XGBoost) with hyperparameter tuning",
            "Development of an interactive dashboard for healthcare providers to visualize risk factors",
            "Deployment of the model as a REST API for integration with hospital EMR systems"
        ],
        techStack: ["Python", "TensorFlow", "SQL", "Scikit-learn", "Flask", "Docker"],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "NLP-Powered Customer Sentiment Analysis",
        image: "https://cdn.pixabay.com/photo/2017/12/11/15/34/binary-3012331_1280.jpg",
        description: "Built an end-to-end sentiment analysis system for a Fortune 500 company, processing over 10,000 customer reviews daily.",
        longDescription: "This project involved developing a sophisticated natural language processing system to analyze customer sentiment across multiple channels including social media, product reviews, and support tickets. The system provides real-time insights into customer satisfaction and identifies emerging issues.",
        features: [
            "Fine-tuned BERT model for domain-specific sentiment classification with 91% accuracy",
            "Implemented aspect-based sentiment analysis to identify specific product/service components mentioned",
            "Created a streaming pipeline to process data from multiple sources in real-time",
            "Developed visualization dashboards for business stakeholders to track sentiment trends",
            "Automated alert system for detecting significant sentiment shifts requiring immediate attention"
        ],
        techStack: ["BERT", "PyTorch", "AWS", "Kafka", "Elasticsearch", "React"],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 3,
        title: "Time Series Forecasting for Financial Markets",
        image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
        description: "Implemented a LSTM-based deep learning model for stock price prediction, outperforming traditional ARIMA models by 35%.",
        longDescription: "This project focused on developing advanced time series forecasting models for financial market prediction. By combining traditional statistical methods with deep learning approaches, I created a hybrid model that captures both linear and non-linear patterns in market data.",
        features: [
            "Preprocessing of financial time series data including handling of missing values and outliers",
            "Feature engineering incorporating technical indicators, market sentiment, and macroeconomic factors",
            "Implementation of LSTM networks with attention mechanisms for improved sequence modeling",
            "Ensemble approach combining predictions from multiple models (ARIMA, Prophet, LSTM)",
            "Backtesting framework to evaluate model performance across different market conditions"
        ],
        techStack: ["Keras", "Pandas", "Plotly", "NumPy", "StatsModels", "TensorFlow"],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 4,
        title: "Computer Vision for Retail Analytics",
        image: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
        description: "Created a computer vision system to analyze customer behavior in retail environments, increasing conversion rates by 18%.",
        longDescription: "This project involved developing a computer vision system that analyzes in-store customer behavior to provide retailers with actionable insights. The system uses object detection and tracking to understand customer movement patterns, product interactions, and purchase decisions.",
        features: [
            "Implementation of YOLOv5 for real-time person and object detection from store cameras",
            "Development of custom tracking algorithms to follow customer journeys throughout the store",
            "Heat map generation to visualize high-traffic areas and product engagement",
            "Integration with point-of-sale data to correlate browsing behavior with purchases",
            "Privacy-preserving architecture that anonymizes all customer data"
        ],
        techStack: ["OpenCV", "TensorFlow", "Docker", "PyTorch", "CUDA", "Flask"],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 5,
        title: "Recommendation System for E-commerce",
        image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
        description: "Designed a hybrid recommendation system combining collaborative filtering and content-based approaches, improving user engagement by 27%.",
        longDescription: "This project focused on developing a sophisticated recommendation engine for a large e-commerce platform. The system combines multiple recommendation strategies to provide personalized product suggestions based on user behavior, preferences, and product characteristics.",
        features: [
            "Implementation of matrix factorization techniques for collaborative filtering",
            "Development of content-based recommendation using product metadata and descriptions",
            "Integration of contextual factors (time, device, location) to improve recommendation relevance",
            "A/B testing framework to evaluate recommendation performance in production",
            "Scalable architecture handling millions of users and products with sub-second response times"
        ],
        techStack: ["PySpark", "MLlib", "MongoDB", "Scala", "Redis", "Airflow"],
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 6,
        title: "Anomaly Detection in IoT Sensor Data",
        image: "https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_1280.jpg",
        description: "Implemented an unsupervised learning approach to detect anomalies in IoT sensor data, reducing false alarms by 65%.",
        longDescription: "This project involved developing an anomaly detection system for industrial IoT sensors. The system processes streaming data from thousands of sensors to identify equipment malfunctions, predict maintenance needs, and prevent costly downtime.",
        features: [
            "Implementation of multiple anomaly detection algorithms (Isolation Forest, DBSCAN, Autoencoders)",
            "Development of a real-time processing pipeline for high-frequency sensor data",
            "Adaptive thresholding techniques that adjust to changing operational conditions",
            "Explainable AI components to help technicians understand the nature of detected anomalies",
            "Integration with maintenance management systems for automated work order generation"
        ],
        techStack: ["Scikit-learn", "Kafka", "Grafana", "TensorFlow", "InfluxDB", "Python"],
        demoLink: "#",
        githubLink: "#"
    }
];

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
    
    // Project Links Functionality
    const projectLinks = document.querySelectorAll('.project-links a');
    
    if (projectLinks) {
        projectLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // For demo purposes, prevent default navigation
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                }
            });
        });
    }
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will be submitted to the action URL
            // No need to prevent default as we want the form to actually submit
        });
    }
    
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