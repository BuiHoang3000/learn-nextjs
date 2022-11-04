import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
//
import { Post } from '@/models';

export interface PostCardProps {
  post: Post;
}

export function PostCard(props: PostCardProps) {
  const { post } = props;

  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Typography variant="body1">
            {format(new Date(post.publishedDate), 'dd MMM yyyy')}
          </Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography variant="body1">{post.tagList.join(', ')}</Typography>
        </Stack>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}