"use client";

import ComingSoonModal from "@/components/Modals/WaitListModal";
import { useMemo, useState } from "react";
import FAQ, { accordionList } from "@/components/home/Faq";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { SearchIcon } from "@/components/icons";

const FaqPage = () => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = useMemo(() => {
    return accordionList.filter(
      (item) =>
        item.quest.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof item.ans === "string" &&
          item.ans.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="bg-white text-left">
      <div className="max-w-xl mx-auto mb-10">
        <Input
          placeholder="Search for a question..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery("")}
          startContent={<SearchIcon className="text-gray-400" />}
          isClearable
          variant="bordered"
          className="font-NeuePlakRegular"
        />
      </div>
      <FAQ filteredList={filteredList} />

      <div className="mt-20 p-10 bg-white rounded-[32px] text-center shadow-sm border border-gray-100 max-w-4xl mx-auto">
        <h3 className="text-2xl font-NeuePlakBold text-black mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-500 font-NeuePlakRegular mb-6">
          If you couldn't find the answer you're looking for, our team is ready
          to help.
        </p>
        <Button
          color="primary"
          className="font-NeuePlakBold px-10 h-12"
          as="button"
          href="/contact"
        >
          Contact Support
        </Button>
      </div>

      {/* Modal Message */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default FaqPage;
