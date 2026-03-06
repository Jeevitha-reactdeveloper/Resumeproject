import Resumeimg from '../assets/resume.png'

const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5  justify-center md:justify-between h-[800px]' id='resume'>
      <div className='max-w-6xl mx-auto px-6'>
        <div>
        <h1 className='md:block text-xl md:text-3xl text-orange-500  mb-5 font-bold '>Resume</h1>
        </div>
       <div className=' mt-2 md:mt-20 md:flex'>
          <div className='md:w-1/2 py-5  flex justify-center fill-orange-500' >
            <img  className='w-[150px] md:w-[150px] md:h-[350px] fill-orange-500' src={Resumeimg} alt="about"/>
          </div>
          <div className='md:w-1/2 flex  justify-center mb-10'>
            <div className='flex flex-col justify-center items-center  text-white '>
                {/*<h1 className='hidden md:block text-xl md:text-4xl md:my-3 text-orange-500 border-b-2 mb-6 w-[90px] md:w-[140px] border-white font-bold '>Resume</h1>*/}            
                <p className='text-xl md:text-2xl mb-6 md:py-3'> Download my resume to explore my technical skills, projects,
                  and experience as a Full Stack Developer.</p> 
              <a href='/Jeevitharesume.pdf' download className='button hover '> Download Resume</a>
                
            </div>
          </div>
        </div>
      </div>
        </section>
  )
}

export default Resume