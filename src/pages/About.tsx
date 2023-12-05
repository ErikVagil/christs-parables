import { useEffect, useState } from 'react';
import './About.scss';

export default function About() {
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
  
  return <div className='about'>
    <div className='spacer' style={{height: navHeight}} />
    <h1>Who am I?</h1>
    <p>
      Hi, my name is Erik Vagil. At the time of making this project, I'm a junior studying computer science at Brigham Young University.
      I enjoy doing front-end development and making pretty-looking things.
    </p>
    <h1>Why did I make this website?</h1>
    <p>
      I made this project for my REL A 250 class, Christ and His Everlasting Gospel. I needed to do something that showcased my talents
      in a way that demonstrated what I had learned throughout the semester. I really enjoy the parables that Jesus taught, so I wanted
      to do something with them. It also never hurts to share the Gospel in a fun way.
    </p>
    <h1>How can you find out more?</h1>
    <p>
      If you enjoyed what you saw here and want to learn more, visit the LDS church's website
      at <a href='https://www.churchofjesuschrist.org/' target='_blank'>churchofjesuschrist.org</a>.
    </p>
    <div className='spacer' style={{height: '3rem'}} />
    <p className='copyright-disclaimer'>&copy; 2023 Erik Vagil</p>
  </div>;
}