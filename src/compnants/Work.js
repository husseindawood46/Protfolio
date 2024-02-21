import React from 'react'
import Workimg1 from '../assets/project1.png'
import Workimg2 from '../assets/project2.png'
import Workimg3 from '../assets/project3.png'
import Workimg4 from'../assets/project4.png'

export default function 
() {
  return (
    <div name='work' className='w-full md:h-screen  text-gray-300  bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pd-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Work</p>
          <p className='my-6'>// check out some of my recent work</p>
        </div>

        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage:`url(${Workimg1})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Workimg2})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Workimg3})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Workimg4})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Workimg1})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Workimg2})`, }} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>


            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' > 
              <span className='text-2xl font-bold text-white tracking-wider'> React js Application </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/husseindawood46/Restaurant'>
                  <button className='text-center around-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
