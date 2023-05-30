



import { useEffect, useState } from "react"
import ContactForm from "./newContactform"


export default function MainSection({selected,value,setValue,setSelected,setAllContacts,allContacts}){

function deleteContact(){
  let index=allContacts.findIndex(index=>index.firstName===selected.firstName &&selected.lastName===index.lastName);
  allContacts.splice(index,1)
  setSelected(null)
  setValue(false)

}
if(value && selected==null){
 
  return (
    <div id="main">
    <ContactForm setAllContacts={setAllContacts} allContacts={allContacts}/>
    </div>
  
  )
}

return (
    <div id="main">
        <button onClick={()=>{
          
        setValue(true)
        setSelected(null)

        }} id="button">add Contact</button>
      {selected==null?(<h1>please select a contact</h1>):(<div id="fg">
        <button  className="delete" id="deleteContact" onClick={deleteContact}>delete Contact</button>

        <div className="contactimg"></div>
        <p>{selected.firstName} {selected.lastName}</p>
        <p>{selected.email}</p>
        <p>{selected.phoneNumber}</p>
        <p>{selected.description}</p>
        
      </div>)}
    </div>
)



}