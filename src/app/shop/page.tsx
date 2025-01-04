import Header from "@/app/components/header";
import Shop from "@/app/components/shop";
import ShopProducts from "@/app/components/shopProducts";

import React from "react";

function ShopPage() {
  return (
    <>
      <div>
        <Header />
        <Shop />
        <ShopProducts />
      </div>{" "}
    </>
  );
}

export default ShopPage;
