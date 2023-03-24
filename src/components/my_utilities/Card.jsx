import { AnchorSm } from "./Anchor";

export function Card(props) {
    const { header, children, src, skill, additional, href } = props
    return (
        <div className="max-w-[320px] h-[450px] border rounded-lg border-slate-200 overflow-hidden hover:shadow-[0px_0px_16px_1px_rgba(75,85,99,0.1)] hover:scale-105 hover:-translate-y-2 transition ease-in-out duration-100">
            <Card.Image src={src} />
            <div className="p-4">
                <h2 className="font-semibold line-clamp-2 leading-relaxed">{header}</h2>
                <p className="my-3 line-clamp-3 leading-relaxed">
                    {children}
                </p>
                <Card.Skill>
                    {skill}
                </Card.Skill>
                <AnchorSm href={href} additional="lg:w-fit w-full">
                    Detail
                </AnchorSm>
            </div>
        </div>
    )
}

function Image({ src }) {
    return (
        <div className="w-full h-full min-h-[100px] max-h-[160px] bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}></div>
    )
}

function Skill({ children }) {
    return (
        <span className='block mb-3 line-clamp-2 leading-relaxed'>
            <b className='font-medium'>Skill : </b>
            {children}
        </span>
    )
}

Card.Image = Image
Card.Skill = Skill