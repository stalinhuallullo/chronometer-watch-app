import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from "react-icons/fa";
import { Provider } from 'react-redux';

export const LapList = ({listTime}) => {

  return (
    <div >
		<div id="cajaResultados">
			<h1>Marcadores</h1>
			<div className='content-timers'>
				{
					listTime.map( (time, index) => 
						<>
							<div className='item-timer'>
								<span>{index+1}: </span>
								<span>{ time }</span>
								<button className='btn btn-delete'>
									<IconContext.Provider 
										value={{ size: '14px' }}>
										<FaTrashAlt />
									</IconContext.Provider>
								</button>
							</div>
						</>
					)	
				}
			</div>
		</div>
	</div>
  )
}
