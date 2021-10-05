
import React, { useEffect, useState } from 'react';
import { Card, Button,Carousel } from 'react-bootstrap';
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
         
         <Carousel className='slide'>
  <Carousel.Item>
  <Carousel.Caption className='caption'>
      <h1>Upgrade Skills In Online Academy</h1>
      
    </Carousel.Caption>
    <img 
      className="d-block w-100 h-25"
      src="https://image.freepik.com/free-photo/close-up-hand-taking-notes_23-2148888827.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25 "
      src="https://image.freepik.com/free-vector/education-technology-futuristic-background-vector-gradient-blue-digital-remix_53876-114092.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Discover A New Way Of Education</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://image.freepik.com/free-photo/smiling-young-businessman_1098-778.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Expand Your Career Oppotunities</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

         
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