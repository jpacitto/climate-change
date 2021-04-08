import './titleSection.css';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


function TitleSection()
{
    // gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".paralax-wrapper",
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: true
      //   }
      // })
  
      // gsap.utils.toArray(".parallax").forEach(layer => {
      //   const movement = -(layer.offsetHeight * layer.dataset.depth)  
      //   tl.to(layer, {y: movement, ease: "slow"}, 0)
      // })

      window.addEventListener("scroll", function(event) {
        let top = window.pageYOffset;

        let layers = document.getElementsByClassName("parallax");
        let layer, speed, yPos;
        for(let i = 0; i < layers.length; i++) {
          layer = layers[i];
          speed = layer.getAttribute("data-speed");
          yPos = -(top * speed / 100);
          layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px');
        }
      })
    })
  
    return (
      <div className="App">
        <section className="title-section">
  
          <div className="title-section-blackout"></div>
  
          <div className="parallax-wrapper">

            <div className="background-layer layer-1 parallax" data-speed="0"></div>
            <div className="background-layer layer-2 parallax" data-speed="-30"></div>
            <div className="background-layer layer-3 parallax" data-speed="-50"></div>
            <div className="background-layer layer-4 parallax" data-speed="-60"></div>

            <div className="title-section-overlay parallax" data-speed="50">
              <div className="top-nav">
                <div className="top-nav-button cursor noselect">
                  <p>How to fight</p>
                </div>
                <div className="top-nav-left">
                  Effect Co.
                </div>
              </div>
  
              <p className="title">Climate Change.</p>
  
              <div className="bottom-nav">
                <div className="bottom-nav-left">
                    5&nbsp;<span>&#176;C</span>
                  </div>
  
                <div className="bottom-nav-websites noselect">
                  <ul className="socials-list">
                    <li>Greenpeace.</li>
                    <li>Sierra Club.</li>
                    <li>Earthjustic.</li>
                    <li>Ceres.</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
  
        </section>
      </div>
    );
}

export default TitleSection;