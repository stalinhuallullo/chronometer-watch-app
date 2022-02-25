import React, { useState, useEffect } from "react";
import { LapList } from "./components/LapList";
import { StopwatchControls } from "./components/StopwatchControls";
import { Timer } from "./components/Timer";

export const ChronometerApp = () => {


   {/*const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [actualTime, setActualTime] = useState("00:00:00");
    const [listTime, setListTime] = useState([]);
    const [textControl, setTextControl] = useState("Start");
    const [textControlMarker, setTextControlMarker] = useState("Marcar");
  */}

  const [time, setTime] = useState(0);
  const [actualTime, setActualTime] = useState("00:00:00");
  const [listTime, setListTime] = useState([]);


 {/*

  const handlerEvents = (event) => {
    console.log("==> ", event);
    switch(event){
      case 'Start':
        return handlerStart(event)
      case 'Stop':
        return handlerStop(event)
      case 'Reset':
        return handlerReset(event)
      case 'Marcar':
        return handlerMarker(event)
      default:
        return event;
    }
  }

  const handlerStart = () => {
    setRunning(true);
    console.log("handlerStart");
  }
  const handlerStop = () => {
    setRunning(false);
    console.log("handlerStop");

  }
  const handlerReset = () => {
    setTime(0);
    console.log("handlerReset");
  }
  const  handlerMarker = () => {
    listTime.push(actualTime);
    setListTime(listTime);
    console.log("handlerMarker");

  }

  useEffect(() => {    
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);    
        setTextControl("Stop");
        setTextControlMarker("Marcar");
      }, 10);
    } else if (!running) {
      clearInterval(interval);
      setTextControl("Start");
      setTextControlMarker("Reset");
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {  
    const  hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    const  minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    const  seconds = ("0" + ((time / 10) % 100)).slice(-2)
    setActualTime(`${hours}:${minutes}.${seconds}`);
  }, [time]);
*/}

  return (
    <>
      <div class="container-fluid container-guay">
        <Timer 
          actualTime= {actualTime}
          setActualTime= {setActualTime}
          time= {time}/>
        <StopwatchControls 
          setTime = {setTime}
          listTime = {listTime}
          setListTime = {setListTime}
          actualTime = {actualTime} />
        <LapList />
      </div>

      {/*<div className="stopwatch">
        <div className="numbers">
          <span>{ actualTime }</span>      
        </div>
        <div className="buttons">
          <button onClick={() => handlerEvents(textControl)} >{textControl}</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => handlerMarker()}>Marcar</button>
          <button onClick={() => handlerEvents(textControlMarker)}>{textControlMarker}</button>       
        </div>
        
      </div>*/}
    </>
  );
};


