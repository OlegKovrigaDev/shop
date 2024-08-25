import { Modal } from "react-responsive-modal";

export const ModalPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={setOpen}
      center
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
        modal:
          "bg-white absolute top-[50%] left-[50%] w-[800px] z-30 transform -translate-x-1/2 -translate-y-1/2",
        overlay: "absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-20",
      }}
      animationDuration={500}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    </Modal>
  );
};
