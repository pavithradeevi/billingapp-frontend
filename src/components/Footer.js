import React from 'react'

export default function Footer({name,email,address,website,phone,bankname,accnumber,holname}) {
  return (
    <>
        {/* footer */}
      <footer className='footer border-t-2 border-gray-300 pt-5'>
            <ul className="flex flex-wrap items-center justify-center">
              <li><span className="font-bold">Your Name :</span> {name}</li>
              <li><span className="font-bold">Your Email :</span> {email}</li>
              <li><span className="font-bold">Phone Number :</span> {phone}</li>
              <li><span className="font-bold">Bank Name :</span> {bankname}</li>
              <li><span className="font-bold">Account Holder Name :</span> {holname}</li>
              <li><span className="font-bold">Account Number :</span> {accnumber}</li>
              <li>
                <span className="font-bold">Website :</span>
                <a href={website} target="_blank" rel="noopenner noreferrer">{website}</a>
              </li>
            </ul>
      </footer>
    </>
  )
}
