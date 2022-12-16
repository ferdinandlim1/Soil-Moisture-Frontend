import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './AuthUser';
import Guest from '../navbar/guest';
import Auth from '../navbar/auth';
import React, { useEffect, useRef, useState } from 'react';
import "../App.css";

function App() {
  

  
  
  
  const {getToken} = AuthUser();
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  if(!getToken()){
    return <Guest />
    
  }else{
    return  <Auth />
  }
  
}

 
  


 



export default App;
