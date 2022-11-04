import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { Box, Container, Divider } from '@mui/material';
//
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Seo } from '@/components/common';

export interface BlogDetailPageProps {
  post: Post;
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
  if (!post) return null;

  return (
    <Box>
      <Seo
        data={{
          title: post.title,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl: post.thumbnailUrl || '',
        }}
      />
      <Container>
        <h1>Blog Detail Page</h1>

        <p>{post.title}</p>
        <p>{post.author?.name}</p>

        <Divider />

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  // Parse Markdown to Html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(rehypeSlug)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog detail page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');
  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
