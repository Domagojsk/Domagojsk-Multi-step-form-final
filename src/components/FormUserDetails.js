import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';

const FormUserDetails = ({ values, handleChange }) => {
  const steps = ['Prvi korak', 'Drugi korak', 'Treći korak'];
  return (
    <>
      <Box sx={{ width: '100%', my: '2rem' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Typography
        sx={{ my: '10px' }}
        variant='h6'
        color='inherit'
        component='div'
      >
        Unesi opće podatke
      </Typography>

      <TextField
        id='input-with-icon-textfield'
        label='Ime'
        variant='standard'
        onChange={handleChange('ime')}
        defaultValue={values.ime}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        id='input-with-icon-textfield'
        label='Prezime'
        variant='standard'
        onChange={handleChange('prezime')}
        defaultValue={values.prezime}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        id='input-with-icon-textfield'
        label='E-mail'
        variant='standard'
        onChange={handleChange('email')}
        defaultValue={values.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
      <br />
    </>
  );
};

export default FormUserDetails;
