// Root layout (app/layout.js)
// - Applies to all routes
import Link from "next/link"
export default function RootLayout({ children }) {
    return (
      <html>
        <body>
        <Link href='/'>Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
          {children}
       
        </body>
      </html>
    )
  }
  

 