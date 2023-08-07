"use client"

import Image from 'next/image'
import { useFormik } from 'formik'
import Success from './success'
import { useState } from 'react'

export default function Home() {
  const [success, setSuccess] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Valid email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Valid email required"
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted successfully")
      setSuccess(true)
    }
  })

  return (
    <>
    {!success && 
      <div className='md:bg-slate-950'>

<section className='md:py-4 md:px-4 flex text-base md:w-[720px] lg:w-[900px] m-0 w-[100%] h-[100vh]'>
      <div className='md:flex flex flex-col-reverse md:flex-row w-[820px] md:gap-10 md:rounded-2xl md:shadow-lg bg-white md:overflow-hidden md:py-3 md:px-3 md:absolute md:justify-center md:items-center md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]'>
        
    <div className='pb-5 md:flex-1 px-4'>
      <h1 className='md:text-[58px] text-[42px] text-slate-900 font-bold mb-8 md:mb-10 mt-8'>Stay updated!</h1>
      <div>
        <h3 className='mb-3 max-w-full'>Join 80,000+ product managers receiving monthly update on:</h3>
        <p className='flex'>
          <Image className='pr-3'
          src='/icon-list.svg' 
          alt='icon-list'
          width={28}
          height={28} />
          Product discovery and building what matters
        </p>
        <p className='flex'>
          <Image className='pr-3'
          src='/icon-list.svg' 
          alt='icon-list'
          width={28}
          height={28} />
          Measuring to ensure updates are a success
        </p>
        <p className='flex'>
          <Image className='pr-3'
          src='/icon-list.svg' 
          alt='icon-list'
          width={28}
          height={28} />
          And much more!
        </p>
      </div>
      
      <div className='md:mt-6 mt-7'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <article className='flex items-center justify-between'>
            <label className="block mb-2 text-sm font-semibold" for="email">
              Email address
            </label>
            {formik.errors.email ? <p className='text-sm text-rose-500 font-bold'> {formik.errors.email} </p> : null}
          </article>
          <input className={`bg-white border text-sm rounded-lg focus:border-slate-800 block w-full p-2.5 ${formik.errors.email && 
          "bg-rose-100 border-rose-400 focus:border-rose-400"
          }`}
          type="email" 
          name='email'
          id="email"   
          placeholder="email@company.com" 
          value={formik.values.email}
          onChange={formik.handleChange} />
          <button className='bg-slate-950 text-white border-none rounded-lg w-full p-2.5 mt-4 focus:bg-success focus:shadow-xl' 
          id='button' 
          type='submit'
          onClick={formik.handleSubmit}>
          Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>

    <div className='md:hidden flex-col'>
      <Image className='max-w-none'
      src='./illustration-sign-up-mobile.svg' 
      alt='illustration-desktop'
      width={375}
      height={830} />
    </div>

    <div className='md:flex-1'>
      <Image className='max-w-none'
      src='./illustration-sign-up-desktop.svg' 
      alt='illustration-desktop'
      width={320}
      height={840} />
    </div>

  </div>
</section>


</div>
}
    {success && <Success email={formik.values.email} setSuccess={setSuccess} />}
    </>
  )
}
