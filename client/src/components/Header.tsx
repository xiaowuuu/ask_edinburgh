import castle from '../assets/image/Castle.png'
import circle from '../assets/image/Exclude.png'
import pipeman from '../assets/image/Pipeman.png'
import purple from '../assets/image/Purple.png'

function Header () {
  return (
    <div>
    <img src={castle} alt={castle} />
    <img src={purple} alt={purple} />
    <img src={circle} alt={circle} />
    <img src={pipeman} alt={pipeman}/>
    <p className='font-ABeeZee'>The best place to EXPLORE and DISCOVER Edinburgh</p>

    </div>
  )
}

export default Header;