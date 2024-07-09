import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "./Page.css"

export default function AboutPage() {
    return (
        <div className='page'>
            <header className='banner'>
                <hgroup>
                    <h1><a href='/'>Chase Nickel</a></h1>
                </hgroup>
                <ul className='header-links'>
                    <li><a href='/about'>About</a></li>
                    <li><a href='https://github.com/Chase-Nickel'>Github</a></li>
                </ul>
            </header>
            <nav className='ribbon-top'></nav>
            <div className='content'>
                <header>
                    <h2>About Me</h2>
                </header>
                <p>Hi, my name is Chase. I go to Milwaukee School of Languages.
                    I'm in the PEOPLE program. I do a lot of math and science related
                    activities. I'm interested in studying Aerospace Engineering or 
                    Software Engineering, hopefully at UW Madison!</p>
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}