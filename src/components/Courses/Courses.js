import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import'./Courses.css'

const Courses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    }
        ,[])
    return (
        <div>
           <h2 className="mt-5 mb-5">Our Courses</h2> 
           <div className='course'>
           {
            courses.map(course=><Card style={{ width: '18rem' }} >
          <Card.Img variant="top" className="image" src={course.img} />
          <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
                {course.price}
            </Card.Text>
            <p>Time: {course.time}</p>
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
          </Card>
            )
           }
           </div>
        </div>
    );
};

export default Courses;