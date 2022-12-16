import React, { useRef, useState, useEffect } from 'react'
import axios from "axios"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Line } from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';
import Nav from './nav';
import AuthUser from './AuthUser';



function CRUD() {

    const {http} = AuthUser();
    const {getToken} = AuthUser();
    let token = JSON.parse(sessionStorage.getItem('token'));
   
    const client = axios.create({
        baseURL: 'http://206.189.40.198/api/',
        timeout : 5000,
        headers : {
            Authorization : `Bearer ${token}`,
        }

    });

    const [userDetail,setUserdetail] = useState([]);

    const navigate = useNavigate();
    const [dataDevices, setDataDevice] = useState([]);

    // React.useEffect(() => {
    //     async function getPost() {
    //         await client.get('/devicedatas').then(response => {
    //             let data = []

    //             data = response.data.data;

    //             // console.log(response.data.data);
    //         });
    //     }
    //     getPost()
    // }, []);


    React.useEffect(() => {
        async function getPost() {
            let id
            await client.post('/me').then(responseID => {
                console.log(responseID.data.id)
                id = responseID.data.id
            });
            await client.get('/devices',{params: {user_id : id}} ).then(response => {

                setDataDevice(response.data.data);
                console.log(response.data.data);

            });
        }
        getPost()
    }, []);

    function handleSubmit (e, id) {
        e.preventDefault();
        console.log(id)
        navigate('/detail', {state : {id : id}});
    }

    return (
        <div>
            <Nav/>
            <div className="tabledevice text-center">
                <Table borderless responsive>
                    <thead>
                        <tr>
                            <th>
                                Device
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDevices.map(datadevice =>(
                            <tr>
                                <td>{datadevice.device_name}</td>
                                <td>
                                <form onSubmit={e => handleSubmit(e, datadevice.id)}>
                                    <input className='btn btn-outline-success' type="submit" value="Detail"/>
                                </form>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                    
                </Table>
            </div>
        </div>
    )
}

export default CRUD;