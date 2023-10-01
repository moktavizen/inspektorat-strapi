import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown({ items, color }) {
  return (
    <Menu
      as="div"
      className="relative text-neutral800 hover:text-primary px-3 py-2 text-lg"
    >
      <div>
        <Menu.Button
          className={` flex items-center gap-x-1 text-sm lg:text-lg leading-6 ${color} font-semibold`}
        >
          Layanan
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
        <Menu.Items className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.data.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <a
                    href={item.attributes.link}
                    target="blank"
                    className={classNames(
                      active ? "bg-gray-50 text-primary" : "text-neutral800",
                      "block px-4 py-2 text-lg"
                    )}
                  >
                    <li className="">{item.attributes.nama}</li>
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
