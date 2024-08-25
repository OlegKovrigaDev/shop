import { Modal } from "react-responsive-modal";

export const ModalPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (name: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
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
