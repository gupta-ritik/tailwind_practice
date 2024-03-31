// import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PolpularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";
const App = () => {
  return (
    <main className='relative'>
      <Nav></Nav>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero></Hero>
      </section>
      <section className='padding'>
        <PolpularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;