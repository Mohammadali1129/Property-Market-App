import Hero from '@/components/Hero';
import InfoTypeBoxes from '@/components/infoTypeBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoTypeBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};
export default HomePage;