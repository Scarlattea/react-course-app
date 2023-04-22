
import "./Navbar.css";

export default function Navbar(props){
    return(
        <div className="portfolio-navbar-container">
            <div className="navbar-short-inro-container">
                <div className="logo">logo</div>
                <div className="name">Székely Zsófia</div>
                <div className="job">Frontend Developer</div>    
            </div>
            <div className="other-buttons">
                <div className='button about'>About</div>
                <div className="button portfolio">portfolio</div>
                <div className="button hire-me">CV -&gt; hire me :&#41;</div>
            </div>            
        </div>
    );
}