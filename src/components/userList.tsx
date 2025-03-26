import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../actions/userActions';
import { UserState } from '../reducers/userReducer';

interface UserListProps {
    onEdit: (user: { id: number; name: string; email: string }) => void;
}

const UserList: React.FC<UserListProps> = ({ onEdit }) => {
    const users = useSelector((state: UserState) => state.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-center text-gray-800">User List</h2>
            <ul>
                {users.map(user => (
                    <li className='py-4' key={user.id}>
                        {user.name} - {user.email}
                        <button className="text-gray-800 mx-3 px-5 pl-32" onClick={() => onEdit(user)}>Edit</button>
                        <button className="text-gray-800 mx-3" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
