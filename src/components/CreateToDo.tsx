import React from 'react';
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, categoriesState, toDoState } from "../atoms";

interface IForm {
   toDo: string;
}

interface ICategoryForm {
   category: string;
}

function CreateToDo() {
   const setToDos = useSetRecoilState(toDoState);
   const category = useRecoilValue(categoryState);
   const setCategories = useSetRecoilState(categoriesState);
   const { register, handleSubmit, setValue } = useForm<IForm>();
   const { register: registerCategory, handleSubmit: handleCategorySubmit, setValue: setCategoryValue } = useForm<ICategoryForm>();

   const handleValid = ({ toDo }: IForm) => {
      setToDos((oldToDos) => [
         { text: toDo, id: Date.now(), category },
         ...oldToDos,
      ]);
      setValue("toDo", "");
   };

   const onValid = ({ category }: ICategoryForm) => {
      setCategories((oldCategories) => ({
         ...oldCategories,
         [category]: [],
      }));
      setCategoryValue("category", "");
   };

   return (
      <div className='mb-4'>
         <form onSubmit={handleSubmit(handleValid)} className="mt-5">
            <input
               className="input input-bordered w-full max-w-xs text-black"
               {...register("toDo", {
                  required: "Please write a To Do",
               })}
               placeholder="Write a to do"
            />
            <button className="btn ml-2">
               <i className="xi-plus" />
               Add
            </button>
         </form>

         <form onSubmit={handleCategorySubmit(onValid)} className="mt-5">
            <input
               className="input input-bordered w-full max-w-xs text-black"
               {...registerCategory("category", {
                  required: "Please write a category",
               })}
               placeholder="Write a category"
            />
            <button className="btn ml-2">
               <i className="xi-plus" />
               Add Category
            </button>
         </form>
      </div>
   );
}

export default CreateToDo;
