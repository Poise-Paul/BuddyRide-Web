"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import React from "react";

type ComingSoonModalProps = { isOpen: boolean; onClose?: () => void };

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  const { onOpenChange } = useDisclosure();
  const [email, setEmail] = React.useState("");

  const handleJoinWaitlist = () => {
    // Here you can handle the email submission logic
    console.log("User email:", email);
    // e.g., send to backend API or service
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Join Waitlist</Button> */}
      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col font-bold text-2xl gap-1 text-center">
                🚀 App Coming Soon!
              </ModalHeader>
              <ModalBody>
                <p className="text-center">
                  We’re working hard to bring you something amazing. Be the
                  first to know when we go live by joining our waiting list.
                </p>
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-4"
                />
              </ModalBody>
              <ModalFooter className="flex flex-col justify-center">
                <Button
                  color="primary"
                  onPress={() => {
                    handleJoinWaitlist();
                    onClose();
                  }}
                >
                  Join Waitlist
                </Button>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
