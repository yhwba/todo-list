import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
   const setToDos = useSetRecoilState(toDoState);
   const categories = useRecoilValue(categoriesState);

   const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const {
         currentTarget: { name },
      } = event;
      setToDos((oldToDos) => {
         const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
         const newToDo = { text, id, category: name as string };
         return [
            ...oldToDos.slice(0, targetIndex),
            newToDo,
            ...oldToDos.slice(targetIndex + 1),
         ];
      });
   };

   return (
      <li className="mb-3">
         <i className="xi-hand-pointing mr-2 text-lg" />
         <span className="font-bold">{text}</span>
         {Object.keys(categories).map((cat) =>
            cat !== category ? (
               <button key={cat} className={`btn ml-2 ${cat === "DOING" ? "btn-warning" : cat === "TO_DO" ? "btn-error" : "btn-success"} text-white`} name={cat} onClick={onClick}>
                  {cat}
               </button>
            ) : null
         )}
      </li>
   );
}

export default ToDo;
