//Outputtinig dynamic values
// const names = ['Saloni', 'Azinque'];

// function Post(){
//     const chosenName = Math.random() > 0.5 ? names[0] : names[1];
//     return (
//         <div>
//         <p>
//             {chosenName}
//         </p>
//         <p>
//             Got no chill!
//         </p>
//     </div>
//     );
// }

//Instead of just importing the files from we can use classes or style keyword
//import './index.css'
//import styles from './index.css'
import classes from './Post.module.css'

// function Post(props){
//     return (
//         //Don't use inline css like this
//         // <div style={{color:'red', textAlign:'left'}}>
//         <div className={classes.post}>
//         <p className={classes.author}>
//             {props.author}
//         </p>
//         <p className={classes.text}>
//             { props.body}
//         </p>
//     </div>
//     );
// }


function Post(props){
    return (
        //Don't use inline css like this
        // <div style={{color:'red', textAlign:'left'}}>
        <li className={classes.post}>
        <p className={classes.author}>
            {props.author}
        </p>
        <p className={classes.text}>
            { props.body}
        </p>
    </li>
    );
}

export default Post;