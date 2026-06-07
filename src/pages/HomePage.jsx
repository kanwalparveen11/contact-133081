import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { currentUser, contactList, logout, addContact } = useContext(AppContext);

    // Local states for Add Contact form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if(!name || !email || !phone) return alert("All fields are required");

        // Naya contact add karna
        addContact({ name, email, phone });

        // Inputs khali karna
        setName(""); setEmail(""); setPhone("");
    };

    return (
        <div style={{ padding: "20px" }}>
            {/* 1. Login Status Section */}
            <div style={{ background: "#f4f4f4", padding: "10px", marginBottom: "20px" }}>
                {currentUser.loggedIn ? (
                    <p>Hi, <strong>{currentUser.username}</strong> | <button onClick={logout}>Logout</button></p>
                ) : (
                    <p>No user logged in. <Link to="/auth/login">Login here</Link></p>
                )}
            </div>

            {/* 2. Add Contact Form (Sirf tab dikhe jab logged in ho - aksar exam requirement hoti hai) */}
            <h3>Add New Contact</h3>
            <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                <button type="submit">Add Button</button>
            </form>

            {/* 3. Contact List Section */}
            <h2>Contact List</h2>
            {contactList.length === 0 ? <p>Loading...</p> : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {contactList.map((contact) => (
                        <div key={contact.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
                            <p><strong>{contact.name}</strong></p>
                            <p>{contact.email} | {contact.phone}</p>
                            <Link to={`/contacts/${contact.id}`}>View Details</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;