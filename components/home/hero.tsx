import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

//
import avatar from '@/images/avatar.jpg';

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start ' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={8}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am John, <br />
              Creative Technologist
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`}
            </Typography>

            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" priority />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
