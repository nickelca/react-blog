import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import Bar from './pages/Bar.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/bar" Component={Bar} />
      <Route path="/404" Component={NotFound} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  )
}