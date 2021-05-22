import { Box, Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import config from '../../config';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const [user, setUser] = useState(false);

    useEffect(() => {
        if(Cookies.get("token")) {
            setUser(true)
        }
    }, []);
    useEffect(() => {
        if(password1!=password2)
            setErr("Passwords must match!")
        else
            setErr("")
    }, [password2,])
    function handleRegister(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password1
            })
        }
        setIsLoading(true);
        fetch(config.APIURL+"/signup", requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.token!=undefined){
                Cookies.set('token', data.token);
                setUser(true);
            }
            else setErr('Account already registered!')
            setIsLoading(false);
        })
        .catch(err => {
            setErr(err);
            console.log(err);
        })
    }
    function handleChange(e, s){
        if(s==='email'){
            setEmail(e.target.value);
        }
        else if(s==='password1'){
            setPassword1(e.target.value);
        }
        else if(s==='password2'){
            setPassword2(e.target.value);
        }
    }
    return (
        user ? (
            <Redirect to='/'/>
        ):(
            <Box>
                <Navbar/>
                <Container>
                    <Paper elevation={5} style={{maxWidth:'500px', padding:'20px', margin:'100px auto'}}>
                        <Container style={{display:'flex', textAlign:'center', flexDirection:'column'}}>
                            <Typography variant='h5'>Create an account</Typography>
                            <TextField onChange={(e)=>handleChange(e, 'email')} value={email} variant='outlined' label='Email' style={{margin:'10px 0'}}/>
                            <TextField onChange={(e)=>handleChange(e, 'password1')} value={password1} variant='outlined' label='Password' style={{margin:'10px 0 20px 0'}} type='password'/>
                            <TextField onChange={(e)=>handleChange(e, 'password2')} value={password2} variant='outlined' label='Confirm Password' type='password'/>
                            <Typography style={{margin:'20px 0'}} variant='subtitle1'>Already have an account? <Link to='/login'>Login here</Link></Typography>
                            <Button variant='contained' color='primary' style={{margin:'0 0 20px 0'}} onClick={handleRegister}>Register</Button>
                            <Typography style={{color:'red'}} variant='subtitle1'>{err}</Typography>
                        </Container>
                    </Paper>
                </Container>
            </Box>
        )
    )
}

export default Register
