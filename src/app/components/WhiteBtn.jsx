import React from 'react'

const WhiteBtn = ({text}) => {
  return (
    <div>
      <button className=' bg-white hover:bg-slate-100 rounded-full text-black border-black border px-6 py-[0.8rem] '>
        {text}
      </button>
    </div>
  )
}

export default WhiteBtn
