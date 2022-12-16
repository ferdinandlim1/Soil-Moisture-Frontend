import Nav from './nav';
import axios from "axios"
import React, { useRef, useState } from 'react'
import AuthUser from './AuthUser';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';



function Detail() {

    const {getToken} = AuthUser();
    let token = JSON.parse(sessionStorage.getItem('token'));
    const location = useLocation();
    const client = axios.create({
        baseURL: 'http://206.189.40.198/api/',
        timeout : 5000,
        headers : {
            Authorization : `Bearer ${token}`,
        }

    });

    const [dataDevices, setDataDevice] = useState([]);

    React.useEffect(() => {
        async function getPost() {
            await client.get('/devicedatas', {params: {alat_id : location.state.id}}).then(response => {

                setDataDevice(response.data.data);

                console.log(dataDevices);
            });
        }
        getPost()
    }, []);

    return (
        <div>
            <Nav />
            <Table borderless responsive>
                    <thead>
                        <tr>
                            <th>
                                Kelembapan
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDevices.map(datadevice =>(
                            <tr>
                                <td>{datadevice.kelembapan}</td>
                            </tr>
                        ))}

                    </tbody>
                    
                </Table>
        </div>
    )
}

export default Detail;