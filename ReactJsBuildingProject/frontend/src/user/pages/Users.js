import React from 'react';

import UserList from '../components/UserList/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Meng', 
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1664474619075-644dd191935f%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%253D%26w%3D1000%26q%3D80&tbnid=jmd6BbSiAOBBIM&vet=12ahUKEwjPja6Tm8-BAxXHr1YBHY7-BJIQMygFegQIARBS..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&docid=ExDvm63D_wCvSM&w=1000&h=668&q=image&client=safari&ved=2ahUKEwjPja6Tm8-BAxXHr1YBHY7-BJIQMygFegQIARBS', 
            places: 3
        }
    ];
    return <UserList items={USERS} />;
};

export default Users;