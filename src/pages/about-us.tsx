import Head from 'next/head';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export default function AboutPage() {
  return <>
  <Head>
        <title>Sintec Nextjs Starter Template</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader />
      <About />

      <Testimonials />
  
      <Footer />
  </>
}
