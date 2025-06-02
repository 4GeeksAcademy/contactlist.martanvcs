import React from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { store } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">📇 Lista de Contactos</h1>
                <button className="btn btn-success" onClick={() => navigate("/add")}>
                    ➕ Agregar Contacto
                </button>
            </div>

            {Array.isArray(store.todos) && store.todos.length > 0 ? (
                store.todos.map(todo => (
                    <ContactCard
                        key={todo.id}
                        contact={{
                            id: todo.id,
                            full_name: todo.title,
                            ...todo.background
                        }}
                    />
                ))
            ) : (
                <div className="alert alert-info">No hay contactos disponibles</div>
            )}
        </div>
    );
};

