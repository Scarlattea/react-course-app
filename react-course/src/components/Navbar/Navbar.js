
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div className="portfolio-navbar-container">
            <div className="navbar-short-inro-container">
                <div className="logo">logo</div>
                <div className="name">Székely Zsófia</div>
                <div className="job">Frontend Developer</div>    
            </div>
            <div className="other-buttons">
                <Link to="/" className='button about'>About</Link>
                <Link to="/portfolio_picker" className="button portfolio">Portfolio</Link>
                <Link to="/hire_me" className='button hire-me'>CV -&gt; hire me :&#41;</Link>
            </div>            
        </div>
    );
}