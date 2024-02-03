"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  console.log(pending);
  return <button type="submit">{pending ? "Submitting" : "Share meal"}</button>;
};

export default MealsFormSubmit;
