import React from 'react';
import { PolymorphicInput, Button } from '../components/shared';
import './formContainer.css';

const FormContainer = ({ fields, formData, handleChangeInput, handleSubmit, error, buttonText }) => {
    return (
        <form className='container' onSubmit={handleSubmit}>
            {fields.map(({ name, placeholder, type }) => (
                <PolymorphicInput
                    type={type}
                    key={name}
                    placeholder={placeholder}
                    onChange={handleChangeInput}
                    value={formData[name] || ''}
                    name={name}
                />
            ))}
            <Button buttonText={buttonText} type='submit' />
        </form>
    );
};

export default FormContainer;
