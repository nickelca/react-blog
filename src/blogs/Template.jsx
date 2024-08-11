import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "../Page.css"

export default function Home() {
    return (
        <div className='page'>
            <Header />
            <nav className='ribbon-top'></nav>
            <div className='content'>
                Home page
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}