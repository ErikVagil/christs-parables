import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import './Home.scss';
import devIconURL from '../images/DevIcon.svg';
import goodSamaritanURL from '../images/good-samaritan/GoodSamaritanIcon.svg';

export default function Home() {
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const navbar: HTMLElement | null = document.querySelector('nav');
      setNavHeight(navbar?.offsetHeight as number);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div className='home'>
    <div className='spacer' style={{height: navHeight}} />
    <span className='main-header'>
      <h1>Come, follow me.</h1>
      <a href='https://www.churchofjesuschrist.org/study/scriptures/nt/luke/9?lang=eng&id=p23#p23' target="_blank">
        Luke 9:23 <BoxArrowUpRight size={12}/></a>
    </span>
    <h2>Explore some of the parables that Jesus Christ taught during his mortal ministry.</h2>
    <div className='gallery'>
      <Link to='/christs-parables/good-samaritan'>
        <img className='gallery-img' src={goodSamaritanURL} width={300}></img>
        <p className='caption'>The Good Samaritan</p>
      </Link>
      <Link to='/christs-parables/prodigal-son'>
        <img className='gallery-img' src={devIconURL} width={300}></img>
        <p className='caption'>The Prodigal Son</p>
      </Link>
      <Link to='/christs-parables/sower-soils'>
        <img className='gallery-img' src={devIconURL} width={300}></img>
        <p className='caption'>The Sower and Soils</p>
      </Link>
    </div>
    <h3>For the intended user experience, please use a desktop or laptop and make your browser fullscreen.</h3>
    <div className='spacer' style={{height: '3rem'}} />
    <p className='copyright-disclaimer'>&copy; 2023 Erik Vagil</p>
  </div>;
}