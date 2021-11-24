import { useSelector } from 'react-redux';
// import './nav.css'
// import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FilmSection } from './film section/FilmSection';
import { Header } from './header/Header';

export const MainPage = () => {
  
  return (
    <>
    <Header />
    <FilmSection />
    </>    
  )
}