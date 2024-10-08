import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Breadcrumb from "../Breadcrumb";
import ItemList from "@/components/HotDealsSlider";
import CategoryList from "@/components/CategoryList";
import MostBoughtSlider from "@/components/MostBoughtSlider/intex";
import Feature from "@/components/Pages/home/Feature";
import Filters from "@/components/Pages/home/Filters";
// import axios from 'axios';

export default function ImageSliderWithSidebar() {
  return (
    <>
      <div className="flex-col mt-24 p-4 justify-start mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb></Breadcrumb>
        <Feature></Feature>
        <Filters></Filters>
        <ItemList></ItemList>

        {/* <Sidebar></Sidebar> 
      <div className="w-full relative">
        <Banner></Banner>
        <div className="h-4/5">
          <Breadcrumb></Breadcrumb>
          <CategoryList></CategoryList>
          <ItemList listHeader="Hot Deals"></ItemList>
          <MostBoughtSlider listHeader="Most Boughts on RentWise!"></MostBoughtSlider>
        </div>
      </div> */}
      </div>
    </>
  );
}
