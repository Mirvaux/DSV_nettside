// pages/other/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getClient } from 'lib/sanity.client';
import { Other } from 'lib/sanity.queries';

interface OtherPageProps {
  other: Other;
}

export default function OtherPage({ other }: OtherPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{other.title}</h1>
      {/* Render other body or content */}
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
