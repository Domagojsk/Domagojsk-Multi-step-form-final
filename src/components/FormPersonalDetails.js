import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FormPersonalDetails = ({ values, handleChange }) => {
  const steps = ['Prvi korak', 'Drugi korak', 'Treći korak'];
  return (
    <>
      <Box sx={{ width: '100%', margin: '50px' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Typography variant='h6' color='inherit' component='div'>
        Unesi osobne podatke
      </Typography>
      <TextField
        id='standard-basic'
        label='Vase zanimnje'
        variant='standard'
        onChange={handleChange('zanimanje')}
        defaultValue={values.zanimanje}
      />
      <br />
      <TextField
        id='standard-basic'
        label='Grad'
        variant='standard'
        onChange={handleChange('grad')}
        defaultValue={values.grad}
      />
      <br />
      <TextField
        id='standard-basic'
        label='Drzava'
        variant='standard'
        onChange={handleChange('drzava')}
        defaultValue={values.drzava}
      />
      <br />
    </>
  );
};

export default FormPersonalDetails;
