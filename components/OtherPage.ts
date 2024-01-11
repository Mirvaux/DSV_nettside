import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getClient } from 'lib/sanity.client';
import type { Other, Settings } from 'lib/sanity.queries';
import { notFound } from 'next/navigation'
import * as demo from 'lib/demo.data'

interface OtherPageProps {
  otherData: Other;
  preview?: boolean
  loading?: boolean
  settings: Settings
}


export default function OtherPage(props: OtherPageProps) {
    const { preview, loading, otherData, settings } = props
    const { title = demo.title } = settings || {}
  
    const slug = otherData?.slug
  
    console.log("Loggin settings in OtherPage.ts", settings);

    if (!slug && !preview) {
      notFound()
    }

    console.log("Next -> Rendering OtherPage component with data:", otherData);

  return (
    <>
      <OtherPageHead settings={settings} post={otherData} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={1} />
          {preview && !otherData ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={otherData.title}
                  coverImage={otherData.coverImage}
                  date={otherData.date}
                  author={otherData.author}
                />
                <PostBody content={otherData.content} />
              </article>
              <SectionSeparator />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};
