import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "./Page.css"

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
                <header>
                    <h1>Welcome to my blog!</h1>
                </header>
                <h4>2024</h4>
                <ul className='blog-links'>
                    <li><a href='/2024/July/9'>July 9 - Coding a website</a></li>
                    <li><a href='/2024/May/18'>May 18 - EAA Volunteer Weekend</a></li>
                </ul>
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}