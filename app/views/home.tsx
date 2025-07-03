import Header from "~/components/Header";
import HeroBanner from "~/components/HeroBanner";
import NewArrivals from "~/components/NewArrivals";
import ProductCard from "~/components/ProductCard";
import ProductGrid from "~/components/ProductGrid";
import PromoBanners from "~/components/PromoBanners";



const Home = () => {
  return (
    <>
    <Header />
      <HeroBanner />
      <NewArrivals />
      <ProductGrid />
      <ProductCard/>
      <PromoBanners />
    </>
  )
}

export default Home;