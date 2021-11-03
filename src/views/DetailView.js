import md5 from 'md5';
import React from 'react';
import Layout from "../components/layout";

export default function DetailView({ user }) {
    console.log("user", user);
    const { name, email, address, company } = user;
    return (
        <Layout>
            <div className="p-20 text-center justify-items-center">
                <div className="h-80 sm:w-56 md:w-72 hover:shadow-lg flex flex-col items-center" >
                    <h1 className="font-bold text-xl">Bienvenido {name}</h1>
                    <img className="m-auto pt-6 p-4 h-36 w-36" src={"http://cdn.libravatar.org/avatar/" + md5(email)} alt="avatar" />
                    <p className="pb-4">{company.name}</p>
                    <h2>{email}</h2>
                    <h3>{address.city}</h3>
                    <h3>{company.name}</h3>
                </div>
            </div>
        </Layout>
    )
}
