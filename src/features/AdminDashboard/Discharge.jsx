import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllHospitalsQuery } from '../../services/hospApi'

function Discharge() {
    var {isLoading,data} = useGetAllHospitalsQuery()
    var [selectedHospital,setselectedHospital] = React.useState(null)
    var [selectedBedType,setSelectedBedType] = React.useState('')
  return (
    <div className='border border-2 border-success m-2 p-2'>
        <h1>Discharge patient</h1>
        <>
        {
          isLoading && (<b>Please wait....</b>)
        }
        {
            !isLoading && <select name="" id="" onChange={(e)=>{setSelectedBedType(JSON.parse(e.target.value))}}>
                <option value={null} disabled selected>Please Select</option>
                {
                    data.map((hospital)=>{
                        return <link><option value={JSON.stringify(hospital)}>{hospital.hospitalName}</option></link>
                    })
                }
                <Link to={`details/${hospital.id}`}>Details</Link>
                
            </select>
            
        }
        </>
        
       
        

          
        
    </div>
    
  )
}

export default Discharge