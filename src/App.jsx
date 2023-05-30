
import MainSection from './components/mainsection'
import SideBar from './components/sidebar'
import {contacts} from './data/contacts.json'
import './App.css'
import { useState } from 'react'


function App() {

let [selected,setSelected]=useState(null)
let [value,setValue]=useState(false)
let [allContacts,setAllContacts]=useState([])

    return(
      <>

<div id='appdiv'>

<SideBar contacts={allContacts} setSelected={setSelected} setValue={setValue} />
<MainSection selected={selected} value={value} setValue={setValue} setSelected={setSelected} setAllContacts={setAllContacts} allContacts={allContacts} />

      </div>
      </>
   
      
     
    )
}

export default App
