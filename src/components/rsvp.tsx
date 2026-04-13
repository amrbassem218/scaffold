"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";

function Rsvp() {
  const [email, setEmail] = useState("");
  const handleEmailRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/send", { email });
      if (res.data) {
        toast.success("Successfully RSVP'ed", {
          description: "Check your email for more information",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't RSVP", {
        description: "Pls check your internet connection and try again.",
      });
    }
  };
  return (
    <form
      className="mb-2 flex h-12 items-end gap-2"
      onSubmit={handleEmailRegister}
    >
      <Input
        placeholder="Email@example.com"
        className="border-secondary h-full border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="bg-secondary h-full w-30 cursor-pointer" type="submit">
        RSVP
      </Button>
    </form>
  );
}

export default Rsvp;
