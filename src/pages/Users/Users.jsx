import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });

        Swal.fire({
          title: "Deleted!",
          text: "The User has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className="my-20 bg-form-img">
      <div className="container mx-auto px-10">
        <button
          style={{ textShadow: "0px 1px 8px #818181" }}
          className="mt-20 mb-8 font-rancho text-3xl flex items-center gap-3"
          onClick={handleGoBack}
        >
          <IoMdArrowRoundBack />
          Back to Home
        </button>
        <h1
            style={{ textShadow: "0px 1px 8px #818181" }}
            className="text-4xl font-extrabold text-center font-rancho my-6"
          >
            Customer's List
          </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Last Logged At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
