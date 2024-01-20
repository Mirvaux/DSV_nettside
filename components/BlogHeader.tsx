import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mt-12 mb-8 flex flex-col items-center md:mb-12 md:flex-row md:justify-between sm:mb-8">
          <Link href='/'>
          <div className='flex flex-row'>
          <Image
          className="h-12 w-12 mr-8 justify-center"
          width={10}
          height={10}
          alt="Den Stille dal vel logo"
          src="/logo_w.png"
          sizes="100vw"
          />
          <h1 className="text-4xl text-center font-bold leading-tight tracking-tighter md:pr-4 md:pt-1 md:text-4xl">
            {title}
          </h1>
          </div>
          </Link>
          
            <div className='flex flex-row'>
            <h4
              className={`mt-5 text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >

              {/* <PortableText value={description} /> */}
              
            </h4>
            <Link href="posts/om_dsv" className='mx-4'>Om velforeningen</Link>
            <Link href="/" className='mx-4'></Link>
            </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
