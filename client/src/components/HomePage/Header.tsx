import castle from '../../assets/image/Castle.png'
import circle from '../../assets/image/Exclude.png'
import pipeman from '../../assets/image/Pipeman.png'
import purple from '../../assets/image/Purple.png'

function Header () {
  return (
    <div>
    <img src={castle} alt={castle} className='h-40 w-40'/>
    <img src={purple} alt={purple} className='h-10 w-10'/>
    <div>
    <p className='text-6xl font-ABeeZee'>The best place to</p>
    <p className='text-6xl font-amatic'>EXPLORE</p><p>and</p><p className='text-6xl font-amatic'>DISCOVER</p>
    <p className='text-6xl font-ABeeZee'>Edinburgh</p>
    </div>
    <img src={circle} alt={circle} className='h-20 w-20'/>
    <img src={pipeman} alt={pipeman}className='h-40 w-40'/>
    </div>
  )
}

export default Header;