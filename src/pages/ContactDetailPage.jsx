import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ContactDetailPage = () => {
    const { id } = useParams(); // URL se ID nikalna
    const { contactList } = useContext(AppContext);

    // List mein se sahi contact dhoondna
    const contact = contactList.find(c => c.id == id);

    if (!contact) {
        return (
            <div style={{ padding: "20px" }}>
                <p>Contact not found.</p>
                <Link to="/">Go Back</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Contact Details</h1>
            <div style={{ border: "2px solid #333", padding: "20px", borderRadius: "10px" }}>
                <p><strong>ID:</strong> {contact.id}</p>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
            </div>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ContactDetailPage;