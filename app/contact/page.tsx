"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Instagram,
  Twitter,
} from "lucide-react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Alert } from "@heroui/alert";
import Link from "next/link";

const ContactUsPage = () => {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [holdBtn, setHoldBtn] = useState(true);

  const [alertConfig, setAlertConfig] = useState<{
    isVisible: boolean;
    type: "success" | "danger";
    message: string;
  }>({
    isVisible: false,
    type: "success",
    message: "",
  });

  const handleSendMessage = async () => {
    if (!message || !email) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("access_token", "g5ywtqwas4iu8kife2vobhc5");
    formData.append("subject", `New BuddyRide Inquiry from ${email}`);
    formData.append("text", message);

    try {
      await fetch("https://postmail.invotes.com/send", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setAlertConfig({
        isVisible: true,
        type: "success",
        message: "Message sent! Our team will get back to you shortly.",
      });
      setMessage("");
      setEmail("");
    } catch (error) {
      setAlertConfig({
        isVisible: true,
        type: "danger",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setFullName("");
      setMessage("");
      setEmail("");
      setLoading(false);
      setTimeout(
        () => setAlertConfig({ ...alertConfig, isVisible: false }),
        5000
      );
    }
  };

  useEffect(() => {
    if (email && message && fullName) {
      setHoldBtn(false);
    } else {
      setHoldBtn(true);
    }
  }, [fullName, email, message]);

  return (
    <div className="bg-[#F3F5F7] min-h-screen w-full py-20 px-6">
      {/* Centered Alert */}
      {alertConfig.isVisible && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-xl animate-appearance-in">
          <Alert
            color={alertConfig.type}
            title={alertConfig.type === "success" ? "Success" : "Error"}
            description={alertConfig.message}
            variant="faded"
            onClose={() => setAlertConfig({ ...alertConfig, isVisible: false })}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-NeuePlakBold text-black mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-500 text-lg font-NeuePlakRegular">
            Have questions about BuddyRide in Nigeria or the UK? We're here to
            help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1. Contact Info Cards */}
          <div className="flex flex-col gap-4">
            <Card className="border-none shadow-sm">
              <CardBody className="flex flex-row items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-NeuePlakBold uppercase">
                    Email Us
                  </p>
                  <Link
                    href="mailto:support@buddyridenow.com"
                    className="font-NeuePlakSemibold text-primary hover:underline"
                  >
                    support@buddyridenow.com
                  </Link>
                </div>
              </CardBody>
            </Card>

            <Card className="border-none shadow-sm">
              <CardBody className="flex flex-row items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-NeuePlakBold uppercase">
                    Call Us
                  </p>
                  <Link
                    href="tel:+447359592718"
                    className="font-NeuePlakSemibold text-primary transition-colors"
                  >
                    +44 7359 592718
                  </Link>
                </div>
              </CardBody>
            </Card>

            <Card className="border-none shadow-sm">
              <CardBody className="flex flex-row items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-NeuePlakBold uppercase">
                    Socials
                  </p>
                  <div className="flex gap-3 mt-1">
                    <Instagram
                      onClick={() =>
                        alert("We'll let you know when our socials are up 😊")
                      }
                      size={18}
                      className="text-gray-600 cursor-pointer hover:text-primary"
                    />
                    <Twitter
                      onClick={() =>
                        alert("We'll let you know when our socials are up 😊")
                      }
                      size={18}
                      className="text-gray-600 cursor-pointer hover:text-primary"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* 2. Contact Form */}
          <Card className="md:col-span-2 border-none shadow-lg p-4">
            <CardBody className="flex flex-col gap-6">
              <h3 className="text-2xl font-NeuePlakBold">Send us a Message</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  classNames={{
                    // This targets the border of the input box when focused
                    inputWrapper: "focus-within:!border-[#1A20EA]",
                    label: "font-NeuePlakRegular",
                  }}
                  variant="bordered"
                  className="font-NeuePlakRegular"
                />
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  classNames={{
                    // This targets the border of the input box when focused
                    inputWrapper: "focus-within:!border-[#1A20EA]",
                    label: "font-NeuePlakRegular",
                  }}
                  className="font-NeuePlakRegular"
                />
              </div>
              <Textarea
                label="Message"
                placeholder="How can we help you?"
                variant="bordered"
                minRows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                classNames={{
                  // This targets the border of the input box when focused
                  inputWrapper: "focus-within:!border-[#1A20EA]",
                  label: "font-NeuePlakRegular",
                }}
                className="font-NeuePlakRegular"
              />
              <Button
                color="primary"
                isDisabled={holdBtn}
                className={`font-NeuePlakBold ${holdBtn} h-14 text-lg`}
                endContent={!loading && <Send size={20} />}
                isLoading={loading}
                spinnerPlacement="end"
                onPress={handleSendMessage}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
