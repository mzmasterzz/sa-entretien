// Toggle service details (read more/read less)
function toggleServiceDetails(button) {
    const serviceCard = button.closest('.service-card');
    const serviceDetails = serviceCard.querySelector('.service-details');
    const readMoreText = button.querySelector('.read-more-text');
    const readLessText = button.querySelector('.read-less-text');
    const readMoreIcon = button.querySelector('.read-more-icon');
    const readLessIcon = button.querySelector('.read-less-icon');
    
    if (serviceDetails.style.display === 'none' || !serviceDetails.classList.contains('active')) {
        // Show details
        serviceDetails.style.display = 'block';
        setTimeout(() => {
            serviceDetails.classList.add('active');
            serviceCard.classList.add('expanded');
        }, 10);
        
        // Update button text and icon
        readMoreText.style.display = 'none';
        readLessText.style.display = 'inline';
        readMoreIcon.style.display = 'none';
        readLessIcon.style.display = 'inline';
        button.classList.add('active');
        
        // Smooth scroll to show the expanded content
        setTimeout(() => {
            serviceCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest',
                inline: 'nearest'
            });
        }, 300);
        
        // Track service details expansion
        if (typeof gtag !== 'undefined') {
            const serviceName = serviceCard.querySelector('h3').textContent;
            gtag('event', 'service_details_expand', {
                'event_category': 'engagement',
                'event_label': serviceName
            });
        }
    } else {
        // Hide details
        serviceDetails.classList.remove('active');
        serviceCard.classList.remove('expanded');
        
        setTimeout(() => {
            serviceDetails.style.display = 'none';
        }, 400);
        
        // Update button text and icon
        readMoreText.style.display = 'inline';
        readLessText.style.display = 'none';
        readMoreIcon.style.display = 'inline';
        readLessIcon.style.display = 'none';
        button.classList.remove('active');
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Track mobile menu usage
    if (typeof gtag !== 'undefined') {
        gtag('event', 'mobile_menu_toggle', {
            'event_category': 'engagement',
            'event_label': navMenu.classList.contains('active') ? 'opened' : 'closed'
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight + 40; // Extra space for floating nav
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll with floating effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(17, 24, 39, 0.95)';
        header.style.backdropFilter = 'blur(25px)';
        header.style.boxShadow = `
            0 12px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(251, 191, 36, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15)
        `;
        header.style.transform = 'translateX(-50%) translateY(-2px)';
    } else {
        header.style.background = 'rgba(17, 24, 39, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = `
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(251, 191, 36, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        header.style.transform = 'translateX(-50%) translateY(0px)';
    }
});

// Add floating animation pause on scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.animationPlayState = 'paused';
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        header.style.animationPlayState = 'running';
    }, 1000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .package-card, .job-card, .feature');
    animateElements.forEach(el => observer.observe(el));
});

// Form handling
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'engagement',
                'event_label': 'quote_request'
            });
        }
        
        // Validate form
        if (validateForm()) {
            submitForm();
        }
    });
}

// Message display function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}-message`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: #111827;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(251, 191, 36, 0.2);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        messageEl.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
    } else if (type === 'error') {
        messageEl.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        messageEl.style.color = '#ffffff';
    }
    
    // Add to page
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 300);
    }, 5000);
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Package card hover effects
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('expanded')) {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('expanded')) {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)';
        }
    });
});

// Contact form field validation
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('blur', function() {
        validateField(this);
    });
    
    field.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateField(this);
        }
    });
});

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    // Remove existing error message
    if (errorMessage) {
        errorMessage.remove();
    }
    
    // Remove error class
    formGroup.classList.remove('error');
    
    // Validate based on field type
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        message = 'Ce champ est obligatoire.';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            message = 'Veuillez entrer une adresse email valide.';
        }
    } else if (field.type === 'tel' && field.value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
            isValid = false;
            message = 'Veuillez entrer un numéro de téléphone valide.';
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        formGroup.classList.add('error');
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        formGroup.appendChild(errorEl);
    }
}

// Lazy loading for images (if any are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.type === 'submit' || this.getAttribute('href') === '#contact') {
            // Add loading state for contact buttons
            if (!this.disabled) {
                const originalText = this.textContent;
                this.textContent = 'Chargement...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            }
        }
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Initialize section reveals
revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #fbbf24, #f59e0b);
        z-index: 10001;
        transition: width 0.1s ease;
        border-radius: 0 2px 2px 0;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Navigate with arrow keys (for accessibility)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown' && currentIndex < focusableElements.length - 1) {
            focusableElements[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            focusableElements[currentIndex - 1].focus();
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Header background change logic
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(17, 24, 39, 0.95)';
        header.style.backdropFilter = 'blur(25px)';
        header.style.boxShadow = `
            0 12px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(251, 191, 36, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15)
        `;
        header.style.transform = 'translateX(-50%) translateY(-2px)';
    } else {
        header.style.background = 'rgba(17, 24, 39, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = `
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(251, 191, 36, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        header.style.transform = 'translateX(-50%) translateY(0px)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add service worker for offline functionality (basic implementation)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add analytics tracking (placeholder for Google Analytics)
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', { category, action, label });
    
    // Example usage:
    // trackEvent('Button', 'Click', 'Contact Form Submit');
    // trackEvent('Navigation', 'Click', 'Services Section');
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track form submissions
    if (quoteForm) {
        quoteForm.addEventListener('submit', () => {
            trackEvent('Form', 'Submit', 'Quote Request');
        });
    }
    
    // Track navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('Navigation', 'Click', link.textContent);
        });
    });
    
    // Track CTA button clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('Button', 'Click', 'Primary CTA');
        });
    });
    
    // Track service detail expansions
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceTitle = btn.closest('.service-card').querySelector('h3').textContent;
            trackEvent('Service', 'Expand', serviceTitle);
        });
    });
});

// Add error boundary for JavaScript errors
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // In production, you might want to send this to an error tracking service
});

// Enhanced form validation and analytics
document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Track form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    'event_category': 'engagement',
                    'event_label': 'quote_request'
                });
            }
            
            // Validate form
            if (validateForm()) {
                submitForm();
            }
        });
    }
    
    // Enhanced form validation
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        
        let isValid = true;
        
        // Name validation
        if (name.length < 2) {
            showError('name', 'Le nom doit contenir au moins 2 caractères');
            isValid = false;
        } else {
            clearError('name');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Veuillez entrer une adresse email valide');
            isValid = false;
        } else {
            clearError('email');
        }
        
        // Phone validation
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
            showError('phone', 'Veuillez entrer un numéro de téléphone valide');
            isValid = false;
        } else {
            clearError('phone');
        }
        
        // Service validation
        if (!service) {
            showError('service', 'Veuillez sélectionner un service');
            isValid = false;
        } else {
            clearError('service');
        }
        
        return isValid;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentNode.querySelector('.error-message') || 
                        document.createElement('div');
        
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff6b6b';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        if (!field.parentNode.querySelector('.error-message')) {
            field.parentNode.appendChild(errorDiv);
        }
        
        field.style.borderColor = '#ff6b6b';
    }
    
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentNode.querySelector('.error-message');
        
        if (errorDiv) {
            errorDiv.remove();
        }
        
        field.style.borderColor = '';
    }
    
    function submitForm() {
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            quoteForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_success', {
                    'event_category': 'engagement',
                    'event_label': 'quote_request_success'
                });
            }
        }, 2000);
    }
    
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="background: #4CAF50; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center;">
                <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                Merci ! Votre demande a été envoyée avec succès. Nous vous contacterons dans les 24 heures.
            </div>
        `;
        
        quoteForm.appendChild(successDiv);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
});

// Enhanced navigation with analytics
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const section = this.getAttribute('href').substring(1);
            
            // Track navigation clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'navigation_click', {
                    'event_category': 'engagement',
                    'event_label': section
                });
            }
        });
    });
});

// Enhanced service card interactions
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            
            // Track service card interactions
            if (typeof gtag !== 'undefined') {
                gtag('event', 'service_card_click', {
                    'event_category': 'engagement',
                    'event_label': serviceName
                });
            }
        });
    });
});

// Enhanced scroll animations with intersection observer
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Track section visibility
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'section_view', {
                        'event_category': 'engagement',
                        'event_label': entry.target.id || 'unknown_section'
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Enhanced accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Passer au contenu principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
}); 