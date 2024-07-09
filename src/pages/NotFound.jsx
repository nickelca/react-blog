import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <h4><a href='/'>Back to home</a></h4>
        </div>
    );
}