import React from 'react'

import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className=' container grid lg:grid-cols-2  md:grid-cols-1 mt-20]'>
        <Image src={"/hamza.png.jpg"} alt='profile pic' width={200} height={100} className="m-28 ml-10  h-[400px] w-[380px] border border-red-700 rounded-full" />
        <div className='text-[100px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>

          <div>
            <p>I'm</p>
            <p>Hamza</p>
            <p>khan</p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Hero
