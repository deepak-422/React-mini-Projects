import { useEffect, useRef, useState } from "react";

export default function Todo({ value, checked, id,onDelete ,onCheck,onDisable}) {
  const [v1, setV1] = useState(value);
  const [isdisabled, setdisable] = useState(true);
  const inputRef = useRef(null);
  function handlecheck(event) {
    onCheck(id,event.target.checked);
  }
  function handleDelete() {
    onDelete(id);
  }

  function handleChange(event) {
    setV1(event.target.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, [isdisabled]);
  function handledisable() {
    if(checked)return;
    if (!isdisabled) {
      onDisable(v1,id);
      
    }
    setdisable(!isdisabled);
  }

  const checkedCss = checked? "bg-green-400 line-through" : "bg-purple-300";
  return (
    <>
      <div
          className={` flex justify-between items-center w-109 p-1 text-sm rounded-md text-black ${checkedCss}`}
      >
        <div className="flex gap-2">
          <input type="checkbox" checked={checked} onChange={handlecheck} />
          <input
            type="text"
            className=" p-1"
            value={v1}
            disabled={isdisabled}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-white p-2 rounded-md" onClick={handledisable}>
            {isdisabled?<img src="/pencil.svg" alt="edit" width="10px" />:<img src="/save.svg" alt="edit" width="10px" />}
          </button>
          <button
            className="p-2 bg-white  rounded-md "
            onClick={handleDelete}
          >
            <img src="/cross.svg" alt="delete" width="10px" />
          </button>
        </div>
      </div>
    </>
  );
}
