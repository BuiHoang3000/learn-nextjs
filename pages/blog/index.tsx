import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';

export interface BlogListPageProps {
  blog: Post[];
}

function BlogListPage({ blog }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {blog.map((b) => (
            <li key={b.id}>
              <Link href={`/blog/${b.slug}`}>
                <a>
                  <PostItem post={b} />
                </a>
              </Link>

              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // Convert markdown files into list of javascript object
  const postList = await getPostList();

  return {
    props: {
      blog: postList,
    },
  };
};

export default BlogListPage;
