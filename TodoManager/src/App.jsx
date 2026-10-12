
import { useEffect, useState } from "react";
import Addbar from "./components/Addbar";
import Todo from "./components/todo";

export default function App() {
  // name=name and checked :true/false
  const [todoList, setTodoList] = useState(() => {
    const temp = localStorage.getItem("todos");
    if (!temp) return [];
    const data = JSON.parse(temp);
    return data;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  function onDelete(id) {
    const temp1 = todoList.filter((value) => {
      return value.id != id;
    });

    setTodoList(temp1);
  }

  function onCheck(id, checked) {
    let data2 = todoList.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          checked: checked,
        };
      }

      return ele;
    });

    setTodoList(data2);
  }
  function onAddition(key){
   if (!key) return;
    const obj1 = {
      id: crypto.randomUUID(),
      name: key,
      checked: false,
    };
    let flag = false;
    todoList.map((ele) => {
      if (ele.name == key) {
        flag = true;
      }
    });
    if (flag) return;
    const data2=[...todoList,obj1];
    setTodoList(data2);
  }

  function onDisable(v1, id) {
   
    const data2 = todoList.map((ele) => {
      if (ele.id == id) {
        return {
          ...ele,
          name: v1,
        };
      }

      return ele;
    });

    setTodoList(data2);
  }
  const [dark,setDark]=useState(true);
  const bgcolor=dark?"bg-slate-900 text-white":"bg-amber-50 text-black";
  function handleTheme(){
    setDark(!dark);
  }
  return (
    <>
      <div className={`w-screen min-h-screen h-full  ${bgcolor} flex flex-col items-center gap-3`}>
        <h1 className="m-2 p-2 font-semibold">Manage Your Todos</h1>
        <button  className="bg-blue-400"onClick={handleTheme}>{dark?<img src="/sun.svg" width="20px" />:<img src="/moon.svg" width="20px"/>}</button>
        <Addbar onAddition={onAddition} dark={dark} />

        {todoList.map((value) => {
          return (
            <Todo
              key={value.id}
              value={value.name}
              checked={value.checked}
              id={value.id}
              onCheck={onCheck}
              onDelete={onDelete}
              onDisable={onDisable}
            />
          );
        })}
      </div>
    </>
  );
}
