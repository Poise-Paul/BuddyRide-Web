import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

const SocialsComingSoonModal = ({ isOpen, onOpenChange }: Props) => {
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
            <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-NeuePlakBold">
              📲 Get Ready to Follow!
            </ModalHeader>
            <ModalBody className="text-center">
              <div className="flex justify-center gap-6 my-4">
                <FaFacebook className="text-primary text-4xl opacity-50" />
                <FaInstagram className="text-primary text-4xl opacity-50" />
                <FaTwitter className="text-primary text-4xl opacity-50" />
              </div>
              <p className="font-NeuePlakRegular text-gray-600">
                Our social media pages are currently under construction. We'll
                announce our official handles very soon!
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm font-NeuePlakSemibold text-primary">
                  In the meantime, join our waitlist to be the first to know
                  when we go live.
                </p>
              </div>
            </ModalBody>
            <ModalFooter className="flex flex-col">
              <Button
                color="primary"
                className="w-full font-NeuePlakBold"
                onPress={onClose}
              >
                Got it, thanks!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SocialsComingSoonModal;
