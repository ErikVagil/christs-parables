import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

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
      <p>Luke 9:23</p>
    </span>
    <h2>Explore some of the parables that Jesus Christ taught during his mortal ministry.</h2>
    <div className='gallery'>
      <Link to='/good-samaritan'>
        <img src='stock1.jpg' width={300}></img>
        <p className='caption'>The Good Samaritan</p>
      </Link>
      <Link to='prodigal-son'>
        <img src='stock2.jpg' width={300}></img>
        <p className='caption'>The Prodigal Son</p>
      </Link>
      <Link to='sower-soils'>
        <img src='stock3.jpg' width={300}></img>
        <p className='caption'>The Sower and Soils</p>
      </Link>
    </div>
  </div>;
}