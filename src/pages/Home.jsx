import React, { useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { store, actions } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">📇 Lista de Contactos</h1>
                <button className="btn btn-success" onClick={() => navigate("/add")}>
                    ➕ Agregar Contacto
                </button>
            </div>

            {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
            ) : (
                <div className="alert alert-info">No hay contactos disponibles</div>
            )}
        </div>
    );
};

export default Home;

