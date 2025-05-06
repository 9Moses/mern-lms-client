import React, { FC, use, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { styles } from '../../styles/style'

type Props = {
    setRoute: (route: string) => void;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const SignUp:FC<Props> = ({setRoute}) => {
    const [show, setShow]  = useState(false);

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: schema,
      onSubmit: async ({name,email,password}) => {
        setRoute('verification');
      },
    });

    const  {errors, touched,values, handleChange, handleSubmit} = formik;
  return (
    <div className='w-full'>
        <h1 className={`${styles.title}`}>
            Join With SysLearn 
        </h1>
        <form onSubmit={handleSubmit}>
            <label className={`${styles.label}`} htmlFor="name">Name</label>
            <input
            type='name'
            name=''
            value={values.name}
            onChange={handleChange}
            id='name'
            placeholder='John Doe'
            className={`${errors.name && touched.name && "border-red-500" } ${styles.input}`}
            />
            {errors.name && touched.name && (
                <span className='text-red-500 pt-2 block'>{errors.name}</span>
            )}
              <div className='w-full mt-5 mb-1'>
            <label className={`${styles.label}`} htmlFor="email">Email</label>
            <input
            type='email'
            name=''
            value={values.email}
            onChange={handleChange}
            id='email'
            placeholder='info@gmail.com'
            className={`${errors.email && touched.email && "border-red-500" } ${styles.input}`}
            />
            {errors.email && touched.email && (
                <span className='text-red-500 pt-2 block'>{errors.email}</span>
            )}
            </div>
            <div className='w-full mt-5 relative mb-1'>
            <label className={`${styles.label}`} htmlFor="password">Password</label>
            <input 
              type={!show ? 'password' : 'text'}
              name='password'
              value={values.password}
              onChange={handleChange}
              id='password'
              placeholder='password'
              className={`${errors.password && touched.password && "border-red-500" } ${styles.input}`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className='absolute bottom-3 right-2 cursor-pointer'
                size={25}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className='absolute bottom-3 right-2 cursor-pointer'
                size={25}
                onClick={() => setShow(false)}
              />
            )}
            
            </div>
            {errors.password && touched.password && (
                <span className='text-red-500 pt-2 block'>{errors.password}</span>
            )}
            <div className='w-full mt-5'>
                <input
                type='submit'
                value='Sign Up'
                className={`${styles.button}`}
                />
            </div>
            <br/>
            <h5 className='text-center pt-4 font-Montserrat text-[14px] text-black dark:text-white'>
            Or register with
            </h5>
            <div className='flex items-center justify-center my-3'>
            <FcGoogle className='cursor-pointer mr-2' size={25}/>
            <AiFillGithub className='cursor-pointer ml-2' size={25}/>
            </div>
            <div className='flex items-center justify-center my-3'>
            <p className='dark:text-white text-black text-center pt-4 text-[14px]'>Already have an account? 
            <span onClick={() => setRoute("Login")} className='text-[#39c1f3] pl-1 cursor-pointer'>Login</span>
            </p>
            
            </div>
        </form>    
    </div> 
  )
}

export default SignUp