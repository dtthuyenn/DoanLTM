document.addEventListener('DOMContentLoaded', function () {
    // Project data (can be fetched from an API in a real application)
    const projects = [
        {
            title: "Real-time Chat Application",
            description: "Developed a real-time chat application using Node.js, Express, and Socket.IO, with a ReactJS frontend. Supports text messages, image sharing, and status notifications.",
            link: "https://github.com/your-github/chat-app"
        },
        {
            title: "Library Management System",
            description: "Built a library book and member management system with Java Spring Boot (Backend) and Thymeleaf/JSP (Frontend). Integrated with a MySQL database.",
            link: "https://github.com/your-github/library-management"
        },
        {
            title: "Personal Blog Website (This Project!)",
            description: "Created a static blog site using Hugo and deployed on GitHub Pages. Shares articles on Java and JavaScript programming.",
            link: "https://your-blog-repo.github.io/" // Replace with your actual repo or blog link
        }
        // Add your other projects here
    ];

    const projectListDiv = document.getElementById('project-list');

    // Check if the element exists before manipulating it
    if (projectListDiv) {
        projectListDiv.innerHTML = ''; // Clear "Loading projects..." content

        if (projects.length === 0) {
            projectListDiv.innerHTML = '<p>No projects added yet.</p>';
            return;
        }

        // Create project cards and add them to HTML
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
            `;
            projectListDiv.appendChild(projectCard);
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple JavaScript effect: change tagline color on scroll
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                tagline.style.color = '#f39c12'; // Bright orange when scrolled
                tagline.style.transition = 'color 0.5s ease';
            } else {
                tagline.style.color = '#ecf0f1'; // Back to initial light color
            }
        });
    }

});