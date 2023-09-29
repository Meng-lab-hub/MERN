import React from "react";

import './UserList.css';
import UserItem from "../UserItem/UserItem";

const UserList = props => {
    if (props.items.lenght === 0) {
        return <div className="center">
            <h2>No User!</h2>;
        </div>;
    }
    return <ul>
        {props.items.map(user => (
            <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCout={user.places}
            />
        ))}
    </ul>;
};

export default UserList;