import { Avatar } from "flowbite-react";
import { BsMessenger } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div style={{width:"25%"}}>
        <h2 className="text--500-blue font-bold" style={{color: "blue", fontSize: "35px"}}>facebook</h2>
      </div>
      <div style={{width:"50%"}}>
        <div class="relative w-96 bg-orange-700">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class=" h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="w-full block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Facebook"
            required
          />
        </div>
      </div>
      <div style={{width:"25%"}}>
        <div className="flex flex-wrap gap-2 justify-end">
          <div className="text-2xl message">
            <BsMessenger title="Message" />
          </div>
          <div className="text-2xl message">
            <IoMdNotifications title="Notification" />
          </div>
          <div className="flex flex-wrap gap-2 cursor-pointer">
            <Avatar
              title="Account"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
              status="busy"
              statusPosition="top-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
