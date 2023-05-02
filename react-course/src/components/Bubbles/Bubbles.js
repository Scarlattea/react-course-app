import './Bubbles.css';
import React, { useState } from 'react';

export default function Bubbles(props) {

    let draw = true;
    
    React.useEffect(()=>{
            const canvas = document.querySelector('canvas');
            var ctx = canvas.getContext('2d');
            var x = 75,
            y = window.innerHeight,
            innerRadius = 10,
            outerRadius = 70,
            radius = 60;
            let iter = 1; 

            let drawInterval = setInterval(() => {
                console.log(draw);
                if(draw){
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    animateBubble(ctx, x, y, innerRadius, outerRadius, radius, iter);
                    iter++;
                }
            }, 80);
            
    });

    function animateBubble(ctx, x, y, innerRadius, outerRadius, radius, iter){
        var gradient = ctx.createRadialGradient(x + iter - 10 , y - iter - 30 , innerRadius, x + iter, y - iter  , outerRadius);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.1, 'white');
        gradient.addColorStop(0.2, 'rgba(236, 206, 242, 0.2)');
        gradient.addColorStop(0.3, 'rgba(142, 207, 209, 0.2)');
        
        
        gradient.addColorStop(0.8, 'white');
        gradient.addColorStop(0.9, 'rgba(142, 207, 209, 0.2)');
       
        ctx.beginPath();
        ctx.arc(x + iter , y - iter , radius, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    let body = document.querySelector('body');
    body.className = "bubble-page";

    function stopBtnClickHandler (e){
        draw = false; 
        console.log(draw);
        /*const canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);*/
    }

    function startBtnClickHandler (e){
        draw = true; 
        console.log(draw);
    }

    return (<>
        <div class="bubbles-main-container">
            <canvas className='bubbles-canvas' width={`${window.innerWidth}px`} height={`${window.innerHeight}px`}></canvas>
            <button className="stop-btn" onClick={stopBtnClickHandler}> STOP</button>
            <button className="start-btn" onClick={startBtnClickHandler}> START</button>
        </div>
    </>);
}