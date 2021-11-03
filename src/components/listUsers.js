import React from 'react'
import md5 from 'md5';
import { navigate } from "gatsby";

export default function ListUsers({ title, users }) {
    return (
        <div className="sm:p-10 sm:pt-15 lg:p-20 text-center ">
            <h1 className="text-3xl font-bold text-gray-800"> {title} </h1>
            <div className="grid  sm:grid-flow-row md:grid-flow-row md:grid-cols-3 justify-items-center sm:px-20 lg:px-20 gap-3">
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className="h-80 sm:w-56 md:w-72 hover:shadow-lg" >
                                <img className="m-auto pt-6 p-4 h-36 w-36" src={"http://cdn.libravatar.org/avatar/" + md5(user.email)} alt="avatar" />
                                <h1 className="font-bold text-xl" >{user.name}</h1>
                                <p className="pb-4">{user.company.name}</p>
                                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => navigate(`/detail`, { state: { id: user.id } })} >Ver más</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
