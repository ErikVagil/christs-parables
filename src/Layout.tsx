import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export default function Layout(): JSX.Element {
  return <>
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/good-samaritan'>The Good Samaritan</Link>
      </li>
      <li>
        <Link to='/prodigal-son'>The Prodigal Son</Link>
      </li>
      <li>
        <Link to='/sower-soils'>The Sower and Soils</Link>
      </li>
    </ul>
  </nav>

  <Outlet />
</>;
}