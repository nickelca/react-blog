import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import "../../../pages/Page.css"

export default function Blog_2024May18() {
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
                    <h1>EAA Volunteer Weekend</h1>
                    <div className='line-break' />
                    <h4>May 18th - 2024</h4>
                </header>
                <div id="blog-container">
                    <Image id="floated" className='May-18-2024-img1' src="/May-18-2024-img1.png" />
                    <p>Yesterday, I drove up to Oshkosh all the way from Milwaukee with my uncle and cousins
                        to the Experimental Aircraft Association (EAA). We did volunteer work over the weekend.
                        I ended up wiring about 30 outlets for charging stations. I then got to fly in a two-seater
                        small plane built out of fiberglass and aluminum at the EAA called a GlaStar. We were 600 feet
                        in the air when the pilot let me steer the plane around!
                    </p>
                    <Image className='May-18-2024-img2' src="/May-18-2024-img2.png" />
                </div>
            </div>
            <nav className='ribbon-bottom'></nav>
        </div>
    );
}
