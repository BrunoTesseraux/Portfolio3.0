import React, { useEffect, useRef, useState } from "react";
import "./Nav.scss";

const Nav = ({ activePage, setActivePage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const panelRefs = useRef([]);
  const [activeSubpoint, setActiveSubpoint] = useState("");

  const navItems = [
    { label: "Home", subpoints: ["Introduction", "Features", "Gallery"] },
    { label: "AboutMe", subpoints: ["Biography", "Journey", "Hobbies"] },
    { label: "Skills", subpoints: ["Frontend", "Backend", "Tools", "Not work related"] },
    { label: "Projects", subpoints: ["Project A", "Project B", "Project C"] },
    { label: "CV", subpoints: [] },
    { label: "Contact", subpoints: ["Email", "Social Media", "Form"] },
  ];

  useEffect(() => {
    panelRefs.current.forEach((panel, index) => {
      if (index === activeIndex) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      } else {
        panel.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const updateActiveSubpoint = () => {
      navItems.forEach((item) => {
        item.subpoints.forEach((subpoint) => {
          const section = document.getElementById(subpoint.toLowerCase());
          if (section) {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
            if (isVisible) {
              setActiveSubpoint(subpoint);
            }
          }
        });
      });
    };

    // Call the function once to initialize on load
    updateActiveSubpoint();

    // Add scroll event listener for dynamic updates
    window.addEventListener("scroll", updateActiveSubpoint);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", updateActiveSubpoint);
    };
  }, [navItems]);

  const handleAccordionClick = (index, label) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
    setActivePage(label); // Set activePage when an accordion item is clicked
    console.log(activePage);
  };

  const handleSubpointClick = (subpoint) => {
    const section = document.getElementById(subpoint.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSubpoint(subpoint);
    }
  };

  return (
    <div className="navbar">
      <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? "nav--open" : "nav--closed"}`}>
        {navItems.map((item, index) => (
          <div
            key={item.label}
            className={`nav__accordion-item ${
              activeIndex === index ? "nav__accordion-item--active" : ""
            }`}
          >
            <button
              className={`nav__accordion-header ${
                activeIndex === index ? "nav__accordion-header--active" : ""
              }`}
              onClick={() => handleAccordionClick(index, item.label)} // Pass label to set active page
            >
              {item.label}
            </button>
            <div
              className="nav__accordion-body"
              ref={(el) => (panelRefs.current[index] = el)}
            >
              <ul className="nav__subpoint-list">
                {item.subpoints.map((subpoint) => (
                  <li
                    key={subpoint}
                    className={`nav__subpoint-item ${
                      activeSubpoint === subpoint ? "nav__subpoint-item--active" : ""
                    }`}
                    onClick={() => handleSubpointClick(subpoint)}
                  >
                    {subpoint}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Nav;