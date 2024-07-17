import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, categoriesState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const counterState = atom({
   key: 'count',
   default: 0,
   effects_UNSTABLE: [persistAtom],
});

function ToDoList() {
   const toDos = useRecoilValue(toDoSelector);
   const [category, setCategory] = useRecoilState(categoryState);
   const [categories, setCategories] = useRecoilState(categoriesState);

   const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
      setCategory(event.currentTarget.value as any);
   };

   return (
      <div>
         <h1 className="mb-4 text-2xl font-bold">To Dos</h1>
         <hr />
         <CreateToDo />
         <hr />
         <select className="mt-4 select w-full max-w-xs text-black my-2" value={category} onInput={onInput}>
            {Object.keys(categories).map((cat) => (
               <option key={cat} value={cat}>
                  {cat}
               </option>
            ))}
         </select>

         {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
         ))}
      </div>
   );
}

export default ToDoList;
