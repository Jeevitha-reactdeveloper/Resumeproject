import Aboutimg from '../assets/about2.png';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5  justify-center md:justify-between min-h-screen' id='about'>
      <div className='md:hidden'>
        <h1 className='text-2xl md:text-4xl  border-b-4 mb-5 w-[120px] md:w-[170px] text-red-400  border-yellow-400 font-bold '>About Me</h1>
      </div>
        <div className='md:w-1/2 py-5' >
            <img  className='' src={Aboutimg} alt="about"/>
        </div>
        <div className='md:w-1/2 flex  justify-center'>
            <div className='flex flex-col justify-center  text-white '>
            <h1 className=' hidden md:block text-2xl md:text-4xl  border-b-4 mb-5 w-[120px] md:w-[170px] text-red-400  border-yellow-400 font-bold '>About Me</h1>
            <p className='text-xl md:text-2xl lg:text-3xl mb-5'>Hi,My name is Jeevitha.I am a  React Frontend Developer.I built Dynamic Websites Using React.js and Tailwind CSS</p> 
            <p className='text-xl md:text-2xl lg:text-3xl'>I am Proficient in Frontend skills Like HTML,CSS,Javascript,React,Tailwind CSS,API Integration,Git and Github.</p>
            </div>
        </div>
    </section>
  )
}

export default About