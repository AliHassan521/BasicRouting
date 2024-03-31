import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("filter") == "active";
  return (
    <>
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3</div>
      <Outlet />
      <div>
        <button onClick={() => setsearchParams({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setsearchParams({})}>Reset filter</button>
      </div>
      {showActiveUser ? <p>Showing active users</p> : <p>Showing all users</p>}
    </>
  );
};
