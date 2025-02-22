  // Skills Data
  const skills = [
    { name: 'Java', icon: 'image/Java.png' },
    { name: 'Kotlin', icon: 'image/Kotlin.png' },
    { name: 'Python', icon: 'image/Python.png' },
    { name: 'c++', icon: 'image/C++ (CPlusPlus).png' },
    { name: 'Jetpsck Composed ', icon: 'image/jetpack.png' },
    { name: 'Git Source Control', icon: 'image/GitHub.png' },
    { name: 'Ros', icon: 'image/Robot Operating System (ROS).png' },
    { name: 'MySQL', icon: ' image/MySQL.png' },
    { name: 'Android Studio', icon: 'image/Android Studio.png' },
    { name: 'HTML CSS & JS', icon: 'image/htmlcssJs.png' },
   
];

// Portfolio Data
const portfolioItems = [
    { image: 'image/ArduinoUNopro.png', title: 'bluetooth control car',  },
    { image: 'image/chatbot.png', title: 'Chat Bot app' },

];

// Experience Data
const experiences = [
    {
        title: 'Android Development',
        year: '-2024',
        description: 'Entry-Level Android Developer | Bringing fresh perspectives to mobile app creation'
    },
    {
        title: 'Python Projects ',
        year: '- 2025',
        description: 'Embarking on a journey into Machine Learning (ML) and Artificial Intelligence (AI)'
    },
    {
        title: 'Robotic',
        year: '- 2025',
        description: 'starting robotic projects'
    }
];

// Populate Skills
document.querySelector('.skills-grid').innerHTML = skills.map(skill => `
    <div class="skill-card">
        <img src="${skill.icon}"  alt="${skill.name}">
        <p>${skill.name}</p>
    </div>
`).join('');

// Populate Portfolio
document.querySelector('.portfolio-grid').innerHTML = portfolioItems.map(item => `
    <div class="portfolio-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay">
            <h3>${item.title}</h3>
            <a href="#" class="btn">View Details</a>
        </div>
    </div>
`).join('');

// Populate Experience
document.querySelector('.experience-timeline').innerHTML = experiences.map(exp => `
    <div class="experience-item">
        <h3>${exp.title}</h3>
        <p>${exp.year}</p>
        <p>${exp.description}</p>
    </div>
`).join('');

// Typing Effect
const texts = ['Bishal Das', 'a Developer', 'a Programmer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typed-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Start typing effect
type();

// Scroll Header Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});