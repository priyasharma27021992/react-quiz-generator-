import { ReactElement, ReactNode, useCallback, useEffect, useRef } from "react";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children?: ReactElement | ReactNode;
};
const Modal = ({ openModal, closeModal, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    closeModal();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, openModal]);

  if (openModal !== true) return null;
  return (
    <div
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
      role="dialog"
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full bg-white shadow-inner border-emerald-600 rounded-lg"
        ref={modalRef}
      >
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
