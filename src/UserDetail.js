import React from "react";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const { id } = useParams();
  return <div>User {id} Detail</div>;
};
