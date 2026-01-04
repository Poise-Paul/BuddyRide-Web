"use client";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import React, { useEffect, useMemo, useState } from "react";
import api from "@/utils/axios";
import { ErrorResponse } from "@/types";

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
    // Validate presence of email before starting
    if (!email.trim()) return;

    setLoading(true);
    setHoldBtn(true);

    try {
      // Axios handles stringifying and headers automatically
      const response = await api.post("api/users/wait-list/add", {
        email: `${email.trim()}`,
      });

      const result = response.data;

      if (result.status) {
        setAlertConfig({
          isVisible: true,
          type: "success",
          message: "Success! You've been added.",
        });
        setEmail("");
      } else {
        // Handle cases where the server returns status: false
        throw new Error(result.message || "Unable to join waitlist.");
      }
    } catch (error: unknown) {
      let finalMessage = "Connection failed. Please try again.";

      if (axios.isAxiosError(error)) {
        // 1. Access the nested 'error' object from the response data
        const serverError = error.response?.data?.error as ErrorResponse;

        // 2. Use the nested message or fall back to Axios default
        finalMessage = serverError?.message || error.message;

        // 3. Log the nested status code
        console.log(`Error Code: ${serverError?.status_code}`);
      } else if (error instanceof Error) {
        finalMessage = error.message;
      }

      console.log("Message ->", finalMessage);

      setAlertConfig({
        isVisible: true,
        type: "danger",
        message: finalMessage,
      });
    } finally {
      // Cleanup UI states
      onClose && onClose();
      setLoading(false);
      setHoldBtn(false);

      // Auto-hide alert after 5 seconds
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
