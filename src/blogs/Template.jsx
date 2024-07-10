import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "../Page.css"

export default function Home() {
    return (
        <div className='page'>
            <header className='banner'>
                <hgroup>
                    <h1><a href='/'>Chase Nickel</a></h1>
                </hgroup>
                <ul className='header-links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='https://github.com/Chase-Nickel'>Github</a></li>
                </ul>
            </header>
            <nav className='ribbon-top'></nav>
            <div className='content'>
                Home page
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}