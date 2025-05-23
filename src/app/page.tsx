"use client";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { getTodos, createTodo, updateTodo, deleteTodo } from "../api";
// import { useState } from "react";

// interface Todo {
//   id: number;
//   description: string;
//   completed: boolean;
// }
console.log("TESTTT", process.env.NEXT_PUBLIC_API_BASE_URL as string);
console.log("heree");

console.log("TEST2", process.env["NEXT_PUBLIC_API_BASE_URL"] as string);
console.log("TEST3", process.env["NEXT_PUBLIC_API_BASE_URL"]);
export default function Home() {
  // const queryClient = useQueryClient();
  // const [newTodo, setNewTodo] = useState("");

  // // Fetch todos
  // const {
  //   data: todos,
  //   isLoading,
  //   error
  // } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: getTodos
  // });

  // // Create mutation
  // const createMutation = useMutation({
  //   mutationFn: createTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //     setNewTodo("");
  //   }
  // });

  // // Update mutation
  // const updateMutation = useMutation({
  //   mutationFn: ({
  //     id,
  //     updates
  //   }: {
  //     id: number;
  //     updates: { title?: string; completed?: boolean };
  //   }) => updateTodo(id, updates),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   }
  // });

  // // Delete mutation
  // const deleteMutation = useMutation({
  //   mutationFn: deleteTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   }
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newTodo.trim()) {
  //     createMutation.mutate(newTodo);
  //   }
  // };

  // const toggleComplete = (id: number, completed: boolean) => {
  //   updateMutation.mutate({ id, updates: { completed: !completed } });
  // };

  // const handleDelete = (id: number) => {
  //   deleteMutation.mutate(id);
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {" "}
      {process.env.NEXT_PUBLIC_API_BASE_URL as string}
      HELOOOOOOOOOOOOOOOOOOOOOO
    </div>
  );

  // return (
  //   <div className="max-w-md mx-auto p-4">
  //     <h1 className="text-2xl font-bold mb-4">Todo List</h1>

  //     <form onSubmit={handleSubmit} className="mb-4">
  //       <input
  //         type="text"
  //         value={newTodo}
  //         onChange={(e) => setNewTodo(e.target.value)}
  //         placeholder="Add new todo"
  //         className="px-4 py-2 border rounded mr-2"
  //       />
  //       <button
  //         type="submit"
  //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  //         disabled={createMutation.isPending}
  //       >
  //         {createMutation.isPending ? "Adding..." : "Add"}
  //       </button>
  //     </form>

  //     <ul>
  //       {todos?.map((todo: Todo) => (
  //         <li
  //           key={todo.id}
  //           className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded"
  //         >
  //           <div className="flex items-center">
  //             <input
  //               type="checkbox"
  //               checked={todo.completed}
  //               onChange={() => toggleComplete(todo.id, todo.completed)}
  //               className="mr-2"
  //             />
  //             <span className={todo.completed ? "line-through text-gray-500" : ""}>
  //               {todo.description}
  //             </span>
  //           </div>
  //           <div>
  //             <button
  //               onClick={() => handleDelete(todo.id)}
  //               className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
  //               disabled={deleteMutation.isPending}
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
