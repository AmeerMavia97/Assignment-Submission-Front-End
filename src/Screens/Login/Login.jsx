import React from 'react'
import Buttons from '../../Components/loginForm/Button.jsx'
import LoginForm from '../../Components/loginForm/LoginForm.jsx'


const Login = () => {
  return (
    <>
    <div className='text-center mt-24'>
        <div className='flex justify-center  '>
        <img width={'120px'} height={'75px'} className='' src="https://student.saylaniwelfare.com/assets/logo-OpazD70S.png" alt="" />
        </div>
        <h1 className='font-Signika font-bold '>Student Portal</h1>
        <div className='mt-4 flex gap-4 justify-center'> 
            <Buttons names={'STUDENT'}></Buttons>
            <Buttons names={'TEACHER'}></Buttons>
        </div>
        <div className=''>
            <LoginForm Details={'CNIC*'}></LoginForm>
        </div>
    </div>
    </>
  )
}

export default Login