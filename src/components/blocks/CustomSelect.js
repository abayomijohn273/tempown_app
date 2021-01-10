import { Transition } from "@headlessui/react";
import React from "react";

const CustomSelect = (props) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        class="custom-select inline-flex justify-center w-full rounded-lg border border-temp-green-light px-6 py-3 bg-white font-bold  focus:outline-none focus:border-temp-green-light focus:border"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {props.value}
      </button>

      <Transition
        show={props.toggleShow}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-16 left-0 rounded-lg p-3 bg-temp-white custom-select-list w-full">
          <ul className="space-y-3 py-3 px-3 text-temp-primary cursor-pointer">
            {props.children}
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default CustomSelect;
