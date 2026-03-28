// Custom Cursor Follower
const cursor = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
    });
});

// Interactive hover effects for cursor
const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2.5,
            backgroundColor: 'rgba(255, 62, 62, 0.2)',
            mixBlendMode: 'normal',
            duration: 0.3
        });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: '#ff3e3e',
            mixBlendMode: 'difference',
            duration: 0.3
        });
    });
});

// Page Load Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
    .from('.hero-text h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    }, '-=0.5')
    .from('.hero-text p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-image-container', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
    }, '-=1')
    .from('.btn-primary', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');
});

// Scroll animations for sections
gsap.registerPlugin(ScrollTrigger);

// Section Titles/Text Reveal
const revealText = document.querySelectorAll('.section-title');
revealText.forEach(text => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Skills Section Animation
gsap.from('.skill-card', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out'
});

// Project Card Animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%',
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
});

// Contact Section Reveal
gsap.from('.contact-links a', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
    },
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'back.out(1.7)'
});
