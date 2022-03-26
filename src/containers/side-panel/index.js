import Logo from '../../media/Logo.png'
import './style.css'

export default function SidePanel() {
  return (
    <div className='sidepanel w-60 h-full shadow-md bg-accent px-1 absolute'>
       <img src={Logo} className="logo"/>
       <p className='title'>VIRIDI</p>
    </div>
  )
}
