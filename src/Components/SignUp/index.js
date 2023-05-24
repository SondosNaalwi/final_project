import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

function SignUp() {

    const paperStyle = { padding: '2.2rem 2rem', width: '22rem', margin: '2rem auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: 'green' }
    const margintop = { margintop: 5 }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h1 style={headerStyle}> signup</h1>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField variant='standard' fullWidth label='Name' placeholder='Enter your name' />
                    <TextField variant='standard' fullWidth label='Email' />
                    <FormControl style={margintop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="row-radio-buttons-group"
                            style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />


                        </RadioGroup>
                    </FormControl>
                    <TextField variant='standard' fullWidth label='Phone Number' />
                    <TextField variant='standard' fullWidth label='Password' />
                    <TextField variant='standard' fullWidth label='Confirm Password' />

                    <FormControlLabel control={<Checkbox name="checkbox" />} label="I accept the terms and conditions " />

                    <Button color='primary' type='submit' variant='contained'> SignUp</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default SignUp
