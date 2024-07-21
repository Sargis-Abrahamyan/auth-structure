import './PolymorphicInput.css';

const PolymorphicInput = ({ as = 'input', type = 'text', className, ...props }) => {
  const Input = as;
  return <Input type={type} {...props} className={`input ${className}`} autoComplete='off' />;
};

export default PolymorphicInput;
