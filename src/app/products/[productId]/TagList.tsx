"use client";
import Tag from "@/components/Tag";
import { useState } from "react";

type Props = {
  list: [string];
};

const TagList = ({ list }: Props) => {
  const [currentItem, setCurrentItem] = useState("");

  const setItem = (item: string) => {
    setCurrentItem(item);
  };

  return (
    <div className="flex gap-2">
      {list.map((item) => (
        <a key={item} onClick={() => setItem(item)} className="cursor-pointer">
          <Tag isActive={currentItem === item}>{item}</Tag>
        </a>
      ))}
    </div>
  );
};

export default TagList;
