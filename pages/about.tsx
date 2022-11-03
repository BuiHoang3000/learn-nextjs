import { Typography } from '@mui/material';
//
import { MainLayout } from '@/components/layout';

const AboutPage = () => {
  return (
    <Typography component="h1" variant="h3" color="primary.main">
      AboutPage
    </Typography>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;
