import React from "react";
import { Error } from "../mini-components/error";

export const Errors = ({ title, error, message }) => (
  <Error title={title} error={error} message={message} />
);
