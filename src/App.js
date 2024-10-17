import React from 'react'
import Nav from './component/nav'
import { useState } from 'react'
function App() {

  let name = "Ali hassan"
  let num = 78
  let bolean = "true"
  function abc() {
     alert("hello ali hassan")
  }
  function kia() {
 
    let goods = prompt("enter your good name ")
    if (goods ==  "glass") {
         document.write("glass is available")      
    }
       
  }
  return (
    <div>

      <h1 className='hii'>{name}</h1>
      <p className='you'>My name is Ali hassan. Im Web Developer.Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications. Keep Reading Learn More About Web Design and Development.
      Learn web development fundamentals.
Choose a development specialization.
Learn key programming languages for web development.
Work on projects to develop your Web Developer skills.
Build a web development portfolio.  </p>
      <h1 className='gg'>{num}</h1>
      <h3 className='oo'>{bolean}</h3>
       
        <button onClick={abc} className='www'>click here</button>
        <button onClick={kia} className='lii'>click bro</button>

       <Nav name="Ali Hassan" rollnum ={15} />
       <Nav name="Ali Hassan Rabbani" rollnum ={55}/>
       <Nav name="Ali Hassan web" rollnum ={22}/>

    </div>
  )
}

export default App
