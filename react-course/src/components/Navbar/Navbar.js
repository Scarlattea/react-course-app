
import "./Navbar.css";

export default function Navbar(props){
    return(
        <div className="portfolio-navbar-container">
            <div class="">logo</div>
            <div class=" navbar-short-inro-container">
                <div class="name">Székely Zsófia</div>
                <div class="job">Frontend Developer</div>    
            </div>
            <div class='button about'>About</div>
            <div class="button portfolio">portfolio</div>
            <div class="button hire-me">CV -&gt; hire me :&#41;</div>
        </div>
    );
}