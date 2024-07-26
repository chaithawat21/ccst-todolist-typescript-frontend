
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

function Container({children}: ContainerProps) {
    return (
    <div className='container mx-auto'>
        <div className='bg-white w-[1024px] mx-auto rounded-md px-4 pt-5 flex flex-col gap-y-3'>
        {children}
        </div>
    </div>
    )
}

export default Container;