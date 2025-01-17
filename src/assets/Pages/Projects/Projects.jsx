import "./Projects.scss";

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Die erste 'Webseite'",
            description: "Meine erste Webseite ist weder fertig noch besonders schön, aber sie markiert den Moment, in dem ich entdeckt habe, wie viel Spaß es macht, ein Design und eine Webseite zum Leben zu erwecken. Dieses Projekt war mein Einstieg in die Welt des Webdesigns und der Entwicklung und weckte meine Leidenschaft für das Erstellen digitaler Erlebnisse.",
            screenshot: "/portfolio1.png",
            link: "https://portfolio-tawny-chi-23.vercel.app/",
            technologies: ["HTML", "CSS"],
        },
        {
            id: 2,
            title: "MovieDB",
            description: "Die MovieDB ist eine reine Frontend-Webapplikation, die im Rahmen eines Gruppenprojekts mit React und SASS entwickelt wurde. Mein Beitrag umfasste die Entwicklung von zwei Film-Slidern, den Dark Mode, die Home Page sowie Login- und Registrierungsformulare. Das Team ergänzte die API-Anbindung, Suchfunktion sowie Detail- und Listenansicht.",
            screenshot: "/movieDB.png",
            link: "https://movie-db-blush-seven.vercel.app/",
            technologies: ["React", "Sass"],
        },
        {
            id: 3,
            title: "Grosshop",
            description: "Grosshop ist ein Flink-Klon, den ich im Rahmen meines Abschlussprojekts in einer Gruppe von vier Personen entwickelt habe. Die App ermöglicht es Nutzern, Produkte in einem Warenkorb zu sammeln, Bestellungen aufzugeben und ihre Bestellhistorie einzusehen. Während ich das gesamte Frontend übernommen habe, wurde das Backend von meinen Teamkollegen entwickelt. Leider wurde dort nicht wie geplant gearbeitet, weshalb ich im Frontend improvisieren musste, um die App präsentierbar zu machen. Trotz dieser Herausforderungen arbeite ich aktuell daran, das Projekt mit einem funktionierenden Backend fertigzustellen.",
            screenshot: "/Grosshop.png",
            link: "https://abschlussprojekt-xnwy.onrender.com/",
            technologies: ["React", "Sass", "Express", "MongoDB", "nodemailer", "JWT"],
        },
        {
            id: 4,
            title: "Portfolio alt",
            description: "An innovative platform for seamless collaboration.",
            screenshot: "/Portfolio2.png",
            link: "https://portfolio2-blue-beta.vercel.app/",
            technologies: ["React", "Sass"],
        },
    ];

    return (
        <div className="projects">
            <div className="projects__list">
                {projectData.map((project) => (
                    <div className="projects__item" key={project.id}>
                        <img
                            className="projects__screenshot"
                            src={project.screenshot}
                            alt={`${project.title} screenshot`}
                        />
                        <div className="projects__details">
                            <h3 className="projects__title">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link"
                                >
                                    {project.title}
                                    <img
                                        className="projects__link-icon"
                                        src="path/to/arrow-icon.svg"
                                        alt="Link indicator"
                                    />
                                </a>
                            </h3>
                            <p className="projects__description">
                                {project.description}
                            </p>
                            <div className="projects__technologies">
                                {project.technologies.map((tech, index) => (
                                    <button
                                        className="projects__technology"
                                        key={index}
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;