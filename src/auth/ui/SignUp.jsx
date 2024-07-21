import AuthFormProvider from '../AuthFormProvider';

const SignUp = () => {
  const formData = {
    email: '',
    password: '',
  };

  const fields = [
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'password', placeholder: 'Password', type: 'password' },
  ];

  return (
    <AuthFormProvider endpointType='login' buttonText='Sign Up' fields={fields} formState={formData} />
  );
};

export default SignUp;
