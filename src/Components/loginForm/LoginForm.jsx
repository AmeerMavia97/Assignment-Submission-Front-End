import React from 'react'

const LoginForm = ({ Details }) => {
    return (
        <>
            <div className='flex justify-center'>

                <div>
                    <div class="relative mt-6 max-[530px]:ml-[6%] max-[420px]:ml-[5%] max-[360px]:ml-[6%] max-[310px]:ml-[7%]">
                        <input type="number" id="small_outlined" class="max-[310px]:w-[95%] max-[360px]:w-[93%] max-[420px]:w-[94%] max-[530px]:w-[92%] border-[1px] border-solid block px-2.5 pb-1.5 pt-3 w-[98%] text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="small_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">CNIC*</label>
                    </div>

                    <p className='font-Signika max-[430px]:ml-[4%]  text-sm min-[420px]:mr-20 mt-1 max-[420px]:ml-[2%] max-[360px]:mr-2 max-[360px]:ml-[4%] max-[310px]:ml-[6%]'>Kindly provide the CNIC number used during SMIT course registration.</p>
                    
                    <div class="relative mt-5 max-[530px]:ml-[6%] max-[420px]:ml-[5%] max-[360px]:ml-[6%] max-[310px]:ml-[7%]">
                        <input type="password" id="small_outlined" class="max-[310px]:w-[95%] max-[360px]:w-[93%] max-[420px]:w-[94%] max-[530px]:w-[92%]  border-[1px] border-solid block px-2.5 pb-1.5 pt-3 w-[98%] text-sm text-gray-900 bg-transparent rounded border-1 border-gray-300  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label for="small_outlined" class="border-solid absolute font-Signika text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">PASSWORD*</label>
                    </div>
                    <p className='font-Signika mr-[78%] mt-3 text-sm'>Create Password! </p>

                    <div className=' max-[320px]:flex max-[320px]:justify-center max-[460px]:flex max-[460px]:justify-center max-[530px]:flex max-[530px]:justify-center'>
                        <button type="button" class="max-[310px]:ml-[4%] max-[360px]:ml-[4%] max-[460px]:px-[40%] max-[420px]:ml-[4%]  max-[530px]:px-[41%]   mt-5 text-white bg-[#035292] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded text-xs px-[46%] py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-Signika">LOGIN</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default LoginForm