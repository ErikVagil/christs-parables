import { useEffect, useState } from 'react';
import { BoxArrowUpRight, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './GoodSamaritan.scss';

export default function GoodSamaritan() {
  const slideDeck: JSX.Element[] = [
  <div className='gs slide-0'>
    <div>
      <h1>The Good Samaritan</h1>
      <a href='https://www.churchofjesuschrist.org/study/scriptures/nt/luke/10?lang=eng&id=p25-p37#p25' target='_blank'>
        Luke 10:25-37 <BoxArrowUpRight />
      </a>
    </div>
  </div>,
  <div className='gs slide-1'>
    <img src='good-samaritan/GoodSamaritan1.svg'></img>
    <p className='p1'>One day, Jesus was ministering to a group of Jews. While he taught them, a lawyer asked Jesus how he could obtain eternal life.</p>
    <p className='p2'>In response, Jesus asked the lawyer to tell Him what the law said.</p>
  </div>,
  <div className='gs slide-2'>
    <img src='good-samaritan/GoodSamaritan2.svg'></img>
    <p className='p1'>The law taught the Jews that they had to love God with all their heart, soul, and strength, and love their neighbor as they
    loved themselves.</p>
    <p className='p2'>Jesus affirmed that the law was correct and the lawyer would achieve eternal life if he followed it.</p>
    <p className='p3'>Then the lawyer, wanting to justify himself and make sure he was following the law, asked Jesus who his neighbor was.</p>
    <p className='p4'>To answer his question, Jesus told the man a parable.</p>
  </div>,
  <div className='gs slide-3'>
    <img src='good-samaritan/GoodSamaritan3.svg'></img>
    <p className='p1'>A certain man walked from Jerusalem to Jericho, when he was ambushed by a band of thieves. The thieves took his clothes and
    beat him until he was barely alive.</p>
    <p className="p2">By some miracle, a priest came down the road. When the priest saw him, however, he moved to the other side of the road, 
    continued walking, and didn't help the man.</p>
  </div>,
  <div className='gs slide-4'>
    <img src='good-samaritan/GoodSamaritan4.svg'></img>
    <p className='p1'>Then, another person came down the road&#8212;this time a Levite.</p>
    <p className='p2'>Like the priest, though, the Levite continued walking when he saw the wounded man.</p>
  </div>,
  <div className='gs slide-5'>
    <img src='good-samaritan/GoodSamaritan5.svg'></img>
    <p className='p1'>Finally, a certain Samaritan came down the road. When he saw the wounded man, he had compassion and went to help him.</p>
    <p className='p2'>The Samaritan bandaged the man's wounds after he cleaned them with oil and wine.</p>
  </div>,
  <div className='gs slide-6'>
    <img src='good-samaritan/GoodSamaritan6.svg'></img>
    <p className='p1'>After tending to the man's wounds, the Samaritan brought him to an inn and took care of him.</p>
    <p className='p2'>The next morning, the Samaritan left after paying the innkeeper and instructing them to take care of the man, offering to
    pay the difference if they spent more than the payment doing so.</p>
  </div>,
  <div className='gs slide-7'>
  <img src='good-samaritan/GoodSamaritan1.svg'></img>
  <p className='p1'>Once Jesus finished telling the parable, He asked the lawyer who was a neighbor to the man.</p>
  <p className='p2'>The lawyer answered that it was the person who showed mercy on him, and Jesus instructed him to be the same kind of neighbor 
  to others.</p>
  </div>,
  <div className='gs slide-8'>
    <div>
      <h1>The End</h1>
      <p>Now, who will you be a neighbor to?</p>
    </div>
  </div>]
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const minIndex = 0;
  const maxIndex = slideDeck.length - 1;

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

  useEffect(() => {
    function incrementIndex(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' && (slideIndex < maxIndex)) {
        setSlideIndex(slideIndex + 1)
      }
    }
    window.addEventListener('keydown', incrementIndex);
    return () => window.removeEventListener('keydown', incrementIndex);
  }, [slideIndex, maxIndex])

  useEffect(() => {
    function decrementIndex(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft' && (slideIndex > minIndex)) {
        setSlideIndex(slideIndex - 1)
      }
    }
    window.addEventListener('keydown', decrementIndex);
    return () => window.removeEventListener('keydown', decrementIndex);
  }, [slideIndex, maxIndex])
  
  return <div className='good-samaritan'>
    <div className='spacer' style={{height: navHeight}} />
    {slideDeck[slideIndex]}
    <button className='left-arrow' style={slideIndex == minIndex ? {display: 'none'} : {}} onClick={() => {
      if (slideIndex > minIndex) {
        setSlideIndex(slideIndex - 1)
      }}}>
      <ChevronLeft color={'white'} width={70} height={70}/>
    </button>
    <button className='right-arrow' style={slideIndex == maxIndex ? {display: 'none'} : {}} onClick={() => {
      if (slideIndex < maxIndex) {
        setSlideIndex(slideIndex + 1)
      }}}>
      <ChevronRight color={'white'} width={70} height={70}/>
    </button>
  </div>;
}