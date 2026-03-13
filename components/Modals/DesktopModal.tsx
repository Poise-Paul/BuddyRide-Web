import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

const DownloadOnMobileModal = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-center text-2xl font-bold">
              📱 Download on Mobile
            </ModalHeader>
            <ModalBody className="text-center">
              <p className="text-gray-600">
                The BuddyRide app can only be downloaded on iOS or Android
                devices. Please open this page on your mobile phone to continue.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="w-full font-bold"
                onPress={onClose}
              >
                Got it
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DownloadOnMobileModal;
