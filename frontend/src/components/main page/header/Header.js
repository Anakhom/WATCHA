import React, { useEffect, useRef } from 'react';
import './header.css'
import anime from 'animejs';
import Letterize from 'letterizejs';

export const Header = () => {

  const animationRef = useRef(null);

  useEffect(()=>{
    const letters = new Letterize({
      targets: ".animate"
    });

    animationRef.current = anime.timeline({
    targets: letters.listAll,
    delay: anime.stagger(100, {
      grid: [letters.list[0].length, letters.list.length],
      from: "center"
    }),
    loop: true
    });

    animationRef.current
      .add({
        scale: 0.5
      })
      .add({
        letterSpacing: "10px"
      })
      .add({
        scale: 1
      })
      .add({
        letterSpacing: "6px"
      });
  }, []);

  
  return (
    <>
    <header>
      <div className="animationDiv">
        <div className="animate">
          thriller•anime
        </div>
        <div className="animate">
          •horror•sci-Fi•
        </div>
        <div className="animate">
          drama•western
        </div>
        <div className="animate">
          •documentary•
        </div>
        <div className="animate">
          action•musical
        </div>
        <div className="animate">
          •comedy•indie•
        </div>
        <div className="animate">
          thriller•crime
        </div>
        <div className="animate">
          romcom•silent
        </div>
        <div className="animate">
          • psychedelic•
        </div>
        <div className="animate">
          mockumentary
        </div>
        <div className="animate">
          mystery•noir •
        </div>
        <div className="animate">
          psychological
        </div>
      </div>
    </header>
    </>    
  )
}