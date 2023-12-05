import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Layout.scss';

export default function Layout(): JSX.Element {
  const [activeLink, setActiveLink] = useState<string>('');
  const location = useLocation();
  const currentRoute: string = location.pathname;
  useEffect(() => {
    setActiveLink(currentRoute);
  }, [currentRoute]);
  return <>
  <nav>
    <ul>
      <li>
        <Link to='/' className={activeLink === '/' ? 'active-link' : ''}>Home</Link>
      </li>
      <li>
        <Link to='/good-samaritan' className={activeLink === '/good-samaritan' ? 'active-link' : ''}>The Good Samaritan</Link>
      </li>
      <li>
        <Link to='/prodigal-son' className={activeLink === '/prodigal-son' ? 'active-link' : ''}>The Prodigal Son</Link>
      </li>
      <li>
        <Link to='/sower-soils' className={activeLink === '/sower-soils' ? 'active-link' : ''}>The Sower and Soils</Link>
      </li>
      <li>
        <Link to='/about' className={activeLink === '/about' ? 'active-link' : ''}>About</Link>
      </li>
    </ul>
  </nav>

  <Outlet />
</>;
}