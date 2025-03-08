// Add this button to your HTML navbar
<button id="theme-toggle"><i class="fas fa-moon"></i></button>

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.innerHTML = document.body.classList.contains('light-theme') ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Add to CSS
.light-theme {
    background-color: #f0f0f0;
    color: #1e1e2f;
}

.light-theme header {
    background: rgba(255, 255, 255, 0.9);
    color: #1e1e2f;
}

.light-theme .project-card {
    background: rgba(255, 255, 255, 0.9);
}
// Language Toggle
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'ar') {
        document.documentElement.lang = 'en';
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'center';
        languageToggle.textContent = 'العربية';
        updateTextContent('en');
    } else {
        document.documentElement.lang = 'ar';
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'center';
        languageToggle.textContent = 'English';
        updateTextContent('ar');
    }
});

function updateTextContent(language) {
    if (language === 'en') {
        document.getElementById('site-title').textContent = 'KAPATCHINO';
        document.getElementById('nav-home').textContent = 'Home';
        document.getElementById('nav-about').textContent = 'About Us';
        document.getElementById('nav-games').textContent = 'Games';
        document.getElementById('hero-title').textContent = 'Welcome to KAPATCHINO Indie Game Studio';
        document.getElementById('hero-description').textContent = 'We create games with the best designs and coolest styles.';
        document.getElementById('about-title').textContent = 'About Us';
        document.getElementById('about-description').textContent = 'We are an Arabian Syerian independent game studio aiming to create innovative and engaging games.';
        document.getElementById('games-title').textContent = 'Games';
        document.getElementById('text-game-ar').textContent = 'Doll Journey: Something Lost';
        document.getElementById('txt-game-ar').textContent = 'A (Souls Like) game but with an Arabian touch and an Arabian world with a stunning story and advanced combat system and unique level design';
        document.getElementById('lnk1-game-ar').textContent = 'Play the game';
        document.getElementById('lnk2-game-ar').textContent = 'Watch the Trailer';
        document.getElementById('footer-text').textContent = '© 2025 KAPATCHINO. All rights reserved.';
    } else {
        document.getElementById('site-title').textContent = 'كاباتشينو';
        document.getElementById('nav-home').textContent = 'الرئيسية';
        document.getElementById('nav-about').textContent = 'من نحن';
        document.getElementById('nav-games').textContent = 'الألعاب';
        document.getElementById('hero-title').textContent = 'مرحبًا بكم في استوديو كاباتشينو للألعاب المستقلة';
        document.getElementById('hero-description').textContent = 'نحن نصنع الألعاب بأفضل التصاميم وأروع الأساليب.';
        document.getElementById('about-title').textContent = 'من نحن';
        document.getElementById('about-description').textContent = 'نحن استوديو ألعاب عربي سوري مستقل يهدف إلى إنشاء ألعاب مبتكرة وجذابة.';
        document.getElementById('games-title').textContent = 'الألعاب';
        document.getElementById('text-game-ar').textContent = 'رحلة دمية : شيء مفقود';
        document.getElementById('txt-game-ar').textContent = 'لعبة (Souls Like) ولكن مع لمسة عربية وعالم عربي مع قصة مذهلة ونظام قتال متقدم وتصميم مستويات فريد';
        document.getElementById('lnk1-game-ar').textContent = 'تجربة اللعبة';
        document.getElementById('lnk2-game-ar').textContent = 'عرض الفيديو';
        document.getElementById('footer-text').textContent = '© 2025 كاباتشينو. جميع الحقوق محفوظة.';
    }
}

// Burger Menu Toggle
const burgerMenu = document.getElementById('burger-menu');
const navList = document.getElementById('nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Close Navbar on Click Outside (for Mobile)
document.addEventListener('click', (event) => {
    const isClickInsideNav = navList.contains(event.target) || burgerMenu.contains(event.target);
    if (!isClickInsideNav) {
        navList.classList.remove('show');
    }
});

// Smooth Scroll to Top
const toTopBtn = document.getElementById('toTopBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll animation
    });
});
// 3D Scene Initialization
function init3DScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    // Add floating particles
    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: '#ff6b6b'
    });
    const particleMesh = new THREE.Points(particles, material);
    scene.add(particleMesh);

    camera.position.z = 2;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        particleMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
}

// Initialize 3D scene when page loads
window.addEventListener('load', init3DScene);

// Add GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animate project cards on scroll
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center'
        },
        opacity: 0,
        y: 100,
        duration: 1
    });
});

// Add hover effect to social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            y: -10,
            duration: 0.3
        });
    });
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            y: 0,
            duration: 0.3
        });
    });
});
