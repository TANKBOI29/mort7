'use client';
import React from 'react';
import { Box, Typography } from '@mui/joy';
import { useTranslations } from 'next-intl';
import Footer from '@/components/organisms/Footer';
import ScrollBox from '@/components/molecules/ScrollBox';
import Divider from '@mui/joy/Divider';

export default function DesktopView() {
  
  const [listboxOpen, setListboxOpen] = React.useState<boolean>(false);
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
      

      <ScrollBox dependency={listboxOpen}
      
        
      >
        <Divider></Divider>
      </ScrollBox>

      <Footer />
    </Box>
  )
}