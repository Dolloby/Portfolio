const projects = [
    {
        idProject: 1,
        imgProject: '/assets/img/ANGULAR.png',
        titleProject: 'Chat Bidireccional',
        descriptionProject: 'Este es un chat de socket.io.',
        linkProject: 'https://caht-client-edwin-dev.netlify.app/'
    },
    {
        idProject: 2,
        imgProject: '/assets/img/JS.png',
        titleProject: 'E-COMMERCE JS',
        descriptionProject: 'Proyecto de carrito de compras.',
        linkProject: 'https://caht-client-edwin-dev.netlify.app/'
    },
    {
        idProject: 3,
        imgProject: '/assets/img/VUE.png',
        titleProject: 'Formulario de contáctenos',
        descriptionProject: 'Formulario de contactenos con Email-JS.',
        linkProject: 'https://caht-client-edwin-dev.netlify.app/'
    },
    {
        idProject: 4,
        imgProject: '/assets/img/REACT.png',
        titleProject: 'Rick and Morty',
        descriptionProject: 'Api Rest Sencilla de Rick and Morty.',
        linkProject: 'https://caht-client-edwin-dev.netlify.app/'
    }
]

const references = [
    {
        idReference: 1,
        name: "Camilo Barrero",
        position: "Programador FullStack",
        comment: "Kevin es un desarrollador talentoso y confiable. Su habilidad en la programación y su enfoque en la resolución de problemas lo destacan.",
        imgReference: '/assets/img/male.png'
    },
    {
        idReference: 2,
        name: "Gerson Perez",
        position: "Programador FullStack",
        comment: "Su conocimiento en desarrollo web y su habilidad para adaptarse a nuevas tecnologías es impresionante.",
        imgReference: '/assets/img/male.png'
    },
    {
        idReference: 3,
        name: "Karen Gomez",
        position: "Programadora Front-End",
        comment: "Kevin ha demostrado ser un excelente colaborador en nuestros proyectos front-end, siempre superando nuestras expectativas.",
        imgReference: '/assets/img/female.png'
    },
    // {
    //     idReference: 4,
    //     name: "Lucía Rodríguez",
    //     position: "Especialista en Ciberseguridad",
    //     comment: "Kevin ha mostrado un gran compromiso y habilidad en la implementación de prácticas de seguridad en sus desarrollos.",
    //     imgReference: '/assets/img/Person4.png'
    // },
    {
        idReference: 4,
        name: "Oscar Moreno",
        position: "Programador FullStack",
        comment: "Kevin tiene un enfoque único para resolver problemas complejos, lo que lo convierte en un valioso miembro del equipo.",
        imgReference: '/assets/img/male.png'
    },
    // {
    //     idReference: 6,
    //     name: "Andrea Rincon",
    //     position: "Analista de TI",
    //     comment: "Kevin se destaca en la integración de sistemas y en la mejora continua de procesos, siempre entregando trabajos de calidad.",
    //     imgReference: '/assets/img/Person6.png'
    // }
]

const experience = [
    {
        idExperience: 1,
        nameLanguage: "Wordpress",
        progressPercentage: 60,
        level: "Medio",
        image: "/assets/ico/wordpress-fill.svg"
    },
    {
        idExperience: 2,
        nameLanguage: "HTML5",
        progressPercentage: 60,
        level: "Medio",
        image: "/assets/ico/html5-fill.svg"
    },
    {
        idExperience: 3,
        nameLanguage: "Javascript",
        progressPercentage: 50,
        level: "Medio",
        image: "/assets/ico/javascript-fill.svg"
    },
    {
        idExperience: 4,
        nameLanguage: "React",
        progressPercentage: 20,
        level: "Bajo",
        image: "/assets/ico/reactjs-fill.svg"
    },
    {
        idExperience: 5,
        nameLanguage: "NodeJS",
        progressPercentage: 10,
        level: "Bajo",
        image: "/assets/ico/nodejs-fill.svg"
    }
]

document.querySelectorAll('a[href=""]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }

    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuSidebar = document.getElementById('menu_Sidebar');
    const sidebar = document.querySelector('.sidebar-left');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Añadir la clase 'active' por defecto al cargar la página
    sidebar.classList.add('active');
    overlay.classList.add('active');

    // Mostrar el sidebar y el overlay al hacer clic en el botón
    menuSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Ocultar el sidebar y el overlay al hacer clic fuera del sidebar
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

});

loadSectionProjects()
function loadSectionProjects() {
    projects.forEach(project => createCardsProjects(project));
}

loadSectionReferences()
function loadSectionReferences() {
    references.forEach(reference => createCardsReferences(reference));
}

loadSectionExperiences()
function loadSectionExperiences() {
    experience.forEach(experience => createCardsExperiences(experience));
}

function createCardsProjects(project) {
    const cardProject = document.createElement('div')
    cardProject.classList.add('cards-projects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-image-card')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.titleProject

    const containerDesc = document.createElement('div')
    containerDesc.classList.add('container-description-card')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleProject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const goToProject = document.createElement('a')
    goToProject.href = project.linkProject

    goToProject.setAttribute('target', '_blank')
    goToProject.textContent = 'Ir a proyecto'

    cardProject.appendChild(containerImg)
    cardProject.appendChild(containerDesc)

    containerImg.appendChild(imgCard)
    containerDesc.appendChild(titleCard)
    containerDesc.appendChild(descriptionCard)
    containerDesc.appendChild(goToProject)

    document.querySelector('.cards-container-projects').appendChild(cardProject)
}

function createCardsReferences(reference) {
    const cardReference = document.createElement('div')
    cardReference.classList.add('card-reference')

    const containerImageReference = document.createElement('div')
    containerImageReference.classList.add('container-image-card-reference')

    const referenceImageCard = document.createElement('img')
    referenceImageCard.src = reference.imgReference
    referenceImageCard.alt = reference.name

    const containerDescriptionReference = document.createElement('div')
    containerDescriptionReference.classList.add('container-description-card-reference')

    const nameReference = document.createElement('h3')
    nameReference.textContent = reference.name

    const positionReference = document.createElement('h4')
    positionReference.textContent = reference.position

    const textReference = document.createElement('p')
    textReference.textContent = reference.comment

    cardReference.appendChild(containerImageReference)
    cardReference.appendChild(containerDescriptionReference)

    containerImageReference.appendChild(referenceImageCard)
    containerDescriptionReference.appendChild(nameReference)
    containerDescriptionReference.appendChild(positionReference)
    containerDescriptionReference.appendChild(textReference)

    document.querySelector('.cards-container-references').appendChild(cardReference)
}

function createCardsExperiences(experience) {
    const cardExperience = document.createElement('div')
    cardExperience.classList.add('card-experience')

    const imgCardExperience = document.createElement('img')
    imgCardExperience.src = experience.image

    const nameLanguage = document.createElement('p')
    nameLanguage.textContent = experience.nameLanguage

    const progressExperience = document.createElement('progress')
    progressExperience.classList.add('progress-bar')
    progressExperience.setAttribute('value', experience.progressPercentage)
    progressExperience.setAttribute('max', '100')
    
    const levelcardExperience = document.createElement('p')
    levelcardExperience.textContent = experience.level


    cardExperience.appendChild(imgCardExperience)
    cardExperience.appendChild(nameLanguage)
    cardExperience.appendChild(progressExperience)
    cardExperience.appendChild(levelcardExperience)

    document.querySelector('.cards-container-experiences').appendChild(cardExperience)
}