import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

// Function to truncate the string to 50 characters and add ellipsis
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section className=''>
      
      <div className="mb-6 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 p-5">
        
        <div className='p-4 rounded-md hover:border-b-4 border-slate-200 hover:cursor-pointer'>
          <h3 className="font-hedvig-letters tracking-normal mb-4 text-4xl leading-tight lg:text-6xl">
          <div className="mb-4 md:mb-4 flex-row md:flex-row">
            <CoverImage slug={slug} title={title} image={coverImage} priority />
            </div>
            <Link href={`/posts/${slug}`} className="font-semibold">
              {title || 'Untitled'}
            </Link>
            <div className="mt-2 text-sm md:mb-0">
              <Date dateString={date} />
            </div>
          </h3>
          <div>
          
          {excerpt && <p className="font-karla mb-4 text-lg leading-relaxed">{truncateString(excerpt, 150)}</p>}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
          </div>
          
          
        </div>
        
        {/* <div className='font-karla shadow-md p-4 hover:bg-teal-200 rounded-lg'>Bidra til DSV's arbeid:<br /><br />Vipps</div> */}
      </div>

      
    </section>
  )
}
