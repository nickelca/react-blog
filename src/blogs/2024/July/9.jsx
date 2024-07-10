import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "../../../pages/Page.css"

export default function Blog_2024July9() {
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
                    <h1>Coding a website!</h1>
                    <div className='line-break' />
                    <h4>July 9th - 2024</h4>
                </header>
                <div id="blog-container">
                    <Image id="floated" className='July-9-2024-img1' src="/July-9-2024-img1.png" />
                    <p>Juan Eulogio, a compsci major at UW Madison in his senior year volunteered
                        his time to teach a group of students, me included, how to make a website!
                        We're using the JavaScript framework ReactJS, HTML, and CSS to make and style
                        our website. I've programmed for a while, but I had no clue how to do this until
                        he helped us get started! I've seen a bunch of nice websites made by the other
                        students in the class. I've had a blast doing this. 10/10 experience, would recommend.
                    </p>
                </div>
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}