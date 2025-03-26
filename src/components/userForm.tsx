import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../actions/userActions';
import type { User } from '../types'

interface UserFormProps {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
}

const UserForm: React.FC<UserFormProps> = ({ currentUser, setCurrentUser }) => {
    const [user, setUser] = useState<User>({ id: 0, name: '', email: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) setUser(currentUser);
    }, [currentUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.id) dispatch(updateUser(user));
        else dispatch(addUser({ ...user, id: Date.now() }));
        setUser({ id: 0, name: '', email: '' });
        setCurrentUser(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='border border-solid border-gray-500 p-2 mx-1 rounded-lg text-gray-800' type="text" placeholder="Name" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
            <input className='border border-solid border-gray-500 p-2 mx-3 rounded-lg text-gray-800' type="email" placeholder="Email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
            <button className='border border-solid border-gray-500 p-1 rounded-lg text-gray-800' type="submit">{user.id ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default UserForm;
