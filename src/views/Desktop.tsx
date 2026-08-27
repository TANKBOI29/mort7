'use client';
import { Box, Typography } from '@mui/joy'
import { useTranslations } from 'next-intl';
import Footer from '@/components/organisms/Footer';

export default function DesktopView() {
  

  return (
    <Box
      className="desktop"
      sx={{
        display: 'grid',
        gridTemplateRows: '1fr min-content',
        rowGap: 4,
      }}
      zIndex={1}
    >
      

      <Box></Box>

      <Footer />
    </Box>
  )
}