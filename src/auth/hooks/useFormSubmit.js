import { useState } from 'react';

const useFormSubmit = (onSubmitFn) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted SignIn');
    try {
      await onSubmitFn();
    } catch (error) {
      console.log(error, 'errors');
      setError(error);
    }
  };

  return { handleSubmit, error };
};

export default useFormSubmit;
