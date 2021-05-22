import { Box, Button, Container, Paper, TextField, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import config from '../../config';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Favorite } from '@material-ui/icons';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const [user, setUser] = useState(false);

    useEffect(() => {
        if(Cookies.get("token")) {
            setUser(true)
        }
    }, []);
    function handleLogin(e) {
        e.preventDefault();
        console.log(config.APIURL, password);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        setIsLoading(true);
        fetch(config.APIURL+"/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.token!=undefined){
                Cookies.set('token', data.token);
                setUser(true);
            }
            else setErr('Invalid Credentials!')
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
        else if(s==='password'){
            setPassword(e.target.value);
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
                            <Typography variant='h5'>Welcome back!</Typography>
                            <TextField onChange={(e)=>handleChange(e, 'email')} value={email} variant='outlined' label='Email' style={{margin:'20px 0'}}/>
                            <TextField onChange={(e)=>handleChange(e, 'password')} value={password} variant='outlined' label='Password' type='password'/>
                            <Typography style={{margin:'20px 0'}} variant='subtitle1'>Don't have an account? <Link to='/signup'>Create one</Link></Typography>
                            <Button variant='contained' color='primary' style={{margin:'0 0 20px 0'}} onClick={handleLogin}>Login</Button>
                            <Typography style={{color:'red'}}variant='subtitle1'>{err}</Typography>
                        </Container>
                    </Paper>
                </Container>
                <Typography variant='subtitle1' style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>Made with <Favorite style={{margin:'0 5px'}} color='primary'/>by <Link href="http://sahilsaha.me" style={{margin:'0 5px'}}> Sahil Saha</Link> </Typography>
            </Box>
        )
    )
}

export default Login
