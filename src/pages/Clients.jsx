import React, { useState, useEffect } from 'react';
import { getCurrentDate } from "../components/Date";
import { Heading } from '../components/Heading';
import { Sidebar } from '../components/Sidebar';
import main from '../assets/main.png'


export function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('/klien.csv')
            .then(response => response.text())
            .then(data => {
                const parsedData = data.split('\n').map(row => row.split(';'));
                setClients(parsedData.slice(1)); // Remove header row
            })
            .catch(error => console.error('Error fetching CSV:', error));
    }, []);

    return (
        <div className="grid grid-cols-12 w-full h-auto">
            <div className="bg-gray-100 w-full p-4 col-span-9">

            <div className="flex items-center pb-4">
                    <img src={main} alt="" className="object-fill"/>
                </div>

                <Heading title="DAFTAR KLIEN"/>
                <div className="overflow-x-auto py-4">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="text-gray-700 py-2 px-4 border-b">No</th>
                                <th className="text-gray-700 py-2 px-4 border-b">Nama Perusahaan</th>
                                <th className="text-gray-700 py-2 px-4 border-b">Negara</th>
                                <th className="text-gray-700 py-2 px-4 border-b">Alamat</th>
                                <th className="text-gray-700 py-2 px-4 border-b">Status Kerjasama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="text-gray-600 py-2 px-4 border-b">{client[0]}</td>
                                    <td className="text-gray-600 py-2 px-4 border-b">{client[1]}</td>
                                    <td className="text-gray-600 py-2 px-4 border-b">{client[2]}</td>
                                    <td className="text-gray-600 py-2 px-4 border-b">{client[3]}</td>
                                    <td className="text-gray-600 py-2 px-4 border-b">{client[4]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}