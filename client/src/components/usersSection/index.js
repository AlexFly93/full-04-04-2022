import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../store/usersSlice";

const UsersSection = (props) => {
  const { users, error, isFetching } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers({ page: 0 }));
  }, [dispatch]);
  return (
    <section>
      <h2>Users List</h2>
      {error && <h3>ERROR!!!</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map((user) => (
        <article key={user.id}><h3>{user.firstName} {user.lastName}</h3></article>
      ))}
    </section>
  );
};

export default UsersSection;
