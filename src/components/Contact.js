

const Contact = () => {
  return (
    <section className='flex flex-col bg-secondary px-5  py-35 min-h-[400px]' id='contacts'>
        <div className=' flex flex-col items-center  text-white py-35'>
            <h1 className='text-2xl md:text-4xl text-red-400 border-b-4 mb-5 w-[140px] border-yellow-400 font-bold '>Contact</h1>
            <p className='text-xl md:text-2xl lg:text-3xl mb-5'>If You want to discuss more in detail,Please contact me.</p>
            <p className='py-2'><span className='font-bold'>Email :</span>bejeevitha@gmail.com</p> 
            <p className='py-2'><span className='font-bold'>Phone :</span>+91 8110087041</p> 

        </div>
    </section>
  )
}

export default Contact