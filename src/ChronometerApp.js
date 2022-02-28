import React, { useEffect, useState } from "react";
import { LapList } from "./components/LapList";
import { StopwatchControls } from "./components/StopwatchControls";
import { Timer } from "./components/Timer";

export const ChronometerApp = () => {

  const [time, setTime] = useState(0);
  const [actualTime, setActualTime] = useState("00:00:00");
  const [listTime, setListTime] = useState([]);
  const url = 'http://localhost:3000/api/marke/';

  useEffect(() => {  
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
  }, []);

  return (
    <div className="container-guay">
        <Timer 
          actualTime= {actualTime}
          setActualTime= {setActualTime}
          time= {time}/>
        <StopwatchControls 
          setTime = {setTime}
          listTime = {listTime}
          setListTime = {setListTime}
          actualTime = {actualTime} />
        <LapList 
          listTime = {listTime}
          setListTime = {setListTime}/>
    </div>
  );
};

