/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { React, useRef } from "react";

function LoginPass() {
  const loginRef = useRef(null);
  const passRef = useRef(null);
 
  const handlerSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll(".input");
   
    for(let inp of inputs){

    }
      if(!loginRef.current.value){
        loginRef.current.style = "border: 1px solid red";
          const error = document.createElement('p');
          error.textContent = "Введите значение";
          error.classList.add("mesLogin")
          error.style = "color: red";
          loginRef.current.after(error);
          loginRef.current.focus();
      }
      if(!passRef.current.value){
        passRef.current.style = "border: 1px solid red";
          const error = document.createElement('p');
          error.textContent = "Введите значение";
          error.classList.add("mesLogin")
          error.style = "color: red";
          passRef.current.after(error);
          passRef.current.focus();
      }



  }
  const handlerClick = (e) => {
    e.target.style = "border: 1px solid: black"
    document.querySelector(".mesLogin").remove();
   
  }
  const handlerChange = (e) => {
    e.target.style = "border: 1px solid: black"
    document.querySelector(".mesLogin").remove();
  }

 
  return (
    <div>
      <form className="form" onSubmit={handlerSubmit}>
        <input ref={loginRef} className="input" onClick={handlerClick} onChange={handlerChange} name="login" placeholder="login" />
        <input ref={passRef} className="input" onClick={handlerClick} onChange={handlerChange} name="pass" placeholder="pass"/>
        <button className="button" >Login</button>
      </form>
    </div>
  );
}

export default LoginPass;