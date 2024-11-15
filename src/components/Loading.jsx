import React from 'react';

const Loading = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
      <img className='w-full h-full object-cover' src="/loading.gif" alt="" />
    </div>
  )
}

export default Loading;