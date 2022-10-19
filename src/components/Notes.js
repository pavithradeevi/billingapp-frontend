import React from 'react'

export default function Notes({Notes}) {
  return (
   <>
     {/* notes */}
    <section className="mt-10 mb-5">
            <p className="lg:w-1/2 text-justify">{Notes}</p>
    </section>

   </>
  )
}
