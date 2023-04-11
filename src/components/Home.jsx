import React from 'react'
import Profileimage from '../assets/profile.JPG'
import {TiArrowRightOutline} from 'react-icons/ti';


const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-2 md:flex-row'> 
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'>
                    I'm a Junior Full Stack Developer
                </h2>
                <p className='text-gray-400 py-4 max-w-md '>
                Covid-19 was a big character for everyone from 2020 to 2022. I was working as an assistant manager for a British multinational brand specialising in coffee and sandwiches called Pret a Manger. After Covid stopped my career, I decided to re-program myself, to ask myself what I should do with my life, people said all roads lead to one destination. My destination was to become a full stack software developer. I started coding 6 months ago and I haven't stopped learning since. I'm still learning about coding.  
                </p>
                <div>
                    <button className='group text-white w-fit px-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-900 to-orange-700'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                         <TiArrowRightOutline  className='ml-2'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
            <img src={Profileimage} alt='profile' className='rounded-3xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home