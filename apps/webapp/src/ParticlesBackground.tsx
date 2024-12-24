import { FC } from 'react'
// @ts-ignore
import Clock from 'react-digital-clock';

const Header: FC = () => {
    return (
        <>
            <div className="w-full flex justify-between">
                
                <div className="flex-1 flex justify-start items-start text-5xl font-bold">
                    <div className="bg-black bg-opacity-50 flex justify-center items-center p-4 rounded-lg">
                        <Clock hour12={false} format="hh-mm"/>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="/nest_white.svg" className=' h-[10vh] object-cover mb-4' alt="nest logo"/>
                </div>
                <div className='flex-1' />
            </div>
        </>
    )
}

export default Header

