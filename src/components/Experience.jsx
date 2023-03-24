import { Card } from './my_utilities/Card'

import hackfest from '../../src/assets/hackfest.svg'
import baznas from '../../src/assets/baznas.svg'
import bnpt from '../../src/assets/bnpt-certificate.png'

export default function Experience() {
    return (
        <main className='w-full min-h-screen lg:px-16 mt-24'>
            <h1 id='experience' className='font-semibold text-4xl lg:text-6xl text-slate-800 mb-10 text-center lg:text-left lg:p-2'>Experience</h1>
            <div className='w-fit lg:w-full flex justify-center flex-wrap gap-10'>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7044822794433417217/" target="_blank"
                >
                    <Card header={'Commitee of HackFest 2023 at Media & Creative Division'} src={hackfest} skill={"Design Graphic | Inkscape | Figma."} href="https://www.linkedin.com/feed/update/urn:li:activity:7044822794433417217/">
                        Make an appealing design of Info Session poster, Deck Slide Template design, Timeline Design, Certificate Design, and Prize Board Design.
                    </Card>
                </a>
                <a href="https://service.baznasmadiun.id/" target="_blank">
                    <Card header={'Web Developer at BAZNAS Kab. Madiun'} src={baznas} skill={"UI Design | Figma | HTML | Tailwind | JavaScript | Laravel 9."} href="https://service.baznasmadiun.id/">
                        Developing web specially in the UI Design and Frontend Web Development for BAZNAS Kabupaten Madiun's website.
                    </Card>
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6884443513900064768/" target="_blank">
                    <Card header={'Top 1 at Microblog & Infografis Competion 2021 Held by BNPT'} src={bnpt} skill={"InkScape"} target="https://www.linkedin.com/feed/update/urn:li:activity:6884443513900064768/">
                        Top 1 at microblog competition held by Badan Nasional Penanggulangan Teroris (BNPT)
                    </Card>
                </a>
            </div>
        </main>
    )
} 