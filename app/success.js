import React from 'react'
import Image from 'next/image'
import { useFormik } from 'formik'

export default function Success({email, setSuccess}) {
  return (
    <>
        <div className='bg-slate-900 flex items-center justify-center h-screen'>
            <section className='bg-white pt-20 px-4 pb-8 flex flex-col justify-between h-screen md:h-auto md:w-[500px] md:rounded-2xl md:p-12'>
                <div>
                    <Image className='mb-8'
                    src="./icon-success.svg" 
                    alt='icon-success' 
                    width={60} 
                    height={60} />

                    <h2 className='text-5xl text-slate-900 font-bold mb-10 mt-8'>Thanks for subscribing!</h2>
                    <p className='mb-8'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. 
                    Please open it and click the button inside to confirm your subscription.</p>
                </div>

                <button 
                className='bg-slate-950 text-white border-none rounded-lg w-full p-2.5 mt-4 md:shadow-lg focus:bg-success' 
                id='button'
                onClick={() => setSuccess(false)} 
                >
                Dismiss message
                </button>
            </section>
        </div>
    </>
  )
}
