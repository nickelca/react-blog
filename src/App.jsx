import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Blog_2024May18 from './blogs/2024/May/18.jsx'
import Blog_2024July9 from './blogs/2024/July/9.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/404" Component={NotFound} />
      <Route path="/2024/May/18" Component={Blog_2024May18} />
      <Route path="/2024/July/9" Component={Blog_2024July9} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  )
}