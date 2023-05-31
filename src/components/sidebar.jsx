import { useEffect, useState } from 'react'



export default function SideBar({contacts,setSelected}){
let [value,setValue]=useState('')
let [result,setResult]=useState(false);
useEffect(()=>{

},[value,result,contacts])
//removing the spaces from the arr//start here
let val=[];
let split=value.split(' ');
for(let i in split){
   if(split[i]!==''){
      val.push(split[i])
   }
}
let newVal=val.join('')
//end here
    return(<div id="sidebar">
            
    <div>
        <h1>my contacts</h1>
        <form action="">
            <input type="text"placeholder='search contacts' onChange={(e)=>{
                    setValue(e.target.value)
               let filtered=contacts.filter(e=>
                   e.firstName.includes(value)||
                   e.lastName.includes(value)||
                  e.fullName.includes(newVal))
                           filtered.length<1?setResult(false):setResult(true)
            }}
            value={value}
            />
          </form>
        <div className='contactclass'>
           {
           //***checking if value of search bar is '',if it is then display all contacts else  display contacts based on search results***
          
              value==''? //IF value .. if no contacts display contacts you add will appear here
                contacts.length<1?(<div>contacts you add will appear here</div>)://else display contacts
              contacts.map((contact,index)=>{
               return<p key={index} onClick={()=>{
                  setSelected(contact)
                  console.log(contact)
               }}>
                 <span>{ contact.firstName}</span>
                 <span> </span>
                 <span>{contact.lastName }</span>
               </p>
          })://ELSE display search results
             //if !noResult display results
             result?
          contacts.map((searchResult,index,arr)=>{
     
                if(searchResult.firstName.includes(value)||searchResult.lastName.includes(value)||searchResult.fullName.includes(newVal)){
                   return( <p  key={index} onClick={()=>{
                    setSelected(searchResult)
                 }}>{searchResult.firstName+' '+searchResult.lastName}</p> ) 
                }
              }):(<div>no results match this </div>)//else display no results match this
              
              
 
           }
          
   
     
        </div>
    

    </div>
   
    </div>)
}