import React from 'react'

export default function MainDetails({name,address}) {
  return (
    <>
        {/* details */}
        <section className="flex flex-col items-end justify-end">
          {/* <input type="text" name="text" id="text"
          placeholder="Enter Your name" required/> */}
          <h2 className="font-bold text-2xl uppercase mb-1">{name}</h2>
          <p>{address}</p>
        </section>
    </>
  )
}
