import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo-text.svg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import DropdownMobile from "./DropdownMobile";

const navigation = [
  { name: "Beranda", to: "/" },
  { name: "Dokumen", to: "/documents" },
  { name: "Kegiatan", to: "/all-post" },
  { name: "Profil", to: "/profile" },
];

export default function Nav({ services }) {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 top-0 shadow backdrop-blur-xl bg-white/80"
    >
      {({ open }) => (
        <>
          <div className="my-container">
            <div className="relat ive flex h-16 items-center justify-between">
              <div className="flex lg:flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Inspektorat Gresik"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="text-neutral800 hover:text-primary px-3 py-2 text-sm lg:text-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Dropdown items={services} color="text-secondary" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md text-neutral800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Buka menu utama</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="my-container space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link to={item.to} key={item.name}>
                  <Disclosure.Button className="text-neutral800 hover:text-primary block px-3 py-2 text-base ">
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
              <DropdownMobile items={services} color="text-secondary" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
