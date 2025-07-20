import Todo  from '../assets/to do.png'
import userlogin  from '../assets/user login.png'
import Socialmedia  from '../assets/social media.jpg'


const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-xl md:text-2xl text-black min-h-screen" id='projects'>
    <div className="w-full flex flex-col">
     <h1 className="text-2xl md:text-4xl mb-5 border-b-4 w-[140px] border-yellow-400 font-bold">Projects</h1>
     <p className='px-5 py-8'>These are some of my best projects.I have built these with HTML,CSS,Javascript,React,Tailwind CSS.Check them out.</p>
    </div>
    <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
              <img  className='h-[200px] w-[400px]' alt='to do' src={Todo}/>
              <div className='absolute left-o right-0 bottom-0 top-0 bg-gray-500  opacity-0 hover:opacity-100 duration-500'>
                <p className='text-center py-6 '>To do List app is built with React Using CRUD Operations.</p>
              </div>
            </div> 
            <div className='relative'>
              <img  className='h-[200px] w-[400px]' alt='userlogin' src={userlogin}/>
              <div className='absolute left-o right-0 bottom-0 top-0 bg-gray-500   opacity-0 hover:opacity-100 duration-500'>
                <p className='text-center py-6' >Login page is created using Regex login authentication.</p>
              </div>
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[400px]' alt='socialmedia' src={Socialmedia}/>
               <div className='absolute left-o right-0 bottom-0 top-0 bg-gray-500  opacity-0 hover:opacity-100 duration-500'>
                   <p className='text-center py-6 '>Simple Social Media app in Which we can post,edit,delete the posts.It is developed using API Integration and CRUD operations.</p>
               </div>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Projects