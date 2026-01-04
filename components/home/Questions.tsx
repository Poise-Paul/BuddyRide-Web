"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Alert } from "@heroui/alert";
import api from "@/utils/axios";
import axios from "axios";
import { ErrorResponse } from "@/types";

type Props = {};

const Questions = (_props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message.trim().length > 0 && email && name) {
      setHoldBtn(false);
    } else {
      setHoldBtn(true);
    }
  }, [message, email, name]);

  const [alertConfig, setAlertConfig] = useState<{
    isVisible: boolean;
    type: "success" | "danger";
    message: string;
  }>({
    isVisible: false,
    type: "success",
    message: "",
  });

  const sendMessage = async () => {
    // Basic validation
    if (!message.trim() || !email.trim() || !name.trim()) {
      setAlertConfig({
        isVisible: true,
        type: "danger",
        message: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);
    setHoldBtn(true);

    try {
      // 1. Using your internal endpoint
      const response = await api.post("api/users/contact/support", {
        title: "Website Inquiry",
        full_name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      if (response.data.status) {
        setAlertConfig({
          isVisible: true,
          type: "success",
          message: response.data.message || "Message sent successfully!",
        });
        // Clear all fields
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error: unknown) {
      let finalMessage = "Failed to send message. Please try again later.";

      if (axios.isAxiosError(error)) {
        // 2. Access the nested 'error' object as seen in your browser preview
        const serverError = error.response?.data?.error as ErrorResponse;
        finalMessage = serverError?.message || error.message;

        console.log(`Contact Support Error Code: ${serverError?.status_code}`);
      }

      setAlertConfig({
        isVisible: true,
        type: "danger",
        message: finalMessage,
      });
    } finally {
      setLoading(false);
      setHoldBtn(false);
      setTimeout(
        () => setAlertConfig((prev) => ({ ...prev, isVisible: false })),
        5000
      );
    }
  };

  return (
    <div className="my-20 flex items-center justify-center">
      {alertConfig.isVisible && (
        <div className="fixed top-5 z-50 w-full max-w-lg animate-appearance-in">
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
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-xl font-NeuePlakSemibold text-black/30">
          Write us a message
        </h1>

        <h1 className="sm:text-4xl text-2xl font-NeuePlakExtendedBlack text-primary">
          Have Any Questions?
        </h1>
        <h1 className="sm:text-4xl text-2xl">Don’t Hesitate To Contact Us</h1>

        <div className="my-2 gap-4 flex flex-col">
          <div className="flex gap-3 flex-row">
            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="bordered"
              classNames={{ inputWrapper: "bg-white drop-shadow-sm" }}
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="bordered"
              classNames={{ inputWrapper: "bg-white drop-shadow-sm" }}
            />
          </div>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            classNames={{
              inputWrapper: "bg-white drop-shadow-lg p-4",
              mainWrapper: "bg-white",
            }}
            minRows={8}
            placeholder="Send us a message"
            size="lg"
          />
        </div>

        <Button
          isDisabled={holdBtn}
          isLoading={loading}
          onPress={sendMessage}
          className={`w-fit bg-primary ${holdBtn ? "opacity-50 cursor-not-allowed" : ""} font-medium py-6 px-5 text-medium text-white`}
          radius="sm"
          startContent={<BsFillSendFill />}
          spinnerPlacement="end"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Questions;
