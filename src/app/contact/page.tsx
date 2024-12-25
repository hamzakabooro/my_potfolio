
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md: grid-cols-2 gap-10'>
                <div className='space-y-8'>
                    <h2 className='text-5xl'>Get in touch</h2>
                    <p className='text-gray-600 text-[18px] pt-2'>
                        drop me a line; give me a call; or send me message by submitting the form
                    </p>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineMail size={40} />kaboorohamza32@gmail.com
                    </div>
                    <div className='flex gap-3 items-center'>
                        <MdOutlinePhoneIphone size={40} />03163465292
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[30px] bg-transparent border  border-blue-500' id='name' />
                    </div>
                    <div className='space-y-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                className='h-[30px] bg-transparent border  border-blue-500' id='email' />
                        </div>
                        <div className='space-y-2'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="msg">message</label>
                                <textarea
                                    className='bg-transparent border border-blue-500'
                                    id='msg' rows={4}>
                                </textarea>
                            </div>
                            <button className='bg-blue-500 p-2 px-6 rounded-2xl'>Send</button>
                        </div>

                    </div>
                </div>



            </div>

        </div>




    )
}

export default Contact
