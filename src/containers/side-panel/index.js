import Logo from '../../media/Logo.png'

export default function SidePanel() {
  return (
    <div className='sidepanel w-60 h-full shadow-md bg-white px-1 absolute'>
       <img src={Logo}/>
       <p className='title'>VIRIDI</p>
    </div>
  )
}
