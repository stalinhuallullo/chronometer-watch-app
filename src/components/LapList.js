import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from "react-icons/fa";
import { Provider } from 'react-redux';

export const LapList = ({listTime}) => {

	console.log("LapList", listTime);
  return (
    <div >
		<div id="cajaResultados">
			<h1>Marcadores</h1>
			<div className='content-timers'>
				{
					listTime.map(item => {
						<div className='item-timer'>
							<span>1: </span>
							<span>00:06.95</span>
							<button className='btn btn-delete'>
								<IconContext.Provider 
									value={{ size: '14px' }}>
									<FaTrashAlt />
								</IconContext.Provider>
							</button>
						</div>
					})
				}

			</div>
		</div>
	</div>
  )
}
