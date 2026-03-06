import Aboutimg from '../assets/about2.png';

const About = () => {
  return (
    <section className='bg-secondary  min-h-screen' id='about'>
      <div className='max-w-6xl mx-auto py-20 '>
          <h1 className='text-2xl md:text-3xl mb-5 text-orange-500 font-bold w-[190px] md:w-[250px] px-5'>About Me</h1>
        <div className='flex flex-col md:flex-row px-5 justify-center md:justify-between'>
          <div className='md:w-1/2 md:mb-50 py-5 w-full' >
              <img  className='w-[600px] h-[400px] place-items-center' src={Aboutimg} alt="about"/>
          </div>
          <div className='md:w-1/2 flex mb-50 justify-center w-full'>
              <div className='flex flex-col justify-center  text-white '>
  {/*               <h1 className=' hidden md:block text-2xl md:text-4xl  border-b-2 mb-5 w-[120px] md:w-[170px] text-orange-500  border-white font-bold '>About Me</h1>
  */}              <p className='text-xl md:text-2xl lg:text-2xl mb-2'>I am a passionate Full Stack Developer with a strong foundation in building responsive and user-friendly web applications. I specialize in creating modern frontends using React and developing structured backend systems using Node.js and MongoDB.</p>
                <p className='text-xl md:text-2xl lg:text-2xl'>I enjoy transforming ideas into scalable web solutions and continuously improving my problem-solving and development skills. I am actively seeking opportunities where I can contribute, learn, and grow as a developer.</p> 
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About