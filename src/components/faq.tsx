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
      question: "How are Tickets calculated?",
      answer: `You submit a project, get it community-voted on. Voting is Elo-based, with two main factors:
creativity/originality (1-5) and Execution (1-5) compared to projects in the same hour range bracket.
The formula: (40% _ creativity_score + 60% _ execution_score) * $1.5.
Translation: Lower bound is $1.5/hr, upper bound is $7.5/hr, mean: ~$4
The program uses "Tickets" as its currency at 10 Tickets / $1 rate. (i.e. avg payout is 40 tickets) (The
exact ratios and factors will be dynamically corrected as the program goes to ensure fairness).`,
    },
    {
      question: "How much is a Ticket worth?",
      answer: "Each 10 Tickets are worth 1 USD",
    },
    {
      question: "I don’t know software, can I still try",
      answer:
        "Of course. Hackclub is setup for teenagers of all skill levels. You are absolutely welcome if you're a total beginner or a rust veteran.",
    },
    {
      question: "Wait, What’s the point?",
      answer:
        "Developers can quite under/over estimate how complex a product really is before they build it. Whenever this happens, it's a big learning moment",
    },
    {
      question: "I have more questions",
      answer:
        "Absolutely, just RSVP for now and when it launches, You can ask your questions there or just dm me on slack @amrbassem218",
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
