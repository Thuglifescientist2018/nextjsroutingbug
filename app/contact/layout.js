import React from 'react'
import Link from 'next/link'

const ContactLayout = () => {
  return (
    <div>
         <ul>
           <Link href={`/contact/c1`}>C1</Link>
        </ul>
    </div>
  )
}

export default ContactLayout