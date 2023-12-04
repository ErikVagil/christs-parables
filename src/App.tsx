import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GoodSamaritan from './pages/GoodSamaritan';
import ProdigalSon from './pages/ProdigalSon';
import SowerSoils from './pages/SowerSoils';
import NoPage from './pages/NoPage';
import './globals.module.scss';

export default function App(): JSX.Element {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='good-samaritan' element={<GoodSamaritan />} />
      <Route path='prodigal-son' element={<ProdigalSon />} />
      <Route path='sower-soils' element={<SowerSoils />} />
      <Route path='*' element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>;
}