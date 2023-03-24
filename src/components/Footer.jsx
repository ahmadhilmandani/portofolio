import logowhite from '../assets/logo-white.svg'
import { IconBrandGmail, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'

export default function Footer() {
    return (
        <footer className='w-full bg-sky-400 text-white pt-10 mt-10'>
            <div className='flex flex-wrap justify-center items-start lg:gap-40 gap-10 lg:p-12'>
                <img src={logowhite} alt="Ahmad Hilman Dani's Logo" className='h-[40px]' />
                <div>Available Services
                    <ol className='list-disc text-sm leading-loose'>
                        <li>Frontend Web Development</li>
                        <li>UI/UX Design</li>
                        <li>UI/UX Design & Frontend Web Development</li>
                        <li>Fullstack Web Development (React JS & Laravel)</li>
                    </ol>
                </div>
                <div className='flex flex-wrap justify-center items-start lg:gap-20 gap-5'>
                    <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank">
                        <IconBrandGmail className='bg-white rounded-full p-1 w-8 h-8 text-sky-400' />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" target="_blank">
                        <IconBrandLinkedin className='bg-white rounded-full p-1 w-8 h-8 text-sky-400' />
                    </a>
                    <a href="https://www.instagram.com/?hl=id" target="_blank">
                        <IconBrandInstagram className='bg-white rounded-full p-1 w-8 h-8 text-sky-400' />
                    </a>
                </div>
            </div>
            <div className='bg-sky-600 text-center text-sm py-2 mt-8'>© 2023. All rights reserved.</div>
        </footer>
    )
}