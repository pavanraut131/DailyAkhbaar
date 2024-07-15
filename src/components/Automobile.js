import React from 'react'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import useCustomHook from '../hooks/useCustomhook';
import {Link} from "react-router-dom"

const Automobile = () => {
   const [category, setCategory] = useState('automobile')

    const {news} = useCustomHook(category)
    
  return (
    <div className="App">
    <div className="container mt-5">
      <div className="row">
        {news && news.map((article) => (
          <div className="col-md-4 mb-4" key={article.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Header style={{ textAlign:'center'}}>
                <Card.Text variant="primary" size="sm" style={{fontWeight:'700', color:"red"}}>Breaking News</Card.Text> 
              </Card.Header>
              <Card.Img variant="top"  src={article.imageUrl} className="img-small" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.date}
                </Card.Text>
                <Card.Text>
                 {article.time}
                </Card.Text>
                <Card.Text>
                  {article.content.substring(0,180)}...
                </Card.Text>
                <Card.Text>
                    <Link to={article.readMoreUrl} target='_blank' style={{textDecoration:"none"}}>
                    Read More..
                    </Link>

                </Card.Text>
              </Card.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>Author : {article.author}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Automobile
