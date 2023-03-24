import AboutMeHero from "../../src/assets/about-me-hero.svg"

export default function AboutMe() {
    return (
        <section id="aboutme" className="w-full min-h-screen lg:flex lg:flex-row-reverse justify-between items-center px-4 lg:px-10 mt-24">
            <img src={AboutMeHero} alt="" className="w-full max-w-[480px] mx-auto lg:mx-0" />
            <div className="text-center lg:text-left">
                <h1 className="text-slate-800 text-4xl lg:text-6xl font-semibold my-8 lg:mb-16 lg:leading-normal leading-relaxed">About Me!</h1>
                <div>
                    <h2 className="text-slate-400 text-xl font-semibold">Name</h2>
                    <p className="text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed">Ahmad <span className="border-b-4 border-amber-400">Hilman</span> Dani</p>
                </div>
                <div className="my-10">
                    <h2 className="text-slate-400 text-xl font-semibold">Education</h2>
                    <p className="text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed">Undergraduate student of Informatics Engineering</p>
                </div>
                <div>
                    <h2 className="text-slate-400 text-xl font-semibold">Favorite Quote</h2>
                    <p className="text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed">
                        we are all failures at least the best of us
                    </p>
                    <small className="italic text-slate-800">J.M. Barrie</small>
                </div>
            </div>
        </section>
    )
}