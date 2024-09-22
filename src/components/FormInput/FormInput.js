import "./FormInput.css";

const FormIput = ({ inputName, ...props}) => {
  return (
    <div className="form-input">
      <label htmlFor={props.id}>{inputName}:</label>
      <input type={props.type} />
    </div>
  );
};

export default FormIput;
