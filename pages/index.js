import Head from "next/head";

import Header from "../components/header";
import Hero from "../components/hero";
import AreaConatiner from "../components/area-conatiner";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import PropertyRentContainer from "../components/property-rent-container";
import Form from "../components/form";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover Your Perfect Home ;)" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <AreaConatiner />
        <FeatureContainer />
        <RentPropertiesContainer />
        <PropertyRentContainer />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Home;
