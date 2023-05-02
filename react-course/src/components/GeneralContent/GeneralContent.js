import "./GeneralContent.css";

export default function GeneralContent(props){
    let body = document.querySelector('body');
    body.className = "about-me-page";
    let bubbles = [];
    for (let k = 1; k < 150; k++){
            let half =  50;
            let size = Math.floor(Math.random()* 50 + 5);
            let x_position =  Math.floor(Math.random()* window.innerWidth);
            let y_position = k < half ? Math.floor(Math.random()* window.innerHeight ) : Math.floor(Math.random()* window.innerHeight + window.innerHeight ); 
            let animation_time =  k < half ? (Math.random()* 30 + 5) : (Math.random()* 60 + 20);
            bubbles.push({
            size: size,
            x: x_position,
            y: y_position,
            timer: animation_time,
            animation : k < half ? `${animation_time}s linear bubble-move` : `${animation_time}s linear bubble-move infinite`,
            noReturn : k < half ? true : false,
            number : k
            });        
    }
    return(
        <div className="portfolio-general-content">
           <div className="about-container">
            <div className="corner-wrapper top"><div className="corner-top-left"></div></div>
            <div className="corner-wrapper bottom"><div className="corner-bottom-right"></div></div>
            <div className="name-container">Zsófia Székely</div>
            <div className="job-container">Frontend Developer</div>
            <div className="short-introduction">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend sed est luctus tincidunt. Nullam eget sodales enim, ut dictum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin faucibus diam nec iaculis ultricies. Ut at volutpat nibh. Suspendisse ut mauris faucibus turpis mattis convallis. Sed tortor lacus, mollis quis purus nec, mollis hendrerit justo. Maecenas feugiat viverra erat, a finibus massa tristique et.

                Phasellus et lorem vel justo sollicitudin dignissim in non arcu. Vestibulum volutpat, nisl ut tempus pellentesque, massa ligula maximus nisi, eget lacinia justo purus id sapien. Nunc efficitur leo elit, id vulputate nisi posuere at. Aenean risus turpis, ullamcorper ac nisi a, ornare malesuada libero. Nulla aliquam auctor risus, quis venenatis urna posuere vitae. Pellentesque bibendum erat ac augue pretium accumsan. Suspendisse in ex pellentesque, bibendum metus a, dignissim diam. Quisque non euismod lectus. Aenean scelerisque nisi condimentum neque viverra dapibus. Cras nec purus ante. Vivamus ultricies lacus nibh, et viverra libero mattis vitae. Vestibulum scelerisque ullamcorper accumsan. Vestibulum feugiat ut mi facilisis venenatis.</div>
                    <div className="check-my-work-button">My portfolio</div>
           </div>
           {bubbles.map((bubble)=> {
            let bubbleStyle = {
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.x}px`,
                top: `${bubble.y}px`,
                animation: `${bubble.animation}`,
            };
            return <div className= {bubble.noReturn ? `no-return decoration bubble bubble-${bubble.number}` : `decoration bubble bubble-${bubble.number}`} style={bubbleStyle} ></div>
           })}
        </div>
    );
}