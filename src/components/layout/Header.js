import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/logo/logo2.svg";
import { currencies } from "../../constants/currencies";
import CustomSelect from "../blocks/CustomSelect";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const [toggleShow, setToggleShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeSelectedCurrency = (value) => {
    setSelectedCurrency(value);
    setToggleShow(false);
  };

  const handleToggleCurrencyShow = (e) => {
    setToggleShow(!toggleShow);
  };
  return (
    <header className="relative bg-white text-temp-primary">
      <div class="max-w-full mx-auto">
        <div className="pt-5 pb-8 flex justify-between items-center md:justify-start md:space-x-10">
          <div className="sm:mt-3 flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="sr-only">TempOwn</span>
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
            </Link>
          </div>

          <div class="-mr-2 -my-2 flex items-center md:hidden">
            <CustomSelect
              value={selectedCurrency}
              toggleShow={toggleShow}
              onClick={handleToggleCurrencyShow}
            >
              <>
                {currencies.map((currency) => (
                  <li
                    key={currency.id}
                    onClick={() => handleChangeSelectedCurrency(currency.name)}
                  >
                    {currency.name}
                  </li>
                ))}
              </>
            </CustomSelect>
            <button
              type="button"
              class="bg-white rounded-md ml-4 p-2 inline-flex items-center justify-center text-temp-primary hover:bg-gray-100 focus:outline-none "
              onClick={() => setIsOpen(true)}
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="mt-4 md:mr-4 relative whitespace-nowrap inline-flex items-center justify-center">
              <CustomSelect
                value={selectedCurrency}
                toggleShow={toggleShow}
                onClick={handleToggleCurrencyShow}
              >
                <>
                  {currencies.map((currency) => (
                    <li
                      key={currency.id}
                      onClick={() =>
                        handleChangeSelectedCurrency(currency.name)
                      }
                    >
                      {currency.name}
                    </li>
                  ))}
                </>
              </CustomSelect>
            </div>

            <div className="mt-4 md:block">
              <Link
                to="/signin"
                className="ml-8 whitespace-nowrap text-base font-bold text-temp-primary"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-4 md:block">
              <Link
                to="/signup"
                className="ml-8 bg-temp-primary whitespace-nowrap inline-flex items-center justify-center rounded text-temp-white font-bold px-6 py-3"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!--
      Mobile menu, show/hide based on mobile menu state.
    --> */}
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            class="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src={Logo} alt="Workflow" />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <span class="sr-only">Close menu</span>

                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div>
                  <Link
                    to="/signup"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-temp-primary"
                  >
                    Get Started
                  </Link>
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Existing member?{" "}
                    <Link
                      to="/signin"
                      class="text-base font-bold text-temp-green"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
