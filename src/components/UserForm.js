import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Successs';
import Button from '@mui/material/Button';

const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [multiFormValues, setMultiFormValues] = useState({
    ime: '',
    prezime: '',
    email: '',
    zanimanje: '',
    grad: '',
    drzava: '',
  });

  const getSteps = () => {
    return ['Form User Details', 'Form Personal Details', 'Confirm', 'Success'];
  };

  const step = getSteps();

  const prevStep = () => {
    setActiveStep((nextStep) => nextStep - 1);
  };

  const nextStep = () => {
    setActiveStep((previousStep) => previousStep + 1);
  };

  const handleChange = (input) => (e) => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };

  return (
    <div>
      {activeStep === 0 && (
        <FormUserDetails
          prevStep={prevStep}
          setActiveStep={setActiveStep}
          values={multiFormValues}
          handleChange={handleChange}
        />
      )}
      {activeStep === 1 && (
        <FormPersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          setActiveStep={setActiveStep}
          values={multiFormValues}
          handleChange={handleChange}
        />
      )}
      {activeStep === 2 && (
        <Confirm
          prevStep={prevStep}
          nextStep={nextStep}
          setActiveStep={setActiveStep}
          values={multiFormValues}
          handleChange={handleChange}
        />
      )}
      {activeStep === 3 && (
        <Success
          setActiveStep={setActiveStep}
          values={multiFormValues}
          handleChange={handleChange}
        />
      )}

      <Button
        className='btn'
        onClick={prevStep}
        disabled={activeStep === 0}
        style={activeStep === 3 ? { display: 'none' } : {}}
        variant='contained'
        type='submit'
      >
        Nazad
      </Button>
      <Button
        className='btn'
        onClick={nextStep}
        variant='contained'
        type='submit'
        style={activeStep === 3 ? { display: 'none' } : {}}
      >
        {}
        {activeStep === step.length - 2 ? 'Priloži' : 'Naprijed'}
      </Button>
    </div>
  );
};

export default UserForm;
