import React from 'react'

export default function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <>
        {/* dates */}
        <article className="mt-10 mb-10 flex items-end justify-end">
          <ul>
            <li className='p-1'>
              <span className="font-bold">Bill Number : </span>{invoiceNumber}
            </li>
            <li className='p-1 bg-gray-100'>
              <span className="font-bold">Bill Date : </span>{invoiceDate}
            </li>
            <li className='p-1'>
              <span className="font-bold">Due Date : </span>{dueDate}
            </li>
          </ul>

        </article>
      
    </>
  )
}
