import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setpeople] = useState(data);
  const [index, setindex] = React.useState(0);
  let lastindex = people.length -1;


  useEffect(() => {
    const lastindex = people.length -1;
    if(index < 0){
      setindex(lastindex);
    }
    if(index > lastindex){
      setindex(0);
    }
  },[index, people]);
  
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id,image,name,title,quote } = person;

          let position = "nextSlide";

          if(personIndex === index){
            position = "activeSlide";
          }
          if(personIndex === index -1 || (index === 0 && personIndex === people.length - 1)){
            position = "prevSlide";
          }


          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img"/>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote} </p>
              <FaQuoteRight className="icon"/>

            </article>
          )
        })}

        <button className="prev" onClick={() => setindex(index-1)}><FiChevronLeft/></button>
        <button className="next" onClick={() => setindex(index+1)}><FiChevronRight/></button>
      </div>
    </section>
  );
}

export default App;
