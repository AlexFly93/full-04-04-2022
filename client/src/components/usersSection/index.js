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
      {error && <h3>{JSON.stringify(error)}</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map((user, i) => (
        <article key={i}>{JSON.stringify(user)}</article>
      ))}
    </section>
  );
};

export default UsersSection;
