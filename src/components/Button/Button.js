import './Button.css'

const Button = ({text, ...props}) => {
   return (
    <button className='button' type={props.type}>{text}</button>
   )
}

export default Button;