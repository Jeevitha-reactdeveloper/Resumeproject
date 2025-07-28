import Resumeimg from '../assets/resume.png'

const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5  justify-center md:justify-between h-[400px]' id='resume'>
      <div className='md:hidden'>
        <h1 className='md:block text-xl md:text-4xl text-red-400     border-b-4 mb-5 w-[90px] md:w-[140px] border-yellow-400 font-bold '>Resume</h1>
      </div>
            <div className='md:w-1/2 py-5  flex justify-center md:justify-end' >
                <img  className='w-[150px] md:w-[200px] ' src={Resumeimg} alt="about"/>
            </div>
            <div className='md:w-1/2 flex  justify-center'>
                <div className='flex flex-col justify-center items-center  text-white '>
                <h1 className='hidden md:block text-xl md:text-4xl md:my-3 text-red-400 border-b-4 mb-6 w-[90px] md:w-[140px] border-yellow-400 font-bold '>Resume</h1>
                <p className='text-xl md:text-2xl lg:text-3xl mb-6 md:py-3'>You can view my resume </p> 
                <a href='/resume.pdf' download className='button hover '> Download</a>
                
                </div>
            </div>
        </section>
  )
}

export default Resume