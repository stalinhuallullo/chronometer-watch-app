import React, { useEffect } from 'react';

export const Timer = ({actualTime, setActualTime, time}) => {

    useEffect(() => {  
        const  hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
        const  minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
        const  seconds = ("0" + ((time / 10) % 100)).slice(-2)
        setActualTime(`${hours}:${minutes}.${seconds}`);
      }, [time]);
      
  return (
    <div id="cajaControles">
			<div class="marcador-block">
				<div id="marcador">
					<p>{ actualTime }</p>
				</div>
			</div>
		</div>
  )
}
