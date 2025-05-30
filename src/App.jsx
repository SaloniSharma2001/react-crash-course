import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

//Now in here here we are exporting a function called App which returns more jsx code. And this entire thing is called react component.

// function App() {
//   return  <Post />;
// }

//Here each post component will be executed multiple time. Hence we can use same component multiple times just like a function.
//But to combine the multiple component we need to use one element that will be the root element the return would return. Ex: Main in here
function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }
    

    return(
        <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>
      </>
  );

}

export default App
