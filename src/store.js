const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                {
                    id: 1,
                    full_name: "Gaturro Peluso",
                    email: "peludito23@meow.com",
                    phone: "555-1234",
                    address: "123 Plaza Pelusa",
                    photo_url: "https://i.pravatar.cc/150?u=1"
                },
                {
                    id: 2,
                    full_name: "Katrina Rawr",
                    email: "Katrina@meow.com",
                    phone: "555-5678",
                    address: "456 Calle Sardina",
                    photo_url: "https://i.pravatar.cc/150?u=2"
                }
            ]
        },

        actions: {
            loadContacts: () => {
                
            },

            addContact: (newContact) => {
                const store = getStore();
                const newId = store.contacts.length > 0
                    ? store.contacts[store.contacts.length - 1].id + 1
                    : 1;

                const contactWithPhoto = {
                    ...newContact,
                    id: newId,
                    photo_url: `https://i.pravatar.cc/150?u=${newId}`
                };

                const updatedContacts = [...store.contacts, contactWithPhoto];
                setStore({ contacts: updatedContacts });
            },

            updateContact: (updatedContact, id) => {
                const store = getStore();
                const updatedContacts = store.contacts.map(c =>
                    c.id === parseInt(id)
                        ? {
                              ...updatedContact,
                              id: parseInt(id),
                              photo_url: c.photo_url 
                          }
                        : c
                );
                setStore({ contacts: updatedContacts });
            },

            deleteContact: (id) => {
                const store = getStore();
                const updatedContacts = store.contacts.filter(c => c.id !== id);
                setStore({ contacts: updatedContacts });
            }
        }
    };
};

export default getState;
