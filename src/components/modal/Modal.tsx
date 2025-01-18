import { ReactElement, ReactNode } from "react";

type ModalProps = {
  openModal: boolean;
  closeModal: () => object;
  children?: ReactElement | ReactNode;
};
const Modal = ({ openModal, closeModal, children }: ModalProps) => {
  const handleCloseModal = () => {
    closeModal();
  };

  if (openModal !== true) return null;
  return (
    <div
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full bg-white shadow-inner border-emerald-600 rounded-lg">
        <div className="flex justify-end py-2">
          <button onClick={handleCloseModal} className="">
            X
          </button>
        </div>

        <div className="">
          <div className="w-full p-3 justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
