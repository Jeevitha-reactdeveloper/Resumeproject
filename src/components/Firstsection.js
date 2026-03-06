import first from '../assets/website-development.png';
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';

const Firstsection = () => {
  return (
    <section className=' min-h-screen bg-secondary py-20 ' id='firstsection'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 py-49  justify-center md:justify-between gap-8'>
            <div className='w-full md:w-1/2 md:text-left'>
            <div className='flex flex-col items-center'>
                <h1  className='font-name  text-white text-4xl  md:text-7xl  mt-3 leading-tight'>Hi,I am <span className='text-orange-600 font-bold'>Jeevitha</span> </h1>
                <TypeAnimation
            sequence={[
            'Full Stack Developer',
            2000,
            'React Developer',
            2000,
            'Frontend & Backend Enthusiast',
            2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-4 text-2xl text-orange-500 font-semibold"
        />
                <p className='text-sm md:text-xl mt-6 text-white'>I design and develop scalable web applications using React, Node.js and MongoDB. Passionate about building responsive frontends and efficient backend systems.</p>
            </div>
            <div className='w-full flex justify-around gap-2 mt-5 text-orange-500 text-2xl'>
                <a href='#projects'><button className='border border-orange-500 p-3 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg xs:w-[150px]'>Explore My Work</button></a>
                <a href='#contact'><button className='border border-orange-500 p-3 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg xs:w-[150px]'>Contact Me</button></a>
            </div>
            
                <div className='flex items-center py-6  px-10 text-white mt-10 md:px-60'>
                    <a href='https://www.linkedin.com/in/jeevitha-be-194776203/ '
                    target='_blank'
                    className='pr-5 hover:text-white'
                    rel="noopener noreferrer"><AiOutlineLinkedin size={50}/></a>
                    <a href='https://github.com/Jeevitha-reactdeveloper'
                    target='_blank'
                    className='pr-5 hover:text-white'
                    rel="noopener noreferrer"><AiOutlineGithub size={50}/></a>
                    <a href='https://github.com/Jeevitha-reactdeveloper'
                    target='_blank'
                    rel="noopener noreferrer"
                    className='pr-5 hover:text-white'><AiOutlineInstagram size={50}/></a>
                </div>
            </div>
            <div>
            <img  className=" w-full" src={first} alt='website design'/>
            </div>
        </div>

    </section>  
)
}

export default Firstsection