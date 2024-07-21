import React from 'react';
import useFormData from './hooks/useFormData';
import useFormSubmit from './hooks/useFormSubmit';
import FormContainer from '../container/FormContainer';
import { authenticate } from './service';

const AuthFormProvider = ({ fields, formState, endpointType,buttonText }) => {
  // Use the useFormData hook to manage the form data state
  const { formData, handleChangeInput } = useFormData(formState);
  // Use the useFormSubmit hook to handle form submit
  const { handleSubmit } = useFormSubmit(() => authenticate(formData, endpointType));

  return (
    <FormContainer
      formData={formData}
      fields={fields}
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
      buttonText={buttonText}
    />
  );
};

export default AuthFormProvider;
