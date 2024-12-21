import { useEffect, useState } from "react";
import "./variables.scss";
import "./App.scss";
import Nav from "./assets/Components/Nav/Nav";
import Footer from "./assets/Components/Footer/Footer";

// Import page components
import Home from "./assets/Pages/Home/Home";
import AboutMe from "./assets/Pages/AboutMe/AboutMe";
import Skills from "./assets/Pages/Skills/Skills";
import Projects from "./assets/Pages/Projects/Projects";
import CV from "./assets/Pages/CV/CV";
import Contact from "./assets/Pages/Contact/Contact";
import NavContainer from "./assets/Components/NavContainer/NavContainer";

function App() {
    const [activePage, setActivePage] = useState("Home");


    // Render the correct page based on `activePage`
    const renderPage = () => {
        switch (activePage) {
            case "Home":
                return <Home />;
            case "AboutMe":
                return <AboutMe />;
            case "Skills":
                return <Skills />;
            case "Projects":
                return <Projects />;
            case "CV":
                return <CV />;
            case "Contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
          // Get the mouse position relative to the document
          const mouseX = event.pageX;  // Mouse X position including scroll
          const mouseY = event.pageY;  // Mouse Y position including scroll
    
          // Update CSS variables based on mouse position
          document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`); // Corrected line
        };
    
        // Add event listener for mouse move
        window.addEventListener('mousemove', handleMouseMove);
    
        // Clean up event listener
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
        <div className="app__container">
            {/* Left Navigation */}
            <NavContainer activePage={activePage} setActivePage={setActivePage} />
            {/* Right Content Area */}
            <div className="content__container">{renderPage()}
            <Footer />
            </div>

        </div>
    );
}

export default App;