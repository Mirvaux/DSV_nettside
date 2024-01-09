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
import { otherBySlugQuery, Settings } from 'lib/sanity.queries';
import { getClient } from 'lib/sanity.client';
import type { Other } from 'lib/sanity.queries';
import { notFound } from 'next/navigation'
import * as demo from 'lib/demo.data'

interface OtherPageProps {
  otherData: Other;
  preview?: boolean
  loading?: boolean
  settings: Settings
}


export default function OtherPage(props: OtherPageProps) {
    const { preview, loading, otherData } = props
    const { title = demo.title } = settings || {}
  
    const slug = otherData?.slug
  
    if (!slug && !preview) {
      notFound()
    }

const OtherPage: React.FC<OtherPageProps> = ({ otherData }) => {
  const router = useRouter();

  if (!router.isFallback && !otherData?.slug) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={1} />
          {preview && !post ? (
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getClient().fetch(otherBySlugQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      otherData: data || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient().fetch(allOtherSlugsQuery);

  return {
    paths: paths.map((path) => ({ params: { slug: path.slug } })),
    fallback: true,
  };
};

export default OtherPage;
