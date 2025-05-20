import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost() {
    //Imperative approach to add event listener however we will use declarative appraoch for react and vite based application
    //Like onKeyDown or onChange
   // document.querySelector('textarea').addEventListener('change', function () {});

//    //useState function can take anything in params but returns a 2D array
//    const stateData = useState('');
//    //This stateData array will have exactly two elements, previous state and current state
//    stateData[0]; //Current value
//    stateData[1]; //state updating function
//    let enteredBody = '';

//Array destructuring, convention is, state updating function should start with set keyword
const [currentValue, setCurrentVlaue] = useState('');

   function changeBodyHandler(event){
     //console.log(event.target.value);
     setCurrentVlaue(event.target.value);
   }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{currentValue}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;