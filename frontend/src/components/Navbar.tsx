'use client';

import { Logo } from "@/images";
import { useRouter, usePathname } from "next/navigation"

export const Navbar = () => {
    const name = usePathname()
    const router = useRouter()

    const goHome = () => {
        router.push('/homePage')
    }
    const driverCV = () => {
        router.push('/driverCV')
    }
    const intro = () => {
        router.push('/introduction')
    }
    const oppor = () => {
        router.push('/opportunity')
    }
    const getInTouch = () => {
        router.push('/getInTouch')
    }
  return (
    <div className='border-b border-gray fixed inset-0 bg-black h-20 z-30'>
        <div className='flex max-w-screen-xl mx-auto items-center h-20 justify-between'>
            <div>
                <button onClick={goHome}><Logo /></button>
            </div>
            <div className='flex gap-8 items-center'>
                <button className='hover:text-[#1D4ED8] font-medium text-white' style={{color: name === '/introduction' ? '#1D4ED8' : ''}} onClick={intro}>Танилцуулга</button>
                <button className='hover:text-[#1D4ED8] font-medium text-white' style={{color: name === '/opportunity' ? '#1D4ED8' : ''}} onClick={oppor}>Боломжууд</button>
                <button className='hover:text-[#1D4ED8] font-medium text-white' style={{color: name === '/getInTouch' ? '#1D4ED8' : ''}} onClick={getInTouch}>Холбоо барих</button>
            </div>
            <div>
                <button className='px-4 py-2 bg-[#1D4ED8] rounded-lg text-white text-sm font-medium' onClick={driverCV}>Жолооч болох ?</button>
            </div>
        </div>
    </div>
  )
}