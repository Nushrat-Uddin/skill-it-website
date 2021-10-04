
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setData(data))
    }
    ,[])
    return (
        <div>
           <h1 className="mt-5">Popular Catagories</h1><br/>
           {
             data.map(dt=><Card style={{ width: '18rem' }} className="ms-4 d-md-inline-flex">
             <Card.Img variant="top" src={dt.img} />
             <Card.Body>
               <Card.Title>{dt.name}</Card.Title>
               <Card.Text>
                 {dt.value}
               </Card.Text>
               <Button variant="primary">Details</Button>
             </Card.Body>
           </Card>)}
        </div>
    );
};

export default Home;