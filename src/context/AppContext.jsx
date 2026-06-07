import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ username: "", loggedIn: false });
    const [contactList, setContactList] = useState([
        { id: 1, name: "Leanne Graham", email: "leanne@april.biz", phone: "1-770-736-8031" },
        { id: 2, name: "Ervin Howell", email: "shanna@melissa.tv", phone: "010-692-6593" }
    ]);

    const login = (u, p) => {
        if (u === "admin" && p === "admin") {
            setCurrentUser({ username: u, loggedIn: true });
            return true;
        }
        return false;
    };

    const logout = () => setCurrentUser({ username: "", loggedIn: false });

    const addContact = (newC) => setContactList([...contactList, { ...newC, id: Date.now() }]);

    return (
        <AppContext.Provider value={{ currentUser, contactList, login, logout, addContact }}>
            {children}
        </AppContext.Provider>
    );
};