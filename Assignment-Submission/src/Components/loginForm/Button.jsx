import React from 'react'

const Button = ({names}) => {
  return (
    <>
    <button
    type="button" className="max-[310px]:px-[11%] max-[360px]:px-[13%] max-[460px]:px-[14%] max-[490px]:px-[70px] max-[530px]:px-[76px] font-Signika py-[12px] px-[90px] me-2 mb-2 text-[12px] font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-[#e3ebf7] hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >{names}</button>
    </>
  )
}

export default Button