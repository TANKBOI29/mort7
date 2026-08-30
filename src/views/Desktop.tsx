'use client';
import React from 'react';
import { Box, Typography } from '@mui/joy';
import { useTranslations } from 'next-intl';
import Footer from '@/components/organisms/Footer';
import ScrollBox from '@/components/molecules/ScrollBox';
import Divider from '@mui/joy/Divider';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import DataContainer from '@/components/atoms/DataContainer';

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
      
      <DataContainer
      
      >
        <Select
          listboxOpen={listboxOpen}
          value={'mortar'}
          variant="soft"
          onClose={() => setListboxOpen(false)}
          onListboxOpenChange={() => setListboxOpen(true)}
        >
          <ScrollBox 
            dependency={listboxOpen}
            >
              <Option key={"mortar"} value={"mortar"}>
                <p>Test</p>
              </Option>
              <Option key={"mortar2"} value={"mortar2"}>
                <p>Test2</p>
              </Option>
              <Option key={"mortar3"} value={"mortar3"}>
                <p>Test3</p>
              </Option>
              <Option key={"mortar4"} value={"mortar4"}>
                <p>Test4</p>
              </Option>
              <Option key={"mortar5"} value={"mortar5"}>
                <p>Test5</p>
              </Option>
        </ScrollBox>
      </Select>
      </DataContainer>
      

      <Footer />
    </Box>
  )
}