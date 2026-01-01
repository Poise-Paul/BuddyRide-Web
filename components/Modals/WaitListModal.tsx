"use client";
import { Alert } from "@heroui/alert";
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
import React, { useEffect, useMemo, useState } from "react";

type ComingSoonModalProps = { isOpen: boolean; onClose?: () => void };

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  const { onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  const [alertConfig, setAlertConfig] = useState<{
    isVisible: boolean;
    type: "success" | "danger";
    message: string;
  }>({
    isVisible: false,
    type: "success",
    message: "",
  });

  useEffect(() => {
    setHoldBtn(!email);
  }, [email]);

  const handleJoinWaitlist = async () => {
    setLoading(true);
    if (!email.trim()) return;

    setHoldBtn(true);

    // PostMail JSON endpoint data structure
    const data = {
      access_token: "g5ywtqwas4iu8kife2vobhc5",
      subject: "BuddyRide App WaitList",
      text: email,
    };

    try {
      const response = await fetch("https://postmail.invotes.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setAlertConfig({
          isVisible: true,
          type: "success",
          message: "Message sent successfully!",
        });
        setEmail("");
      } else {
        // This will now catch the "send" errors shown in your console
        throw new Error("Server rejected the email");
      }
    } catch (error) {
      setAlertConfig({
        isVisible: true,
        type: "danger",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      onClose && onClose();
      setLoading(false);
      setHoldBtn(false);
      setTimeout(
        () => setAlertConfig((prev) => ({ ...prev, isVisible: false })),
        5000
      );
    }
  };

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <>
      {/* <Button onPress={onOpen}>Join Waitlist</Button> */}
      {alertConfig.isVisible && (
        <div className="fixed top-0 z-50 w-full left-0 animate-appearance-in">
          <Alert
            color={alertConfig.type}
            title={alertConfig.type === "success" ? "Success" : "Error"}
            description={alertConfig.message}
            variant="faded"
            onClose={() =>
              setAlertConfig((prev) => ({ ...prev, isVisible: false }))
            }
          />
        </div>
      )}
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
                  isInvalid={isInvalid}
                  errorMessage={
                    isInvalid && "Please enter a valid email address"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-4"
                />
              </ModalBody>
              <ModalFooter className="flex flex-col justify-center">
                <Button
                  color="primary"
                  isLoading={loading}
                  isDisabled={holdBtn || isInvalid}
                  className={`${holdBtn && "cursor-not-allowed opacity-30"}`}
                  spinnerPlacement="end"
                  onPress={handleJoinWaitlist}
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
