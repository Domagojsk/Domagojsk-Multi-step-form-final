import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Confirm = ({ values }) => {
  const steps = ['Prvi korak', 'Drugi korak', 'Treći korak'];
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Typography variant='h6' color='inherit' component='div'>
        Pregled unesenih podataka
      </Typography>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <List>
          <ListItem>
            <ListItemText primary='Ime:' secondary={values.ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Prezime:' secondary={values.prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary='E-mail:' secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Zanimanje:' secondary={values.zanimanje} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Grad:' secondary={values.grad} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Drzava:' secondary={values.drzava} />
          </ListItem>
        </List>
      </Grid>
    </>
  );
};

export default Confirm;
