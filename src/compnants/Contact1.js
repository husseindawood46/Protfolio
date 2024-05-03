import React from 'react';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ">
      <form
        action="https://getform.io/f/nelJq5bK"
        method="post"
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="font-bold inline text-gray-300 border-b-4 border-b-pink-600 text-4xl ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below me an email - hessendawood46@gmail.com
          </p>
        </div>
        <input className=" rounded bg-[#ccd5f6] p-2" type="text" placeholder="name " name="name" />
        <input
          className="my-4 p-2 rounded  bg-[#ccd5f6]"
          type="email"
          placeholder="Email "
          name="email"
        />
        <textarea
          className="bg-[#ccd5f6] rounded p-2"
          placeholder="massage"
          name="massage"
          cols="30"
          rows="10"
        />
        <button className="border-2 text-gray-300 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center  hover:bg-pink-600 duration-300 ">
          let's Collaborate{' '}
        </button>
      </form>
    </div>
  );
}

export default Contact;
