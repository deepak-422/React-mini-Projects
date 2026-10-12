import { useEffect, useRef, useState } from "react";
export default function Addbar({ onAddition,dark}) {
  const [field, setfield] = useState("");
  function handlechange(event) {
    setfield(event.target.value);
  }
  const addRef = useRef();
  function handleAddition() {
    const key = field.trim();
    onAddition(key)
    setfield("");
  }


  function handlekeydown(event){
    if(event.key=='Enter'){
        addRef.current.click();
    }
  }
  const bgcolor=dark?"bg-gray-700":"bg-orange-200";
  return (
    <div className="text-sm w-110 ">
      <input
        
        type="text"
        placeholder="Write Todo..."
        className={`focus:outline-none p-1 w-100 ${bgcolor} rounded-l-md`}
        value={field}
        onKeyDown={handlekeydown}
        onChange={handlechange}
        autoFocus
      />
      <button
        ref={addRef}
        className="bg-green-600 p-1 rounded-r-md"
        type="submit"
        onClick={handleAddition}
      >
        Add
      </button>
    </div>
  );
}
