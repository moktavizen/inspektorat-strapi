import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownMobile({ items, color }) {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full items-center justify-between rounded-lg py-2 px-3 text-base leading-7 ${color} font-semibold h-10`}
          >
            Layanan
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-1">
            {items.data.map((item) => (
              <Disclosure.Button
                key={item.id}
                as="a"
                href={item.attributes.link}
                target="blank"
                className="block rounded-lg py-2 pl-6 pr-3 text-sm lg:text-lg leading-7 text-neutral800 hover:text-primary"
              >
                {item.attributes.nama}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default DropdownMobile;
