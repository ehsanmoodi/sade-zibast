import { Dialog, Transition } from "@headlessui/react";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Close } from "../../icons";
import Button from "../Button";

const MapWithNoSSR = dynamic(() => import("../Map"), {
  ssr: false,
});

import type { MapModalProps } from "./types";

const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  toggleModal,
  position,
  setPosition,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="dialog" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="dialog__bg" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dialog__panel map-modal">
                  <Dialog.Title
                    as="h3"
                    className="dialog__panel__title map-modal__header"
                  >
                    <button onClick={toggleModal}>
                      <Close />
                    </button>
                    انتخاب آدرس
                  </Dialog.Title>
                  <div className="map-modal__body">
                    <MapWithNoSSR
                      fullscreen={true}
                      draggableMarker
                      activeSearch
                      position={position}
                      setPosition={setPosition}
                    />
                    <Button
                      onClick={toggleModal}
                      classes="map-modal__body__submit"
                    >
                      ثبت و افزودن جزییات
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MapModal;
