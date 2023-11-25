import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Sepet", href: "/basket" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [currentNavItem, setCurrentNavItem] = useState("Anasayfa");

  const handleNavigationClick = (name) => {
    setCurrentNavItem(name);
  };

const state = useSelector((store)=>store.basketReducer)
const total_count = state.basket.reduce(
  (total, item) => total + item.adet,0
)
useEffect(() => {
  // Sayfa yüklendiğinde URL kontrolü yaparak "Anasayfa" linkini vurgulu yap
  if (window.location.pathname === "/") {
    setCurrentNavItem("Anasayfa");
  } else {
    setCurrentNavItem("Sepet");
  }
}, []);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-50 top-0">
      <div className="mx-auto px-2 sm:px-4 lg:px-8 flex justify-between p-4 items-center">
         <Link 
         to={"/"}
         className="flex items-center">
         <h1 className="relative rounded-full bg-gray-800 p-1 text-white text-[3rem]">
            R-Thunk
          </h1>
         </Link>
     
        <div className="relative flex h-16 items-center justify-end">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start mr-16">
            <div className="sm:ml-4 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    to={item.href}  // Link component'e uygun 'to' prop'u eklenmiştir
                    key={item.name}
                    onClick={() => handleNavigationClick(item.name)}
                    className={classNames(
                      currentNavItem === item.name
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2  text-2xl font-medium",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-current={
                      currentNavItem === "Notifications" ? "page" : undefined
                    }
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6 " aria-hidden="true" />
                    <span className="absolute top-[-10px] right-[-5px] inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      {total_count}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
