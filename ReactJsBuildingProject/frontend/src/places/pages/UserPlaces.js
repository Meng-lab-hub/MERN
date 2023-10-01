import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'That Luang',
        description: 'One of a symbolic building in Laos',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Pha_That_Luang%2C_Vientiane%2C_Laos.jpg',
        address: 'ທາດຫຼວງ, Xaysettha 10009',
        location: {
            lat: 7.9767542,
            lng: 102.6339376
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Patuxay',
        description: 'One of a symbolic building in Laos',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Patuxay%2C_Vientiane%2C_Laos.jpg',
        address: 'XJC9+7C7, P.D.R, ວຽງຈັນ',
        location: {
            lat: 17.9719698,
            lng: 102.6152289
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
};

export default UserPlaces;