import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RotateButton from "./RotateButton";
import { Link } from "react-router-dom";
import { useState } from "react";

// const navigation = [
//   { name: "MAIN", href: "main", current: true },
//   { name: "PORTFOLIO", href: "portfolio", current: false },
//   { name: "CONTACT", href: "contact", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [navigation, setNavigation] = useState([
    { name: "MAIN", href: "main", current: true },
    { name: "PORTFOLIO", href: "portfolio", current: false },
    { name: "CONTACT", href: "contact", current: false },
  ]);
  return (
    <Disclosure
      as="nav"
      className="fixed w-screen z-50 bg-black sm:bg-header-primary sm:shadow-2xl sm:shadow-black/50"
    >
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-wrap md:h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className=" flex md:h-16 rounded-r-md px-12 justify-items-center text-white items-center bg-transparent sm:bg-black font-medium">
                  <RotateButton />
                  <p className="text-4xl p-3 sm:p-0">Karaay Karaoğul</p>
                </div>
                <div className="flex-1 hidden sm:grid text-4xl">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "transition-all duration-200 bg-gray-900 text-white"
                            : "transition-all duration-200 hover:bg-side-primary hover:text-white",
                          "rounded-md px-3 py-3 font-medium text-4xl "
                        )}
                        onClick={() => {
                          const updatedNavigation = navigation.map((x) => ({
                            ...x,
                            current: x.name === item.name,
                          }));
                          setNavigation(updatedNavigation);
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    as="a"
                    onClick={() => {
                      const updatedNavigation = navigation.map((x) => ({
                        ...x,
                        current: x.name === item.name,
                      }));
                      setNavigation(updatedNavigation);
                      close();
                    }}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white text-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white text-center",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
