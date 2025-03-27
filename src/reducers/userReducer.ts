import { User } from "../types";

export interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

// Define action types with exact payload types
type Action =
    | { type: "ADD_USER"; payload: User }
    | { type: "UPDATE_USER"; payload: User }
    | { type: "DELETE_USER"; payload: string | number }; // Accepts both string & number

const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] };

        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id.toString() !== action.payload.toString()), // Ensure consistent comparison
            };

        default:
            return state;
    }
};

export default userReducer;
