import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Icon, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const socialLinks = [
  { id: 1, icon: Facebook, url: 'https://facebook.com' },
  { id: 2, icon: Instagram, url: 'https://instagram.com' },
  { id: 3, icon: Twitter, url: 'https://twitter.com' },
  { id: 4, icon: LinkedIn, url: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item) => (
          <Box
            key={item.id}
            component="a"
            p={2}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>

      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  );
}
