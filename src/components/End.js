import React, { useEffect, useState } from 'react';


const End = ({results,data,onReset,onAnswersCheck, time}) => {

  const [correctAnswers,setCorrectAnswers ] = useState(0);

  useEffect(()=>{
    let correct = 0;

    results.forEach( (result,index) => {
      if(result.a === data[index].answer){
      correct++;
      }
      
    });  
    setCorrectAnswers(correct)
  },[]);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3> 
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) *100)}%</strong></p>
          <p><strong>Your Time</strong> {time} s</p>
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button>
          <button className="button is-success mr-2" onClick={onReset}>try again</button>

        </div>
      </div> 

    </div>

  )
}

export default End;