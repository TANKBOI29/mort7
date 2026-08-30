'use client';
import React from 'react';
import { Box, ListItem, Typography } from '@mui/joy';
import { useTranslations } from 'next-intl';
import Footer from '@/components/organisms/Footer';
import ScrollBox from '@/components/molecules/ScrollBox';
import Divider from '@mui/joy/Divider';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import DataContainer from '@/components/atoms/DataContainer';

import { useDataStore } from '@/stores/data';

export default function DesktopView() {
  
  const setGun = useDataStore((s) => s.setGun)
  const Positon = useDataStore((s) => s.getGun)

  const gunPositions: Record<string, [number, number]> = {
    "E2": [5,2],
    "D3": [1, 2]
};

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
      
      <DataContainer
      
      >
        <Select
          listboxOpen={listboxOpen}
          
          variant="soft"
          onChange={(_, newValue) => {
            if (newValue) {
              const [x,y] = gunPositions[newValue];
              setGun(x,y);
            }
          }}
          value={"E2"}
          onClose={() => setListboxOpen(false)}
          onListboxOpenChange={() => setListboxOpen(true)}
        >
          <ScrollBox 
            dependency={listboxOpen}
            >
              <Option key={"E2"} value={"E2"}>
                <Box>
                  <p>E2</p>
                </Box>
              </Option>
              <Option key={"D3"} value={"D3"}>
                <Box>
                  <p>D3</p>
                </Box>
              </Option>
        </ScrollBox>
      </Select>
      </DataContainer>
      

      <Footer />
    </Box>
  )
}