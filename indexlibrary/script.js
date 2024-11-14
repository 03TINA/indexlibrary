const data = [
    {
        id: 'schools',
        title: 'Schools Attended',
        items: [
            { year: '2014', name: 'Top Care PS' },
            { year: '2018', name: 'Bishops SS' },
            { year: '2020', name: 'Bishops SS' },
            { year: '2025', name: 'Makerere University' },
            
        ]
    },
    {
        id: 'hobbies',
        title: 'Hobbies',
        items: [
            { description: 'Listening to music' },
            { description: 'Dancing' },
            { description: 'Traveling' },
        ]
    },
    {
        id: 'experience',
        title: 'Work Experience',
        items: [
            { year: '2023', description: 'Intern at National Animal Genetic Resources Center and Data Bank.' },
            { year: '2024', description: 'Library Assistant at Uganda Christian University.' }
        ]
    }
];


const navMenu = document.getElementById('nav-menu');
const mainContent = document.getElementById('main-content');

data.forEach(section => {
   
    const navLink = document.createElement('a');
    navLink.href = `#${section.id}`;
    navLink.textContent = section.title;
    navMenu.appendChild(navLink);

    
    const sectionContainer = document.createElement('section');
    sectionContainer.id = section.id;
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = section.title;
    sectionContainer.appendChild(sectionTitle);

    
    if (section.id === 'schools' || section.id === 'experience') {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'grid-item';
            itemDiv.innerHTML = `<p>${item.year || ''}</p><p>${item.name || item.description}</p>`;
            gridContainer.appendChild(itemDiv);
        });
        sectionContainer.appendChild(gridContainer);
    } else if (section.id === 'hobbies') {
        section.items.forEach(item => {
            const hobbyParagraph = document.createElement('p');
            hobbyParagraph.textContent = item.description;
            sectionContainer.appendChild(hobbyParagraph);
        });
    }

    mainContent.appendChild(sectionContainer);
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
