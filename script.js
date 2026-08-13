async function loadProjects() {

    const container = document.getElementById("projects-container");

    try {

        const response = await fetch("/api/projects");

        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }

        const projects = await response.json();

        container.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("div");

            card.className = "project-card";

            card.innerHTML = `
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p>
                    <strong>Technologies:</strong>
                    ${project.technologies}
                </p>

                <a href="${project.github_url}"
                   target="_blank">
                    View on GitHub
                </a>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Unable to load projects.</p>";
    }
}


loadProjects();