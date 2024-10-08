import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Breadcrumb from "../Breadcrumb";
import ItemList from "@/components/HotDealsSlider";
import CategoryList from "@/components/CategoryList";
import MostBoughtSlider from "@/components/MostBoughtSlider/intex";
// import axios from 'axios';

export default function ImageSliderWithSidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar></Sidebar>
      {/* Image Slider */}
      <div className="w-full relative">
        <Banner></Banner>
        <div className="h-4/5">
        {/* <Breadcrumb></Breadcrumb> */}
        <CategoryList></CategoryList>
        <ItemList listHeader="Hot Deals"></ItemList>
        <MostBoughtSlider listHeader="Most Boughts on RentWise!"></MostBoughtSlider> 
        </div>
      </div>
    </div>
  );
}
