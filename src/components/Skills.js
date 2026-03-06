import React from 'react'

const Skills = () => {
  return (
<section id="skills" className='py-20 bg-secondary text-white min-h-screen'>
    <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className='md:block text-xl md:text-3xl text-orange-500  mb-5 font-bold '>Skills</h1>
    <div className='grid grid-cols-3 md:flex justify-between space-y-2 mt-10'>
    <div className="flex flex-col items-center">
        <i className="devicon-html5-plain colored text-5xl"></i>
        <p className='mt-2'>HTML</p>
    </div>

    <div className="flex flex-col items-center">
        <i className="devicon-css3-plain colored text-5xl"></i>
        <p className='mt-2'>CSS</p>
    </div>

    <div className="flex flex-col items-center">
        <i class="devicon-javascript-plain colored text-5xl"></i>
        <p className='mt-2'>JavaScript</p>
    </div>

    <div className="flex flex-col items-center">
        <i class="devicon-react-original colored text-5xl"></i>
        <p className='mt-2'>React</p>
    </div>

    <div className="flex flex-col items-center">
        <i className="devicon-nodejs-plain colored text-5xl"></i>
        <p className='mt-2'>Node.js</p>
    </div>

    <div className="flex flex-col items-center">
        <i className="devicon-express-original text-5xl"></i>
        <p className='mt-2'>Express.js</p>
    </div>

    <div className="flex flex-col items-center">
    <i className="devicon-mongodb-plain colored text-5xl"></i>
    <p className="mt-2">MongoDB</p>
    </div>
</div>
    </div>
</section>
  )
}

export default Skills