import { useState } from "react";

export default function SearchBar({ setUserId }) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserId(input);
  }
  return (
    <div className="text-xl  w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search the github username ..."
          className="w-4/5 text-center focus:outline-none"
        />
        <button type="submit" className="bg-blue-400 p-2 rounded-md w-1/5">
          Search
        </button>
      </form>
    </div>
  );
}
