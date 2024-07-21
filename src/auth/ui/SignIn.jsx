import AuthFormProvider from '../AuthFormProvider';

const SignIn = () => {
  const formData = {
    name: '',
    email: '',
    password: '',
  };
  const fields = [
    { name: 'name', placeholder: 'Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'password', placeholder: 'Password', type: 'password' },
  ];

  return (
    <AuthFormProvider endpointType='register' buttonText='Sign In' fields={fields} formState={formData} />
  );
};

export default SignIn;
