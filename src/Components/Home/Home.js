import { Box, TableContainer, Typography, Paper, Table, TableHead, TableCell, TableRow, TableBody, TextField, Button, Container, CircularProgress, Backdrop, Link } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Cookies from 'js-cookie'
import config from '../../config';
import {Redirect} from 'react-router-dom';
import { Delete, FileCopy, FileCopyOutlined } from '@material-ui/icons';
function Home() {
    const [user, setUser] = useState(true);
    const [prof, setProf] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    const [err, setErr] = useState("");
    const [url, setUrl] = useState("");
    useEffect(() => {
        console.log(Cookies.get("token"));
        if(Cookies.get("token")) {
            console.log("dlkasds");
            setUser(true)
        }
    }, []);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'token': Cookies.get('token')}
        }
        fetch(config.APIURL+'/me', requestOptions)
        .then(response => response.json())
        .then(data => {
            setProf(data);
            if(data?.message==='Invalid Token') {
                Cookies.remove('token');
                setUser(false);
            }
            else 
                prof?.urls?.sort((x,y) => y._id-x._id)
            console.log(data);
            setIsUserLoading(false);
        })
    }, []);
    function handleAdd(e){
        e.preventDefault();
        if(!(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url))){
            setErr('Invalid url!');
            return;
        }
        setErr('');
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'token': Cookies.get('token')},
            body: JSON.stringify({
                fullUrl: url
            })
        }
        fetch(config.APIURL+'/short', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'token': Cookies.get('token')}
            }
            fetch(config.APIURL+'/me', requestOptions)
            .then(response => response.json())
            .then(data => {
                setProf(data);
                setIsLoading(false);
                console.log(data);
            })
        })
    }
    function handleDelete(e, url){
        setIsLoading(true);
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'token': Cookies.get('token')},
            body: JSON.stringify({
                short: url
            })
        }
        if(window.confirm("Are you sure you want to delete?")){
            fetch(config.APIURL+'/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
                var ind = data.user.urls.findIndex(u => u._id == url._id);
                console.log(ind);
                if(ind>-1)
                    data.user.urls.splice(ind, 1);
                setProf(data.user);
                console.log(data);
                setIsLoading(false);
            })
        }
        else{
            setIsLoading(false);
        }
    }
    function handleCopy(e, id){
        console.log(id);
        var copyText = document.getElementById(id);
        console.log(copyText);
        navigator.clipboard.writeText(copyText.innerHTML)
        alert('Copied '+copyText.innerHTML)
        // copyText?.setSelectionRange(0, 99999); /* For mobile devices */

        // /* Copy the text inside the text field */
        // document?.execCommand("copy");
    }
    return (
        isUserLoading ? (
            <Backdrop style={{opacity:'0.5', visibility:'visible'}}> 
                <CircularProgress color='primary'/>
            </Backdrop>
        ):(
            user ? (
                <Box>
                    <Navbar/>
                    {
                        isLoading ? (
                            <Backdrop style={{opacity:'0.5', visibility:'visible'}}> 
                                <CircularProgress color='primary'/>
                            </Backdrop>
                        ):(
                            <Box style={{textAlign: 'center', marginTop:'40px'}}>
                                <Typography variant='h5'>Welcome back {prof.email}</Typography>
                                <Container style={{textAlign: 'center', maxWidth:'700px'}}>
                                    <Container style={{display: 'flex', alignItems: 'center', marginTop:'20px', justifyContent: 'center'}}>
                                        <TextField onChange={(e) => setUrl(e.target.value)} value={url} label='Type an URL to short' style={{width:"100%", marginRight:"10px"}}/>
                                        <Button variant='contained' color='primary' onClick={handleAdd}>Add</Button>
                                    </Container>
                                    <Typography variant='subtitle1' style={{color:'red', marginTop:'20px'}}>{err}</Typography>
                                    <TableContainer component={Paper} style={{maxWidth:'700px', margin:' 40px auto'}}>
                                        <Table style={{minWidth:'600px'}}> 
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Full URL</TableCell>
                                                    <TableCell>Mini URL</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    prof.urls?.map(url => {
                                                        return (
                                                            <TableRow>
                                                                <TableCell>{url.full}</TableCell>
                                                                <TableCell style={{alignItems: 'center'}}><Link id={url._id} onClick={(e) => { console.log('asd'); window.open(`https://mysml.tech/#/${url.short}`, '_blank')}}>mysml.tech/#/{url.short}</Link></TableCell>
                                                                <TableCell onClick={(e) => handleDelete(e, url)}><Delete/></TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                                
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Container>
                            </Box>
                        )
                    }
                </Box>
            ):(
                <Redirect to='/login'/>
            )
        )
    )
}

export default Home
