import Page from '@/components/layout/Page'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'

export default function MobileView() {
    return (
    <>
        <Head>
            <title>No Mobile Support</title>
            <meta name="description" content="No Mobile Support" />
            <meta name="keywords" content="No Mobile Support" />
        </Head>

        <Page>
            <Box>
                <h1 className='align-center'>
                    No Mobile Support
                </h1>
            </Box>
        </Page>
    </>
      
    )
  }