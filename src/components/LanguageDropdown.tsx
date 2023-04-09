import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const setLocaleCookie = (locale: "en" | "zh") => {
  document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
};

export const LanguageDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full items-center px-1">
          <div className="relative w-6 md:w-9 aspect-square">
            <Image src="/language.svg" alt="Language" fill />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 border-4 border-black bg-primary left-1/2 transform -translate-x-1/2 mt-2 w-24 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link href="/" locale="en">
                <button
                  className={`${
                    active ? "text-yellow-400" : "text-white"
                  }  flex justify-center w-full rounded-md px-2 py-2 text-sm `}
                  onClick={() => setLocaleCookie("en")}
                >
                  ENGLISH
                </button>
              </Link>
            )}
          </Menu.Item>
          <div className="w-2/3 h-px bg-white mx-auto"></div>
          <Menu.Item>
            {({ active }) => (
              <Link href="/zh" locale="zh">
                <button
                  className={`${
                    active ? "text-yellow-400" : "text-white"
                  } flex justify-center w-full rounded-md px-2 py-2 text-sm`}
                  onClick={() => setLocaleCookie("zh")}
                >
                  简体中文
                </button>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
