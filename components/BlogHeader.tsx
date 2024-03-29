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
        <header className="mt-12 mb-8 mx-1 md:mx-0 flex flex-col items-center md:mb-12 md:flex-row md:justify-between sm:mb-8">
          <Link href='/'>
          <div className='flex flex-column sm:flex-row'>
          <Image
          className="h-12 w-12 mx-8 justify-center"
          width={10}
          height={10}
          alt="Den Stille dal vel logo"
          src="/logo_w.png"
          sizes="100vw"
          />
          <h1 className="font-cormorant text-xl sm:text-4xl text-center leading-tight tracking-normal md:pr-4 md:pt-1 md:text-4xl">
            {title}
          </h1>
          </div>
          </Link>
          
            <div className='hidden md:flex flex-row'>
            <h4
              className={`mt-5 text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >

              {/* <PortableText value={description} /> */}
              
            </h4>
            <Link href="https://mailchi.mp/b6cd2dfd4566/den-stille-dal-vel-mailingliste" className='mx-4'>Mailingliste</Link>
            <Link href="/posts/om_dsv" className='mx-4'>Om velforeningen</Link>
            <Link href="/" className='mx-4'></Link>
            </div>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="font-cormorant mb-20 mt-8 text-2xl leading-tight tracking-tight md:text-4xl md:tracking-tighter">
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
