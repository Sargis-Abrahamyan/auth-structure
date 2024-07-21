import { useState } from 'react';

const useFormData = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  return { formData, handleChangeInput };
};

export default useFormData;
