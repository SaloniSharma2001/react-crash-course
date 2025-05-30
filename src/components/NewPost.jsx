import classes from './NewPost.module.css';
import { useState } from 'react';

//Object destructuring
// function NewPost(props) {
// function NewPost(onBodyChange, onAuthorChange, onCancel) {
function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

      function changeBodyHandler(event) {
    //console.log(event.target.value);
    setEnteredBody(event.target.value);
  }


  function changeAuthorHandler(event) {
    //console.log(event.target.value);
    setEnteredAuthor(event.target.value);
  }
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
// const [currentValue, setCurrentVlaue] = useState('');

//    function changeBodyHandler(event){
//      //console.log(event.target.value);
//      setCurrentVlaue(event.target.value);
//    }

function submitHandler(event){
event.preventDefault();
const postData = {
  body: enteredBody,
  author: enteredAuthor
};
console.log(postData)
//This will give us method only hence () and passed postData 
onAddPost(postData);
onCancel();
}

  return ( 
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        {/* <textarea id="body" required rows={3} onChange={changeBodyHandler} /> */}
         {/* <textarea id="body" required rows={3} onChange={props.onBodyChange} /> */}
         <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        {/* <input type="text" id="name" required onChange={props.onAuthorChange} /> */}
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type ="button" onClick={onCancel}>Cancle</button>
        {/* However type = submit is not required because it's the default value. */}
        {/* <button type ="submit">Submit</button> */}
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;