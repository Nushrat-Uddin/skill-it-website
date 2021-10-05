
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
           <div className='homepage'>
           {
             data.map(dt=><Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={dt.img} />
             <Card.Body>
               <Card.Title className='title'>{dt.name}</Card.Title>
               <Card.Text>
                 {dt.value}
               </Card.Text>
               <Button variant="primary">Details</Button>
             </Card.Body>
           </Card>
           
               )}
          </div>
        </div>
    );
};

export default Home;