import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className='_404'>
            <div><h1>404</h1></div>
            <div className='break-column' />
            <div><h2>Page not found</h2></div>
            <div className='break-column' />
            <h4><a href='/'>Back to home</a></h4>
        </div>
    );
}