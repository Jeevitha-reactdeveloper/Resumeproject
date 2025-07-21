import first from '../assets/website-development.png';
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";
const Firstsection = () => {
  return (
    <section className=' min-h-screen flex flex-col md:flex-row items-center px-6 py-49 bg-secondary justify-center md:justify-between gap-8' id='firstsection'>
        <div className='w-full md:w-1/2 md:text-left'>
           <div className='flex flex-col items-center'>
              <h1  className='font-name  text-white text-4xl  md:text-7xl   leading-tight'>Hi,<br/>I am <span className='text-red-400 font-bold'>Jeevitha</span> </h1>
              <p className=' font-name text-2xl md:text-3xl mt-4 text-white'>I am a Frontend Developer.</p>
           </div>
           
            <div className='flex flex-row items-center py-6  px-10 text-blue-600  md:px-60'>
                <button className='pr-5 hover:text-white'><AiOutlineLinkedin size={50}/></button> 
                <button className='pr-5  hover:text-white'><AiOutlineInstagram size={50}/></button>
                <button className='pr-5  hover:text-white'><AiOutlineFacebook size={50}/></button>
            </div>
        </div>
        <div>
           <img  className=" w-full" src={first} alt='website design'/>
        </div>

    </section>  
)
}

export default Firstsection