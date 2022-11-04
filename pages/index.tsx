import { Box } from '@mui/system';
//
import { FeatureWorks, HeroSection, RecentPost } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { Seo } from '@/components/common';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Learn Nextjs | IU2000',
          description: 'Learn Nextjs for beginners',
          url: 'http://learn-nextjs-five-rho.vercel.app/',
          thumbnailUrl:
            'https://c-fa.cdn.smule.com/smule-gg-s-sf-bck4/arr/ee/4d/650e5c5e-8207-4d27-adeb-04c8c1e8d2c0_1024.jpg',
        }}
      />

      <HeroSection />
      <RecentPost />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
