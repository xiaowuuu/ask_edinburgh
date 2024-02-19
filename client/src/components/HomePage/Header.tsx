import castle from '../../assets/image/Castle.png'
import circle from '../../assets/image/Exclude.png'
import pipeman from '../../assets/image/Pipeman.png'
import purple from '../../assets/image/Purple.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Header () {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className='container mx-auto overflow-hidden px-10 pt-8 pb-32 relative'>
      <div className='flex justify-between items-center'>
      <div className='relative'>
        <span className='relative top-[-50px]'><img src={castle} alt={castle} className='h-40 w-40'/></span>
        <span className='absolute right-[-80px]'><img src={purple} alt={purple} className=' h-10 w-10'/></span>
      </div>
    <div className='p-10'>
    <p className='text-6xl font-ABeeZee mb-8'>The best place to</p>
    <p className='text-6xl font-amatic mb-8'>
    <span className='text-violet-400'>EXPLORE</span>
    <span className=' text-6xl font-ABeeZee'> and </span>
    <span className='text-indigo-500'>DISCOVER</span>
    </p>
    <p className='text-6xl font-ABeeZee '>Edinburgh</p>
    </div>
    <div className='relative'>
        <span className='relative top-[-100px]'><img src={circle} alt={circle} className='h-20 w-20'/></span>
        <span className='absolute left-[-150px]'><img src={pipeman} alt={pipeman} className='h-40 w-40'/></span>
    </div>
    </div>
    <div className='flex justify-center pt-16'>
    <button 
    type="button"
    onClick={handleScroll}
    className='text-white bg-violet-400 border-transparency rounded-full px-7 py-4'>GET STARTED
    </button>
    </div>
    </div>
    
  )
}

export default Header;