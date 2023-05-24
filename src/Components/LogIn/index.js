import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const paperStyle = {padding: '2.2rem 2rem', width: '21rem', margin: '2rem auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '1rem 0' }

function LogIn() {
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    < LockOutlinedIcon />
                </Avatar>
                <h2 style={headerStyle}> LogIn</h2>
                
            </Grid>
           
                <TextField variant='standard' fullWidth label='Username' placeholder='Enter user name' required/>
                <TextField variant='standard' fullWidth label='Username' placeholder='Enter password' type='password' required/>
              
                <FormControlLabel control={<Checkbox name="checkbox" />} label="Remeber me " /> 

                <Button style={btnStyle} color='primary' type='submit' variant='contained' fullWidth> LogIn</Button>

                <Typography>
                    <Link href='#'>
                        Forget password ?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ?
                    <Link href='#'>
                       SignUp ?
                    </Link>
                </Typography>

            

        </Paper>
    </Grid>
    )
}

export default LogIn
