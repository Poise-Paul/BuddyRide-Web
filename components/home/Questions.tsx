import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { BsFillSendFill } from "react-icons/bs";
import React from "react";

type Props = {};

const Questions = (_props: Props) => {
  return (
    <div className="my-20 flex items-center justify-center">
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
          className="w-fit bg-primary font-medium py-6 px-5 text-medium text-white"
          radius="sm"
          startContent={<BsFillSendFill />}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Questions;
