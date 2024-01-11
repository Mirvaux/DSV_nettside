// pages/other/[slug].tsx
import OtherPage from 'components/OtherPage'
import PreviewOtherPage from 'components/PreviewOtherPage'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getClient } from 'lib/sanity.client';
import { Other, Settings } from 'lib/sanity.queries';

interface OtherPageProps {
  other: Other;
  settings: Settings;
}

export default function RenderOtherPage({ other }: OtherPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{other.title}</h1>
        <OtherPage otherData={other} settings={settings} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<OtherPageProps, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const client = getClient();

  const other = await client.fetch<Other>(`*[_type == "other" && slug.current == $slug][0]`, { slug });

  if (!other) {
    return { notFound: true };
  }

  console.log(other);

  return {
    props: {
      other,
    },
    revalidate: 60, // Optionally, enable ISR by setting a revalidation period
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient();
  const slugs = await client.fetch<string[]>(`*[_type == "other" && defined(slug.current)].slug.current`);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true, // or 'blocking' if you prefer
  };
};
