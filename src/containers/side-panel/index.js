import Logo from '../../media/Logo.png'

export default function SidePanel() {
  return (
    <div className='sidepanel'>
       <img src={Logo}/>
       <p className='title'>{"VIRIDI"}</p>
    </div>
  )
}
