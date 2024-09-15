import { navItems } from '@/data';

import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import dynamic from 'next/dynamic';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

const About = dynamic(() => import('../components/About'), {
  ssr: false,
});

const Home = () => {
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
