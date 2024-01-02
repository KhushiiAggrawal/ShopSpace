import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "../constants/Transition";
import MobileBottonNav from "../components/MobileBottonNav";
import heart from "../assets/images/heart.gif";
import heartSearch from "../assets/images/heart-search.gif";
import womenmodel from "../assets/images/womenmodel.png";
import { Link } from "react-router-dom";

const Wishlist = ({ setProgress }) => {
  // Top Loading Bar dummy progress in future we will update the progress based on API calls succession or failure
  useEffect(() => {
    // callback function to call when the event triggers
    const onPageLoad = () => {
      setProgress(100);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("load", onPageLoad);
        setProgress(0);
      };
    }
  }, []);

  // Product Data

  let [wishlist, setWishlist] = useState(new Array(10).fill(0));
  const user = true;
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <>
          <motion.div
            variants={pageTransitionVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full absolute"
          >
            <div className="flex flex-col w-full sm:p-8 ">
              <div>
                {/* Bread crumbs */}

                <nav className="hidden sm:flex " aria-label="Breadcrumb">
                  <ol className="inline-flex md:space-x-1  rtl:space-x-reverse text-sm md:text-xl">
                    <li className="inline-flex ">
                      <Link
                        to="/"
                        className="
                       inline-flex items-center   text-gray-800 font-bold hover:text-blue-600 dark:text-gray-800 hover:underline"
                      >
                        <svg
                          className="w-5 h-5 max-sm:h-3 max-sm:w-3 me-2.5 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="rtl:rotate-180 w-3 h-3 text-gray-800 mx-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="ms-1 font-bold text-gray-800 md:ms-2 ">
                          Wishlist
                        </span>
                        <img
                          className="h-10 w-10 ms-3"
                          src={heartSearch}
                          alt=""
                        />
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col max-sm:gap-2 h-24 w-full justify-center items-center max-sm:m-2 sm:mb-10 text-2xl sm:text-6xl bold">
                  <img
                    className="h-12 w-12 sm:h-16 sm:w-16"
                    src={heart}
                    alt=""
                  />
                  <div>My wishlist</div>
                </div>
                <hr className=" border w-full bg-gray-50 "></hr>
                {/* Nav */}
                <div className="flex justify-between max-sm:justify-center items-center my-5 px-5  max-sm:gap-5 max-sm:flex-col">
                  <strong className="max-sm:hidden font-[Montserrat] ">
                    Space Shop
                  </strong>
                  {/* Search */}
                  <div className="flex gap-5">
                    <div className="search flex gap-2 rounded-3xl p-2 px-3 w-[20rem] bg-[#f4f4f4] max-sm:w-[14rem]">
                      <i className="ri-search-line  cursor-pointer hover:text-blue-500"></i>
                      <input
                        type="text"
                        placeholder="Search.."
                        className="w-4/5 active:border-none bg-transparent focus:border-none outline-none"
                      />
                    </div>
                    <div className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                      <i className="ri-user-line"></i>
                    </div>
                    <div className="flex justify-center items-center bg-[#f4f4f4] px-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all">
                      <i className="ri-shopping-cart-2-line"></i>
                    </div>
                  </div>
                </div>
                <hr className="border w-full bg-gray-100"></hr>
              </div>
              <div className="flex justify-center ">
                <div className="flex flex-wrap gap-10 p-10 mb-10  overflow-y-scroll">
                  {wishlist.map((i, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 p-1 cursor-pointer"
                    >
                      <div className="h-[15rem] w-[15rem] max-sm:h-full max-sm:w-full  bg-[#F5F5F7]  rounded-lg relative overflow-hidden max-sm:justify-center">
                        <img
                          className="h-full w-full  object-cover rounded-md object-center"
                          src={womenmodel}
                          alt="img"
                        />
                        <div className="hover:bg-white transition-all cursor-pointer absolute top-5 left-5 bg-red-300 w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
                          <i className="p-0 text-lg ri-heart-3-line"></i>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <strong>Formal Dress </strong>
                          <p className="text-sm">Clothes</p>
                        </div>
                        <p className="bg-[#F5F5F7] px-2 py-1 rounded-lg">
                          ₹500.00
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <MobileBottonNav />
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Wishlist;
