import Resumeimg from '../assets/resume.png'

const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5  justify-center md:justify-between h-[400px]' id='resume'>
            <div className='md:w-1/2 py-5  flex justify-center md:justify-end' >
                <img  className='w-[200px] ' src={Resumeimg} alt="about"/>
            </div>
            <div className='md:w-1/2 flex  justify-center'>
                <div className='flex flex-col justify-center  text-white '>
                <h1 className='text-xl md:text-4xl text-red-400     border-b-4 mb-5 w-[90px] md:w-[140px] border-yellow-400 font-bold '>Resume</h1>
                <p className='text-xl md:text-2xl lg:text-3xl mb-5'>You can view my resume <a href='/resume.pdf' className='button hover'> Download</a></p> 
                
                </div>
            </div>
        </section>
  )
}

export default Resume