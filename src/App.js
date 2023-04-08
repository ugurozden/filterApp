import React,{useState} from 'react'
import JSONDATA from './MOCK_DATA.json'

function App() {

	const[searchTerm,setSearchTerm]=useState("");	

	const filteredName =JSONDATA.filter(val=>val.first_name.toLowerCase().includes(searchTerm.toLowerCase()));

	console.log(filteredName)

	return (
	<div className='App' >

		<input 
		type="text" 
		placeholder="Search..." 
		onChange={e=>{setSearchTerm(e.target.value)}}/>
		{filteredName.map((val,index)=>{
			
			return <div className='user' key={val.id} >
				
				<p>{val.first_name}</p>
			
			</div>
	
		})}

	</div>

	)
}
export default App