import React, { useEffect, useState } from 'react';

export const StopwatchControls = ({setTime, listTime, setListTime, actualTime}) => {
  console.log("StopwatchControls");

    const [running, setRunning] = useState(false);
    const [textControl, setTextControl] = useState("Start");
    const [textControlMarker, setTextControlMarker] = useState("Marcar");
    const url = 'http://localhost:3000/api/marke/';

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
  }
  const handlerStop = () => {
    setRunning(false);
  }
  const handlerReset = () => {
    fetch(url + "all", {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log("se reseteo con exito");
      listAll();
      setTime(0);
    })
  }
  const handlerMarker = () => {

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({"marke": actualTime}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        listAll();
      })
    //setListTime([...listTime, actualTime ]);
  }

  const listAll = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data=>{
      const list = data.map((item) => {
        return {
          "id": item.id,
          "marke": item.marke,
        }
      });
      setListTime([...list]);
    });
  }

  return (
    <div className="content-controls">
      <button className="btn" onClick={() => handlerEvents(textControl)} >{textControl}</button>
      <button className="btn" onClick={() => handlerEvents(textControlMarker)}>{textControlMarker}</button>
    </div>
  )
}
