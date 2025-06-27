import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { BsFillSendFill } from "react-icons/bs";
import React from "react";

type Props = {};

const Questions = (props: Props) => {
  return (
    <div className="flex my-20 justify-center items-center">
      <div className="flex flex-col text-center gap-2">
        <h1 className="font-semibold text-xl text-black/30">
          Write us a message
        </h1>
        <h1 className="font-black text-4xl text-primary">
          Have Any Questions?
        </h1>
        <h1 className="text-4xl">Don’t Hesitate To Contact Us</h1>
        <div className="my-2">
          <Textarea
            classNames={{
              mainWrapper: "bg-white",
              inputWrapper: "bg-white drop-shadow-lg",
            }}
            size="lg"
            minRows={8}
            placeholder="Send us a message"
          />
        </div>

        <Button
          radius="sm"
          startContent={<BsFillSendFill />}
          className="bg-primary w-fit text-white"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Questions;
