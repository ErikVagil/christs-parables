import { useEffect, useState } from 'react';
import './SowerSoils.scss';

export default function SowerSoils() {
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
  
  return <div className='sower-soils'>
    <div className='spacer' style={{height: navHeight}} />
    <h1>This page is under construction. Sorry about that.</h1>
  </div>;
}