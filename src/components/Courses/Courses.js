import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

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
           {
            courses.map(course=><Card style={{ width: '18rem' }} className="d-inline-flex gx-4 mb-5">
          <Card.Img variant="top" src={course.img} />
          <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
                {course.price}
            </Card.Text>
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
          </Card>
                )
           }
        </div>
    );
};

export default Courses;