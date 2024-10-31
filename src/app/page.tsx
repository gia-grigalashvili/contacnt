"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handlesumbut = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      // Handle successful submission, e.g., reset the form or show a success message
      setInput({ name: "", email: "", text: "" });
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }
  };

  const handlechange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handlesumbut}>
        <input
          onChange={handlechange}
          value={input.name}
          placeholder="name"
          id="name"
          name="name"
          type="text"
        />
        <input
          onChange={handlechange}
          value={input.email}
          placeholder="email"
          type="text"
          id="email"
          name="email"
        />
        <textarea
          onChange={handlechange}
          value={input.text}
          placeholder="text"
          id="text"
          name="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
