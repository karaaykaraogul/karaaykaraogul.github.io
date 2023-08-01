import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RotateButton from "./RotateButton";
import { Link } from "react-router-dom";

const navigation = [
  { name: "MAIN", href: "main", current: false },
  { name: "PORTFOLIO", href: "portfolio", current: false },
  { name: "CONTACT", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-screen z-50 bg-black sm:bg-retro-dark-blue"
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
                <div className="flex rounded-md px-10 text-white items-center bg-transparent sm:bg-black">
                  <RotateButton />
                  <p className="text-4xl p-3 sm:p-0">Karaay Karaoğul</p>
                </div>
                <div className="flex-1 hidden sm:grid text-4xl">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-retro-dark-pink hover:text-white",
                          "rounded-md px-3 py-2 font-medium text-4xl"
                        )}
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
                    onClick={close}
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
