"use client";
import { useState } from "react";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "./ui/collapsible";
import { Separator } from "./ui/separator";

type Props = object;

function Faq({}: Props) {
  const FAQ = [
    {
      question: "How are coins calculated?",
      answer:
        "After submitting. Your project gets voted on by 10 other hackers. After getting your vote rate with Elo-based approach. It’s divided by the KB size of your program. I.e. If you get a 9.8 rate and your app is 1.4 KBs. Then your final rate is 7. For each rate point you get 10 coins. so 70 coins!",
    },
    {
      question: "How much is a coin worth?",
      answer:
        "Each accepted hour is worth 10 coins. You can exchange those coins around ~$5 per 10 coins",
    },
    {
      question: "I don’t know software, can I still try",
      answer:
        "Of course. Hackclub is setup for teenagers of all skill levels. You are absolutely welcome if you're a total beginner or a rust veteran.",
    },
    {
      question: "Wait, What’s the point?",
      answer:
        "Develoeprs just neglect optimizations nowadays. Even frown upon micro optimizations (unless Linus Torvalds is the one doing it). So in this ysws, we bring back this notion of micro optimization where you will learn WAY more than building an extra feature",
    },
    {
      question: "I have more questions",
      answer:
        "Absolutely, just RSVP for now and join #nanoship channel. You can ask your questions there",
    },
  ];
  const [openedFaq, setOpenedFaq] = useState<number | null>(null);
  return (
    <div className="mx-auto w-full max-w-200 space-y-3">
      {/* Header */}
      <div className="mx-auto flex justify-center gap-1 text-center font-bold">
        {/* TODO: Replace with ASCII arrow art */}
        <h1 className="text-primary text-center text-4xl">FAQ</h1>
      </div>

      <div>
        {FAQ.map((ques, i) => (
          <div key={i} className="w-full">
            {i > 0 && <Separator className="bg-muted-foreground my-3" />}
            <Collapsible
              className="w-full space-y-2"
              open={openedFaq === i}
              onOpenChange={(e) => (e ? setOpenedFaq(i) : setOpenedFaq(null))}
            >
              <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
                <div className="space-x-3">
                  {/* TODO: Change for ASCII arrow */}
                  <span
                    className={`inline-block ${openedFaq === i && "rotate-90"} transform`}
                  >
                    {">"}
                  </span>
                  <span>{ques.question}</span>
                </div>
                <span className="text-xl">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mx-3">
                <span className="text-text/80">{ques.answer}</span>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
