import './Formulario.css'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const Form = () => {
    return(
        <form className='form'>
             <FormInput inputName= 'Nome' id='nome' type='text' />
             <FormInput inputName= 'Email' id='email' type='email' /> 
              
            <Button text = 'Enviar' type="submit"/>
         
        </form>
    )

}

export default Form;