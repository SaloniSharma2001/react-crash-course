import Post from './Post';
import classes from './PostList.module.css'
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

//But by doing this we have state in the right place but the event is a different component.
function PostList({isPosting, onStopPosting}) {
  const[post, setPosts ] = useState([]);

  function addPostHandler(postData){
    //To make sure that potentially existing posts aren't lost, we can use spread operator, a default operator built into js to spread out
    //exisitng posts into this new array of posts so that we add this new post as the first element in this array and the exisitng posts come
    //thereafter. But this is not and apt code. There is a rule like if we update state and that new state is based on that previous state value
    //as it's the case here where the new state is based on the existing posts you should actually pass a function to set post.
    //For example, an arrow function.
     // setPosts([postData, ...posts]);
     setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  //Lifted this state to App.jsx
  // const [modalIsVisible, setModalIsVisible] = useState(true);
  //Now we will dynamically render the postList so we no longer need useState in here
  // const [enteredBody, setEnteredBody] = useState('');
  // const [enteredAuthor, setEnteredAuthor] = useState('');

  // function changeBodyHandler(event) {
  //   //console.log(event.target.value);
  //   setEnteredBody(event.target.value);
  // }


  // function changeAuthorHandler(event) {
  //   //console.log(event.target.value);
  //   setEnteredAuthor(event.target.value);
  // }

  // function hideModalHandler(event) {
  //   setModalIsVisible(false);
  // }

  //We can also pass jsx code in variables 
// let modalContent;
//   if (modalIsVisible) {
//     modalContent = (<Modal onClose={hideModalHandler}>
//       <NewPost 
//       onBodyChange={changeBodyHandler} 
//       onAuthorChange={changeAuthorHandler} />
//     </Modal>);
//   }

  return (
    <>
      {/* {modalIsVisible ? (<Modal onClose={hideModalHandler}>
        <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
      </Modal>) : null}
      Or we can put flase in place of null */}

{/* Replacing the above code with more effective approach */}
      {/* {modalContent} */}

      {/* Or we can user ternary operator for the same thing */}

      {/* {modalIsVisible && (<Modal onClose={hideModalHandler}> */}
       {isPosting && (<Modal onClose={onStopPosting}>
      <NewPost 
      // onBodyChange={changeBodyHandler} 
      // onAuthorChange={changeAuthorHandler} 
      onCancel = {onStopPosting}
      onAddPost = {addPostHandler}
      /> 
    </Modal>
      )}
      {/* Here also the modal will be visible when modalIsVisible is true else it won't */}
      {post.lenght > 0 && (
             <ul className='classes.posts'>
        {post.map((post) => <Post key={post.body} author={post.author} bosy={post.body}/>)}
      </ul>
      )}

      {post.lenght === 0 && (<div style={{textAlign: 'center', color: 'white'}}>
        <h2>No Post!</h2>
        <p>Add some!</p>
        </div>)}

      {/* <ul className='classes.posts'> */}
        {/* <Post author = "Saloni" body="Saloni is a bad bad girl!" /> */}
        {/* <Post author = "Saloni" body={enteredBody} /> */}
        {/* <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Azinque" body="Azinque is a bad bad boy!" /> */}
        {/* Here we are making JSX code dynamically */}
        {/* {posts.map((post) => <Post key={post.body} author={post.author} bosy={post.body}/>)} */}
      {/* </ul> */}
    </>
  );
}

export default PostList;