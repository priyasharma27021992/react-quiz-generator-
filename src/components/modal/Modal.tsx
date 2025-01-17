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
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

export { Modal };
