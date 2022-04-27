import './styles/Home.css'
import Searchbar from "./Searchbar";
import {useEffect, useState} from "react";
import User from "./User";

export default function Home() {
    const [users, setUsers] = useState([])
    const [moreUsers, setMoreUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1&delay=1')
            .then(res => res.json())
            .then(
                (results) => {
                    setUsers(results.data)
                }
            )
        fetch('https://reqres.in/api/users?page=2&delay=1')
            .then(res => res.json())
            .then(
                (results) => {
                    setMoreUsers(results.data)
                }
            )
    }, [])
    const filterUsers = (users, query) => {
        if (!query) {
            return users
        }
        return users.filter((user) => {
            const userFirstname = user.first_name.toLowerCase()
            return userFirstname.includes(query.toLowerCase())
        })
    }
    const allUsers = []
    users.forEach(user => allUsers.push(user))
    moreUsers.forEach(user => allUsers.push(user))
    const filteredUsers = filterUsers((isShown ? allUsers : users), searchQuery)
    return(
        <section className="home-section">
            <div className="container">
                <div>
                    <h2 className="my-contacts">My contacts</h2>
                </div>

                <div className="search-container">
                    <Searchbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <div>Total : {filteredUsers.length}</div>
                </div>
                <div className="half-containers">
                    <div className="results-container">
                        {filteredUsers.map(user => (
                            <User key={user.id} data={user} />
                        ))}
                        <button onClick={() => {setIsShown(true)}}>
                            Show More
                        </button>
                    </div>

                    <div className="favorites-container">
                        <h3>Favorites</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
