import React, { useEffect, useRef, useState } from 'react';
import './filmSection.css'
import anime from 'animejs';
import { getMovies } from './filmSectionFuncs';
// import Letterize from 'letterizejs';

export const FilmSection = () => {

  let [imagesArr, setImagesArr] = useState([]);

  useEffect(()=>{
    getMovies()
    .then((data) => setImagesArr(data));
  }, []);
  
  return (
    <main className="mainPage">
      <section>
        <div className="mainPageCenter">
          <h1 className="ml12">Watcha watching?</h1>
          <ul className="cards">
            {imagesArr.map((el) => {
              return (
                <li key={el.imdbID}>
                  <a href="/watcha/{{this.imdbID}}" className="card">
                    <img src={el.Poster} className="cardImageMain" alt=""/>
                    <div className="cardOverlay">
                      <div className="cardHeader">
                        <svg className="cardArc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <div className="cardHeaderText">
                          <h3 className="cardTitle">{el.Title}</h3>            
                          <span className="cardYear">{el.Year}</span>
                        </div>
                      </div>
                      <p className="cardPlot">{el.Plot}</p>
                    </div>
                  </a>      
                </li>
              )})
            }
          </ul>
          <div className="mainPageText">
            <p>Watcha lets you track watchas (our word for movies) you've seen and watchas you want to see. <br/> A true heaven for movie lovers!</p>
          </div>
        </div>
      </section>
    </main> 
  )
}