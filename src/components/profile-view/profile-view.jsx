import { useEffect, useState } from "react"

export const ProfileView = ({user}) => {
    const [user, setUser] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [birthday, setBirthday] = useState(user.birthday);

}