import React, { useEffect, useState } from 'react';

export const StopwatchControls = ({setTime, listTime, setListTime, actualTime}) => {

    const [running, setRunning] = useState(false);
    const [textControl, setTextControl] = useState("Start");
    const [textControlMarker, setTextControlMarker] = useState("Marcar");

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


  return (
    <div class="content-controls">
        <button className="btn" onClick={() => handlerEvents(textControl)} >{textControl}</button>
        <button className="btn" onClick={() => handlerEvents(textControlMarker)}>{textControlMarker}</button>       
        
      {/*<button id="comenzar" class="btn">
                  <IconContext.Provider
                      value={{ color: 'white', size: '13px' }}>
                      <FaPlay/>
                  </IconContext.Provider>
      </button>
      <button id="pausar" class="btn">
                  <IconContext.Provider
                      value={{ color: 'white', size: '13px' }}>
                      <FaPause/>
                  </IconContext.Provider>
      </button>
      <button id="marcar" class="btn">
                  <IconContext.Provider
                      value={{ color: 'white', size: '13px' }}>
                      <FaFlag/>
                  </IconContext.Provider>
      </button>
      <button id="cancelar" class="btn">
                  <IconContext.Provider
                      value={{ color: 'white', size: '13px' }}>
                      <FaSquare/>
                  </IconContext.Provider>
      </button>*/}
    </div>
  )
}
