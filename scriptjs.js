  // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        function toggleNav() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        hamburger.addEventListener('click', toggleNav);
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNav();
            }
        });

        // Close menu when link clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar scroll effect
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        document.querySelectorAll('.car-card').forEach(card => {
            card.addEventListener('click', function() {
                const carName = this.querySelector('.car-card-content h3').textContent;
                const pageMap = {
                    'S-Class': 'sclass.html',
                    'E-Class': 'eclass.html',
                    'C-Class': 'cclass.html',
                    'GLE 400e': 'gle400e.html',
                    'AMG GT': 'amggt.html',
                    'EQS Electric': 'eqselectric.html'
                };
                
                if (pageMap[carName]) {
                    window.location.href = pageMap[carName];
                }
            });
        });

        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click when clicking the button
                const carName = this.closest('.car-card-content').querySelector('h3').textContent;
                alert(`Discover more about the Mercedes-Benz ${carName}. Contact us for an exclusive test drive experience!`);
            });
        });

        // Contact Form
        const contactForm = document.getElementById('contact-form');
        const formSuccess = document.getElementById('form-success');

    