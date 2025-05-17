import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useGlobalContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const editing = !!id;
    const contactToEdit = store.contacts.find(c => c.id === parseInt(id));

    const [form, setForm] = useState({
        Nombre: "",
        email: "",
        teléfono: "",
        dirección: ""
    });

    useEffect(() => {
        if (editing && contactToEdit) {
            setForm(contactToEdit);
        }
    }, [editing, contactToEdit]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editing) {
            actions.updateContact(form, id);
        } else {
            actions.addContact(form);
        }

        navigate("/");
    };

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4">
                {editing ? "✏️ Editar Contacto" : "➕ Nuevo Contacto"}
            </h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input
                        className="form-control"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        className="form-control"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        className="form-control"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    {editing ? "Actualizar" : "Guardar"}
                </button>
            </form>
        </div>
    );
};

export default AddContact;

