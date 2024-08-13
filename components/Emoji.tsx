"use client";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

const MyEmoji = [
  "😎",
  "🇸🇳",
  "😉",
  "🚀",
  "🥱",
  "🎯",
  "🤧",
  "🐞",
  "🤓",
  "🛸",
  "😏",
  "🔥",
  "😁",
  "⚽",
  "😊",
  "🏀",
  "😴",
  "👀",
  "🙃",
  "🏎️",
  "🤪",
  "☕",
  "🥳",
  "🍌",
];

function getEmoji(exclude?: string) {
  const emoji = exclude
    ? MyEmoji.filter((emoji) => emoji !== exclude)
    : MyEmoji;

  return emoji[Math.trunc(emoji.length * Math.random())];
}

function Emoji(props: ComponentProps<"span">) {
  const [emoji, setEmoji] = useState(MyEmoji[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEmoji((emoji) => getEmoji(emoji));
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return <span {...props}>{emoji}</span>;
}

export default Emoji;
