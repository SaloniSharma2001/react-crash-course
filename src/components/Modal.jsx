import classes from './Modal.module.css/'

//If we use this modal to wrap another component react won't be able to decide where to place the wrapped component hence we shall use props to 
//define the position where wrapped component will be showned. Here we could have passed props and then accessed it with props,children 
//Instead we used js object destructuring process and used children directly, while author and body where the props we declared children is a reserved
//props

//Open props are by default true so we can just write open however to make it false we need to assign a value like open = {false}
function Modal({children, onClose}) {
 return <>
    <div className={classes.backdrop}  onClick={onClose} />
    <dialog open = {true} className={classes.modal}>{children}
    </dialog>
 </>
}

export default Modal;