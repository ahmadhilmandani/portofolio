import bgRectangle from '../../src/assets/bgRectangle.svg'
import hero from '../../src/assets/hero.svg'
import { AnchorLg } from './my_utilities/Anchor'
import { IconBrandGmail, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'

export default function Home(props) {
    return (
        <section id="home" className='w-full mt-8 relative'>
            <div className='lg:flex lg:px-16 lg:items-center lg:justify-between lg:flex-row-reverse'>
                <img src={hero} alt="Ahmad Hilman Dani's photo" className='w-full max-w-[520px] mx-auto' />

                <div className='text-center lg:text-left'>
                    <p className='block italic text-xl lg:text-2xl'>Learn to be</p>
                    <h1 className='text-4xl lg:text-6xl text-slate-800 font-semibold leading-relaxed lg:leading-normal'>A Front-end Web Developer!
                        <span className='bg-amber-400 rounded-full text-sm py-1 px-4 lg:py-2 lg:px-8 lg:text-base font-black text-black -skew-y-12 skew-x-12 inline-block w-fit ml-5 align-middle'>
                            And
                        </span>
                        <br />
                        UX Designer
                    </h1>
                    <p className='mt-10 text-xl lg:text-2xl leading-relaxed lg:leading-relaxed'>This is a web portofolio of <br /> <span className='font-semibold'>Ahmad Hilman Dani</span></p>
                    <AnchorLg additional={'mt-14 hover:shadow-[0px_0px_0px_10px_rgba(56,189,248,0.3)] hover:scale-105 hover:-translate-y-2 transition ease-in-out duration-150'}>
                        My Resume!
                    </AnchorLg>
                </div>
            </div>

            <img src={bgRectangle} alt="" className='w-full h-auto absolute bottom-0 lg:-bottom-[640px] left-0 right-0 -z-10' />
            <div className='hidden lg:block lg:absolute lg:bottom-0 lg:right-6 z-10'>
                <a href="mailto:ahmadhilmanlagi@gmail.com" className='w-8 h-8 bg-red-600 rounded-full flex justify-center items-center shadow-[0px_0px_0px_4px_rgba(220,38,38,0.3)] hover:shadow-[0px_0px_0px_10px_rgba(220,38,38,0.3)] hover:scale-105 hover:-translate-y-2 transition ease-in-out duration-200' target="_blank">
                    <IconBrandGmail className='text-white w-5' />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" className='w-8 h-8 bg-blue-600 rounded-full flex justify-center items-center shadow-[0px_0px_0px_4px_rgba(37,99,235,0.3)] hover:shadow-[0px_0px_0px_10px_rgba(37,99,235,0.3)] hover:scale-105 hover:-translate-y-2 transition ease-in-out duration-200 my-8' target="_blank">
                    <IconBrandLinkedin className='text-white w-5' />
                </a>
                <a href="https://www.instagram.com/ahmadhilmandani/?hl=id" className='w-8 h-8 bg-violet-600 rounded-full flex justify-center items-center shadow-[0px_0px_0px_4px_rgba(154,28,237,0.3)] hover:shadow-[0px_0px_0px_10px_rgba(154,28,237,0.3)] hover:scale-105 hover:-translate-y-2 transition ease-in-out duration-200' target="_blank">
                    <IconBrandInstagram className='text-white w-5' />
                </a>
            </div>
        </section>
    )
}