import React, { useState } from 'react';
import UserList from '../components/userList';
import UserForm from '../components/userForm';
import type { User } from '../types';


const Home: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <div className="min-h-screen bg-red-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-600 mb-4">
                Email Directory
            </h1>
            <div className="max-w-xl mx-auto bg-red-300 p-6 rounded-lg shadow-md">
                <UserForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
            <div className="max-w-xl mx-auto mt-6 bg-red-300 p-6 rounded-lg shadow-md">
                <UserList onEdit={setCurrentUser} />
            </div>
        </div>
    );
};

export default Home;
