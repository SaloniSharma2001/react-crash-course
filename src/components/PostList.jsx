import Post from './Post';
import classes from './PostList.module.css'
import NewPost from './NewPost';

function PostList(){
return(
<>
<NewPost />
<ul className='classes.posts'>
      <Post author = "Saloni" body="Saloni is a bad bad girl!" />
      <Post author = "Azinque" body="Azinque is a bad bad boy!" />
</ul>
</>
);
}

export default PostList;