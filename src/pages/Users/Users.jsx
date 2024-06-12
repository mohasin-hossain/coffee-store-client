import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            {users.length}
        </div>
    );
};

export default Users;