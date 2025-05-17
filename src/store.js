const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [
                {
                    id: 1,
                    full_name: "Gaturro Peluso",
                    email: "peludito23@meow.com",
                    phone: "555-1234",
                    address: "123 Plaza Pelusa"
                },
                {
                    id: 2,
                    full_name: "Katrina Rawr",
                    email: "Katrina@meow.com",
                    phone: "555-5678",
                    address: "456 Calle Sardina"
                }
            ]
        },

        actions: {
            loadContacts: () => {
               
            },

            addContact: (newContact) => {
                const store = getStore();
                const newId = store.contacts.length > 0 ? store.contacts[store.contacts.length - 1].id + 1 : 1;
                const updatedContacts = [...store.contacts, { ...newContact, id: newId }];
                setStore({ contacts: updatedContacts });
            },

            updateContact: (updatedContact, id) => {
                const store = getStore();
                const updatedContacts = store.contacts.map(c =>
                    c.id === parseInt(id) ? { ...updatedContact, id: parseInt(id) } : c
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
