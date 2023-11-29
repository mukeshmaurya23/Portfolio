import React from "react";
import Modal from "./Modal";
import { useToggle } from "../context/toggle";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const onCLickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const { toggleMenuHandler } = useToggle();

  return (
    <>
      <nav
        class={`flex top-0 w-full z-10 bg-inherit  p-5 text-info justify-between`}
      >
        <div></div>
        <div class="flex items-center gap-5">
          <button
            disabled=""
            onClick={onCLickHandler}
            class="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-green text-white text-xs py-2 px-4"
          >
            Contact Me{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleMenuHandler}
            className=" block text-white md:hidden hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="flex lg:hidden cursor-pointer hover:text-white transition-colors"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
      <Modal isOpen={isModalOpen} onClose={onCLickHandler}>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={10}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button className="bg-green text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Button;
