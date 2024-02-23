import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import MailchimpForm from './Mailchimp'

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
      
      <div className="mb-6 md:mb-6 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 p-6">
        
        <div className='p-4 rounded-md hover:border-b-2 border-slate-600 hover:cursor-pointer sm:mb-6'>
          <h3 className="font-cormorant tracking-normal mb-4 text-4xl leading-tight lg:text-6xl">
          <div className="mb-4 md:mb-4 flex-row md:flex-row">
            <CoverImage slug={slug} title={title} image={coverImage} priority />
            </div>
            <Link href={`/posts/${slug}`} className="font-cormorant">
              {title || 'Untitled'}
            </Link>
            <div className="font-cormorant mt-2 text-sm md:mb-0">
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
        
        {/* <div className='invisible md:visible border mx-8 border-gray-200 font-karla shadow-md p-2 rounded-lg'><br />
        <MailchimpForm />
        </div> */}
      </div>

      
    </section>
  )
}
