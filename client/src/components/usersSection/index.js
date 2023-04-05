import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, getAllUsersMore } from "../../store/usersSlice";
import CONSTANTS from "../../constants";

const UsersSection = (props) => {
  const [amount, setAmount] = useState(CONSTANTS.MIN_LIMIT);
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers({ offset: 0, limit: amount }));
    // eslint-disable-next-line
  }, [amount, dispatch]);
  return (
    <section>
      <h2>Users List</h2>
      <p>
        {CONSTANTS.AMOUNTS.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setAmount(item);
            }}
          >
            {item}
          </button>
        ))}
      </p>
      {error && <h3>ERROR!!!</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map((user) => (
        <article key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.password}</p>
        </article>
      ))}
      <button
        onClick={() => {
          dispatch(getAllUsersMore({ offset: users.length, limit: amount }));
        }}
      >
        load more
      </button>
    </section>
  );
};

export default UsersSection;
