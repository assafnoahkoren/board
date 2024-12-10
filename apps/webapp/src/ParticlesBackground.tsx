import { FC } from 'react'
// @ts-ignore
import Clock from 'react-digital-clock';

const ParticlesBackground: FC = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end p-4 box-border">
                <img src="/image.png" className='w-1/5 object-cover' alt="nest logo"/>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-end items-end p-4 box-border text-6xl">
                <Clock hour12={false} format="hh-mm"/>
            </div>
        </>
    )
}

export default ParticlesBackground

