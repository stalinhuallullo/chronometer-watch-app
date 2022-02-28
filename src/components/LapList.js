import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from "react-icons/fa";
import { Provider } from 'react-redux';

export const LapList = ({listTime, setListTime}) => {

	const handlerDelete = async(id) => {
		const url = 'http://localhost:3000/api/marke/';
		await fetch(url + id, {
			method: 'DELETE',
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
		  .then(response => response.json())
		  .then((json) => {
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
			console.log("list ==> ", list);	
	
				setListTime([...list]);
			  });
		  })

	}

  return (
    <div >
		<div id="cajaResultados">
			<h1>Marcadores</h1>
			<div className='content-timers'>
				{
					listTime.map( (time) => 
						<div className='item-timer' key={time.id}>
							<span>{ time.id }: </span>
							<span>{ time.marke }</span>
							<button className='btn btn-delete' onClick={() => handlerDelete(time.id)}>
								<IconContext.Provider 
									value={{ size: '14px' }}>
									<FaTrashAlt />
								</IconContext.Provider>
							</button>
						</div>
					)	
				}
			</div>
		</div>
	</div>
  )
}
