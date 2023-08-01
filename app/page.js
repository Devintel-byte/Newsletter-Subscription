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
      <div className='bg-slate-950'>

<section className='py-4 px-4 text-base md:w-[720px] lg:w-[900px] m-0 w-[100%] h-[100vh]'>
      <div className='flex w-[820px] gap-10 rounded-2xl shadow-lg bg-white overflow-hidden py-8 px-8 absolute justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        
    <div className='pb-5 flex-1'>
      <h1 className='text-[58px] text-slate-900 font-bold mb-10 mt-8'>Stay updated!</h1>
      <div>
        <h3 className='mb-3 max-w-full'>Join 80,000 product managers receiving monthly update on:</h3>
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
      
      <div className='mt-5'>
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
          <button className='bg-slate-950 text-white border-none rounded-lg w-full p-2.5 mt-4 focus:bg-success' 
          id='button' 
          type='submit'
          onClick={formik.handleSubmit}>
          Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>

    <div className='flex-1'>
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
