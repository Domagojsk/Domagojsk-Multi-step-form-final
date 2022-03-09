import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';

const FormUserDetails = ({ values, handleChange }) => {
  const steps = ['Prvi korak', 'Drugi korak', 'Treći korak'];
  return (
    <>
      <Box sx={{ width: '100%', margin: '50px' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Typography variant='h6' color='inherit' component='div'>
        Unesi opće podatke
      </Typography>

      <TextField
        id='standard-basic'
        label='Unesi ime'
        variant='standard'
        onChange={handleChange('ime')}
        defaultValue={values.ime}
      />
      <br />
      <TextField
        id='standard-basic'
        label='Unesi prezime'
        variant='standard'
        onChange={handleChange('prezime')}
        defaultValue={values.prezime}
      />
      <br />
      <TextField
        id='standard-basic'
        label='Unesi email'
        variant='standard'
        onChange={handleChange('email')}
        defaultValue={values.email}
      />
      <br />
    </>
  );
};

export default FormUserDetails;
