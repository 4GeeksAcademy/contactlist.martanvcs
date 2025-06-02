import React from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact }) => {
    const { dispatch } = useGlobalContext();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch({
            type: "delete_contact",
            payload: { id: contact.id }
        });
    };

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
                <img
                    src={contact.photo_url || "https://via.placeholder.com/80"}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                    <h5 className="card-title">{contact.full_name}</h5>
                    <p className="card-text mb-1"><strong>Email:</strong> {contact.email}</p>
                    <p className="card-text mb-1"><strong>Teléfono:</strong> {contact.phone}</p>
                    <p className="card-text"><strong>Dirección:</strong> {contact.address}</p>
                </div>
                <div className="d-flex flex-row flex-md-column gap-2">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/edit/${contact.id}`)}>✏️ Editar</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>🗑️ Eliminar</button>
                </div>
            </div>
        </div>
    );
};



