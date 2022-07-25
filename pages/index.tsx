import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import IconCart from "./components/IconCart";
const ProductPreview: NextPage = () => {
  return (
    <section className="bg-cream flex min-h-screen justify-center">
      <div className="mx-4 mt-7 mb-5 max-w-[345px] xl:max-w-[600px] xl:hidden">
        <div className="xl:hidden">
          <Image
            className="rounded-t-lg xl:hidden"
            src="/images/product-preview/product-preview-mobile.png"
            alt="Vercel Logo"
            height={240}
            width={343}
            loading="eager"
          />
        </div>
        <div className="bg-white rounded-b-lg pb-6 xl:hidden">
          <div className="mx-6 -mt-2">
            <h2 className="uppercase pt-4 font-montserrat font-normal leading-4 tracking-[5px] text-xs text-aurometal">
              PERFUME
            </h2>
            <h2 className="mt-3 font-fraunces text-3xl font-bold text-gunmetal leading-8">
              Gabrielle Essence Eau De Parfum
            </h2>
            <p className="mt-4 font-montserrat text-sm  leading-6 font-medium text-aurometal">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <h2 className="text-deepaquamarine mt-6 font-fraunces font-bold text-[32px]">
              $149.99
              <span className="font-montserrat font-normal line-through text-aurometal ml-6 text-[13px] text-center inline-block align-middle">
                $169.99
              </span>
            </h2>
            <button className="bg-deepaquamarine h-12 w-72  mt-5 rounded-lg text-white text-[14px] font-montserrat font-bold tracking-wide flex items-center justify-center space-x-2 active:bg-deepaquamarinedark">
              <div>
                <IconCart />
              </div>
              <div>Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex xl:mx-auto xl:max-h-[450px]  xl:mt-44 xl:bg-white rounded-lg mb-10">
        <div>
          <Image
            className="rounded-l-lg xl:hidden"
            src="/images/product-preview/product-preview-desktop.png"
            alt="Vercel Logo"
            height={450}
            width={300}
            loading="eager"
          />
        </div>
        <div className="xl:max-h-[450px] xl:max-w-[300px] mx-8">
          <h2 className="uppercase mb-5 pt-[22px] font-montserrat font-normal leading-4 tracking-[5px] text-xs text-aurometal">
            PERFUME
          </h2>
          <h2 className="mb-5 font-fraunces text-3xl font-bold text-gunmetal leading-8 h-24 w-60">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="mb-7 font-montserrat text-sm leading-6 font-medium text-aurometal h-24 w-60">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <h2 className="text-deepaquamarine mb-7 font-fraunces font-bold text-[32px]">
            $149.99
            <span className="font-montserrat font-normal line-through text-aurometal ml-6 text-[13px] text-center inline-block align-middle">
              $169.99
            </span>
          </h2>
          <button className="bg-deepaquamarine h-12 w-60 mb-7 rounded-lg text-white text-[14px] font-montserrat font-semibold tracking-wide flex items-center justify-center space-x-2 active:bg-deepaquamarinedark">
            <div>
              <IconCart />
            </div>
            <div>Add to Cart</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
