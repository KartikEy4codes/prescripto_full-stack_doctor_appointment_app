import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 dark:text-white'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm dark:text-gray-300'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 group' key={index}>
                        <div className='w-16 sm:w-24 mb-2 rounded-full overflow-hidden p-2 bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-sm group-hover:shadow-glow dark:from-gray-800 dark:to-gray-900'>
                            <img className='w-full object-cover' src={item.image} alt="" />
                        </div>
                        <p className='group-hover:text-primary transition-colors font-medium dark:text-gray-300 dark:group-hover:text-primary'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu