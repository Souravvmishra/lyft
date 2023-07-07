import React from 'react'

const BlueBtn = ({text}) => {
  return (
    <div>
      <button className=' bg-[#523BE4] hover:bg-[#6854de] rounded-full text-white px-6 py-[0.8rem] '>
        {text}
      </button>
    </div>
  )
}

export default BlueBtn
