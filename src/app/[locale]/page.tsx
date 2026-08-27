import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

import IndexClient from './IndexClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: 'Mortar Calculator',
    description: t('description'),
    keywords: 'Roblox, Mortar, Mortar Calculator, WGRV, USAR, Zans USAR, Zanance',
    icons: {
      icon: '/images/logo-256.png'
    }
  };
}

export default function Page() {
  return <IndexClient />;
}