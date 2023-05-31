import {useEffect, useState } from "react"


export default function ContactForm({allContacts,setAllContacts}){

    function handleSubmit(e){
        e.preventDefault();
     
       setAllContacts((prev)=>{
        contact.fullName=`${contact.firstName}${contact.lastName}`
        return[...prev,contact]});

console.log(allContacts)
        setContact({
            firstName:'',
            lastName:'',
            email:'',
            description:'',
            phoneNumber:'',
            
        })
      }
    const handleClick=(e)=>{
        setContact((prevState)=>{
           return(
            {...prevState,  [e.target.name]:e.target.value}
           )
        })
   
}

    let [contact,setContact]=useState({
        firstName:"",
        lastName:"",
        email:"",
        description:"",
        phoneNumber:"",
        fullName:``
    })

    return(
        <div id="contact-form">
          <h4>please fill in the correct information</h4>
          <form action="" onSubmit={handleSubmit}>
          
          <div>
              {/* first Name*/}
          <input type="text" placeholder="first name" name="firstName" onChange={handleClick}   
          value={contact.firstName}
           />

              {/* last Name*/}
          <input type="text" placeholder="last name" name="lastName"
          onChange={handleClick}
          value={contact.lastName}
          />
          </div>
              {/* email*/}
            <input type="text" placeholder="email" onChange={handleClick} name="email" value={contact.email}/>
               {/* description*/}
            <input type="text" placeholder="description" 
            name="description"
            onChange={handleClick}
            value={contact.description}
            />
            {/* phone number*/}
            <input type="text" placeholder="phone number"
            name="phoneNumber"
            onChange={handleClick}
            value={contact.phoneNumber}
            
            />

          
            <button>submit</button>
            
          </form>
        </div>
    )
}