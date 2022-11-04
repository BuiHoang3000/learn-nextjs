import { Box, Container, Typography } from '@mui/material';
//
import { Work } from '@/models';
import { WorkList } from '../works';

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Dashboard'],
      shortDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      fullDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      thumbnailUrl:
        'https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-thumb.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Illustration '],
      shortDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      fullDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      thumbnailUrl:
        'https://cdn.singulart.com/artworks/v2/cropped/11201/main/fhd/653063_a8c3d933d9d9cae6d42a5dacd2d55317.jpeg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Typography'],
      shortDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      fullDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      thumbnailUrl:
        'https://cdn.dribbble.com/users/236966/screenshots/3736760/media/998cb0aaaf41881aba137162f0a9799b.png?compress=1&resize=400x300',
    },
  ];

  return (
    <Box component="section" pt={2} py={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured Works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
