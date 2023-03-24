import logo from '../../src/assets/logo.svg'
import { AnchorMd } from './my_utilities/Anchor'

export default function Navbar() {
    return (
        <nav className='hidden bg-gray-50 lg:flex lg:h-20 px-10 lg:items-center lg:justify-between shadow-md sticky top-0 left-0 right-0 z-50'>
            <img src={logo} alt="Hilman's web protofolio logo" className='h-10' />
            <ul className='flex gap-x-12 justify-evenly items-center'>
                <a href="#home"><li>Home</li></a>
                <a href="#aboutme"><li>About me</li></a>
                <a href="#experience"><li>Experience</li></a>
                <AnchorMd href="mailto:ahmadhilmanlagi@gmail.com" target="_blank" bgcolor={'bg-amber-400'}>
                    <li>Contact!</li>
                </AnchorMd>
            </ul>
        </nav>
    )
}