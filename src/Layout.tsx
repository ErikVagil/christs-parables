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
        <Link to='/christs-parables/' className={activeLink === '/christs-parables/' ? 'active-link' : ''}>Home</Link>
      </li>
      <li>
        <Link to='/christs-parables/good-samaritan' className={activeLink === '/christs-parables/good-samaritan' ? 'active-link' : ''}>The Good Samaritan</Link>
      </li>
      <li>
        <Link to='/christs-parables/prodigal-son' className={activeLink === '/christs-parables/prodigal-son' ? 'active-link' : ''}>The Prodigal Son</Link>
      </li>
      <li>
        <Link to='/christs-parables/sower-soils' className={activeLink === '/christs-parables/sower-soils' ? 'active-link' : ''}>The Sower and Soils</Link>
      </li>
      <li>
        <Link to='/christs-parables/about' className={activeLink === '/christs-parables/about' ? 'active-link' : ''}>About</Link>
      </li>
    </ul>
  </nav>

  <Outlet />
</>;
}