import './Bubbles.css';
import React from 'react';

export default function Bubbles(props) {
    React.useEffect(()=>{
        const canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');

        var x = 100,
            y = 75,
            // Radii of the white glow.
            innerRadius = 5,
            outerRadius = 70,
            // Radius of the entire circle.
            radius = 60;
        
        var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(1, 'blue');
        
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        
        ctx.fillStyle = gradient;
        ctx.fill();
    });

    let body = document.querySelector('body');
    body.className = "bubble-page";

    return (<>
        <div class="bubbles-main-container">
            <canvas className='bubbles-canvas' width={`${window.innerWidth}px`} height={`${window.innerHeight}px`}></canvas>
            
        </div>
    </>);
}