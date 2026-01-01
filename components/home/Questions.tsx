"use client";

import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Alert } from "@heroui/alert";

type Props = {};

const Questions = (_props: Props) => {
  const [message, setMessage] = useState("");
  const [holdBtn, setHoldBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message.trim().length > 0) {
      setHoldBtn(false);
    } else {
      setHoldBtn(true);
    }
  }, [message]);

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
    setLoading(true);
    if (!message.trim()) return;

    setHoldBtn(true);

    // PostMail JSON endpoint data structure
    const data = {
      access_token: "g5ywtqwas4iu8kife2vobhc5",
      subject: "BuddyRide Website Inquiry",
      text: message,
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
        setMessage("");
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
        <h1 className="text-xl font-semibold text-black/30">
          Write us a message
        </h1>

        <h1 className="sm:text-4xl text-2xl font-black text-primary">
          Have Any Questions?
        </h1>
        <h1 className="sm:text-4xl text-2xl">Don’t Hesitate To Contact Us</h1>

        <div className="my-2">
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
