import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GoodSamaritan from './pages/GoodSamaritan';
import ProdigalSon from './pages/ProdigalSon';
import SowerSoils from './pages/SowerSoils';
import About from './pages/About';
import NoPage from './pages/NoPage';
import './globals.module.scss';

export default function App(): JSX.Element {
  return <BrowserRouter>
  <Routes>
    <Route path='/christs-parables/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/christs-parables/good-samaritan' element={<GoodSamaritan />} />
      <Route path='/christs-parables/prodigal-son' element={<ProdigalSon />} />
      <Route path='/christs-parables/sower-soils' element={<SowerSoils />} />
      <Route path='/christs-parables/about' element={<About />} />
      <Route path='*' element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>;
}