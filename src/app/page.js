"use client"

import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const TabbedSection = dynamic(() => import('../components/TabbedSection'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <TabbedSection />
      <GetInTouch />
      <Footer />
    </>
  );
}