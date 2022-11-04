import { Post } from '@/models';
import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';

export function RecentPost() {
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '2022-06-15T10:00:00Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
    {
      id: '2',
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '2022-06-15T11:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} py={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link passHref href="/blog">
            <MuiLink sx={{ display: { xs: 'none', md: 'inline-block' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ '& > div': { width: { xs: '100%', md: '50%' } } }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
