const API_BASE_URL = process.env.API_BASE_URL as string;

// Get all todos
export const getTodos = async () => {
  const response = await fetch(`${API_BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Create a new todo
export const createTodo = async (description: string) => {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ description, completed: false })
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Update a todo
export const updateTodo = async (
  id: number,
  updates: { description?: string; completed?: boolean }
) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Delete a todo
export const deleteTodo = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
