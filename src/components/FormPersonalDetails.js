import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import WorkIcon from '@mui/icons-material/Work';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlagIcon from '@mui/icons-material/Flag';

const FormPersonalDetails = ({ values, handleChange }) => {
  const steps = ['Prvi korak', 'Drugi korak', 'Treći korak'];
  return (
    <>
      <Box sx={{ width: '100%', my: '2rem' }}>
        <Stepper activeStep={1} alternativeLabel>
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
        Unesi osobne podatke
      </Typography>
      <TextField
        id='input-with-icon-textfield'
        label='Zanimnje'
        variant='standard'
        onChange={handleChange('zanimanje')}
        defaultValue={values.zanimanje}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <WorkIcon />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        id='input-with-icon-textfield'
        label='Grad'
        variant='standard'
        onChange={handleChange('grad')}
        defaultValue={values.grad}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <LocationCityIcon />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        id='input-with-icon-textfield'
        label='Drzava'
        variant='standard'
        onChange={handleChange('drzava')}
        defaultValue={values.drzava}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FlagIcon />
            </InputAdornment>
          ),
        }}
      />
      <br />
    </>
  );
};

export default FormPersonalDetails;
