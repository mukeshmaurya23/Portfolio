import React from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 px-2 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-full md:w-[500px] md:h-[500px] rounded-md">
              <div className="flex justify-end px-4 py-4">
                <button onClick={onClose}>
                  <RxCross1 className="text-gray-400" />
                </button>
              </div>
              <div className="px-4 py-4">{children}</div>
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default Modal;
