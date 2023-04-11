import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'  > 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-orange-600'> About </p>
            </div>
            <div>
                <p className='text-xl mt-20'>
                I'm a junior full-stack developer passionate about video games and traveling. 
                 I consider myself a professional with a high capacity for adapting to changes and working under pressure. Additionally, I really enjoy working in a team. I am eager to continue learning and improving every day. I would like my work to have a social impact and help people. My goal and objective is to keep learning and surpassing myself.

                A phrase that defines me would be: "We shouldn't stop playing just because we're afraid of losing."
                </p>
                <br/>
                <p className='text-xl'>
                I was working for a different type of business before I decided to change my career. I was working as an assistant manager for a British multinational brand specializing in coffee and sandwiches called Pret a Manger.
                I progressed from a team member to an assintant manager. I learn how the company operates and how to keep track of sales and KPIs. My role as assistant manager was to make sure that all the rules for health and safety were working properly. In addition holidays, day off, absents were recorded properly on the sytem, and motivated my team to be happy and developing an excellent amostphere for work.
                My career was sttoped by Covid so, I decided to change my life. I started coding six months ago in a bootcamp in Barcelona.
                I learned how some languages, such as HTML, CSS, JavaScript, and PHP, work behind the scenes. I learned how to use some frameworks, such as React, SCCS, Bootstrap, and Tailwind, and how to use some databases, such as MySQL, or another framework, such as Laravel.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About