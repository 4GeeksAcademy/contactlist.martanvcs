export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Gaturro Peluso",
        background: {
          email: "peludito23@meow.com",
          phone: "555-1234",
          address: "123 Plaza Pelusa",
          photo_url: "https://i.pravatar.cc/150?u=1"
        }
      },
      {
        id: 2,
        title: "Katrina Rawr",
        background: {
          email: "Katrina@meow.com",
          phone: "555-5678",
          address: "456 Calle Sardina",
          photo_url: "https://i.pravatar.cc/150?u=2"
        }
      }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task": {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                background: {
                  ...todo.background,
                  color: color
                }
              }
            : todo
        )
      };
    }

    case "add_contact": {
      const newId =
        store.todos.length > 0 ? store.todos[store.todos.length - 1].id + 1 : 1;

      const contact = {
        id: newId,
        title: action.payload.full_name,
        background: {
          email: action.payload.email,
          phone: action.payload.phone,
          address: action.payload.address,
          photo_url: `https://i.pravatar.cc/150?u=${newId}`
        }
      };

      return {
        ...store,
        todos: [...store.todos, contact]
      };
    }

    case "update_contact": {
      const { id, updatedData } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                title: updatedData.full_name,
                background: {
                  ...todo.background,
                  email: updatedData.email,
                  phone: updatedData.phone,
                  address: updatedData.address
                }
              }
            : todo
        )
      };
    }

    case "delete_contact": {
      const { id } = action.payload;
      return {
        ...store,
        todos: store.todos.filter((todo) => todo.id !== id)
      };
    }

    default:
      throw Error("Unknown action.");
  }
}

