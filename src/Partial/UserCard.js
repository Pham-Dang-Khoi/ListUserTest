import React from 'react';

export default function UserCard({ picture, name, gender, email, country, phoneNumber }) {
    return (
        <div className="">
            <div className="">
                <img
                    src={picture}
                    alt={name}
                    className=""
                />
            </div>
            <div className="">
                <div className="">Name: </div>
                <div className="">{name}</div>
                <div className="">Gender: </div>
                <div className="">{gender}</div>
                <div className="">Email: </div>
                <div className="">{email}</div>
                <div className="">Country: </div>
                <div className="">{country}</div>
                <div className="">Phone number: </div>
                <div className="">{phoneNumber}</div>
            </div>
        </div>
    );
}