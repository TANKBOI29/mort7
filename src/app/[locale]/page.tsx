'use client';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import React from 'react';
import { isMobile } from 'react-device-detect';

import Page from '@/components/layout/Page';
import Settings from '@/components/templates/Settings';
import Umami from '@/components/utils/Umami';
import useIsSmallScreen from '@/hooks/useIsSmallScreen';
import DesktopView from '@/views/Desktop';
import MobileView from '@/views/Mobile';




export default function Index() {
  const t = useTranslations();

  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <Head>
        <title>MTC Artillery</title>
        <meta content={t('meta.description')} name="description" />
        <meta
          content="Roblox, Artillery, Artillery Calculator, MTC, MTC4, Multicrew Tank Combat, Multicrew Tank Combat 4"
          name="keywords"
        />
      </Head>

      <Page>
        {isMobile || isSmallScreen ? <MobileView /> : <DesktopView />}
      </Page>

      <Umami />
      <Settings />
    </>
  );
}