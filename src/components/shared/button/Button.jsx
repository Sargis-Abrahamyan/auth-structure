import './button.css';

const Button = ({ buttonText = 'submit', type = 'button', ...props }) => {
  return (
    <button type={type} {...props} className='buttonPrimary'>
      {buttonText}
    </button>
  );
};

export default Button;
