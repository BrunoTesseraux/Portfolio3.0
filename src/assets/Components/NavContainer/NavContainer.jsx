import Nav from "../Nav/Nav";
import PictureWithSpeechBubble from "../PictureWithSpeechBubbles/PictureWithSpeechBubble";
import "./NavContainer.scss"

const NavContainer = ({ activePage, setActivePage }) => {
    return (
        <div className="nav-container">
            <PictureWithSpeechBubble/>
            <div>
            <h1>Bruno T.</h1>
            <h2>Fulltack Developer</h2>
            </div>
            <Nav activePage={activePage} setActivePage={setActivePage} />
            <div className="socials">
                <a href="#"><p src="/Github.png" alt="" /></a>
                <a href="#"><p src="/instagram.png" alt="" /></a>
                <a href="#"><p src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    );
};

export default NavContainer;