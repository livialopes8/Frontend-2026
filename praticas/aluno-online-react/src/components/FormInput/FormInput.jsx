import './FormInput.css';

function FormInput(props) {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.error && <p className="mensagem-erro">{props.error}</p>}
    </div>
  );
}

export default FormInput;