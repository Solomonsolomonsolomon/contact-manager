import { useState } from 'react'



export default function SideBar({contacts,setSelected}){
let [value,setValue]=useState('')
let [noResult,setNoResult]=useState(false)

    return(<div id="sidebar">
            
    <div>
        <h1>my contacts</h1>
        <form action="">
            <input type="text"placeholder='search contacts' onChange={(e)=>{
                    setValue(e.target.value)
               let hi=  contacts.filter(e=>e.firstName.includes(value)||e.lastName.includes(value))
               if(hi.length===0){
                    setNoResult(true)
               }else{
                setNoResult(false)
               }
            }}
            value={value}
            />
 ;8       </form>
        <div className='contactclass'>
           {
           //checking if value of search bar is '',if it is then display all contacts else  display contacts based on search results
              value==''? 
                contacts.length<1?(<div>contacts you add will appear here</div>): 
              contacts.map((contact,index)=>{
               return<p key={index} onClick={()=>{
                  setSelected(contact)
                  console.log(contact)
               }}>
                 <span>{ contact.firstName}</span>
                 <span> </span>
                 <span>{contact.lastName }</span>
               </p>
          }):
          contacts.map((searchResult,index,arr)=>{
     
                if(searchResult.firstName.includes(value)||searchResult.lastName.includes(value)){
                   return( <p  key={index} onClick={()=>{
                    setSelected(searchResult)
                 }}>{searchResult.firstName+' '+searchResult.lastName}</p> ) 
                }
              })
 
           }
           {
               noResult&&value!=''?'no result matches this':''
               
           }
   
     
        </div>
    

    </div>
   
    </div>)
}