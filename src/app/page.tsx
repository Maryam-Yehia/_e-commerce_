import { Suspense } from "react";
import Search from "./_components/search";
import { Categoryslider } from "./_components/slider"
import Products from "./products/products";
import Loading from "./loading";
import { getCategories } from "./service/categories";

export default async function Home() {
  const {data} = await getCategories();
  console.log(data);
  
  return (
    <>
    <div>
    {/* <Mainslider/> */}
      
    </div>
    <div className=" my-15 m-auto">
      <Categoryslider data={data} />
    </div>
    {/* <Image src="/public/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg" width={100} height={108} alt="Picture of the author"/> */}
    <div className="container m-auto mt-10">

      <Search />
      <Suspense fallback={<div className='flex flex-wrap gap-4 justify-center'><Loading /></div>}>
        <Products />
      </Suspense>
    </div>
    </>

  );
}
