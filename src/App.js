import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import ShowDetail from './components/Details'
import dataServices from './services/data'

const App = () =>{
    const [ persons, setPersons ] = useState([])
    const [ status, setStatus ] = useState(true)
    const [currentId, setId] = useState(0)
    useEffect(() =>{
        dataServices
            .getAll()
            .then(initial_data => {
            setPersons(initial_data)
            })
        }, [])     
    const details = (event) =>{
        event.preventDefault()
        setStatus(false)
        setId(event.target.id)
    }
    const select = (elem) =>{
            return(elem.id === parseInt(currentId))
        }      
    const selected = persons.filter(select)
    if (status){
        return(
            <div>
                <PersonForm person = {persons} show = {details}  />
            </div>
    )}
    else{
        return(
            <div>
                <ShowDetail data = {selected}/>
            </div>
        )}
}
export default App