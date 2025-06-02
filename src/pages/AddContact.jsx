import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
    const { store, dispatch } = useGlobalContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const editing = !!id;
    const contactToEdit = store.todos.find(c => c.id === parseInt(id));

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (editing && contactToEdit) {
            setForm({
                full_name: contactToEdit.title,
                email: contactToEdit.background.email,
                phone: contactToEdit.background.phone,
                address: contactToEdit.background.address
            });
        }
    }, [editing, contactToEdit]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editing) {
            dispatch({
                type: "update_contact",
                payload: {
                    id: parseInt(id),
                    updatedData: form
                }
            });
        } else {
            dispatch({
                type: "add_contact",
                payload: form
            });
        }

        navigate("/");
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <h2 className="fw-bold mb-4 text-center text-md-start">
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
                        <div className="text-center text-md-end">
                            <button className="btn btn-primary" type="submit">
                                {editing ? "Actualizar" : "Guardar"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

