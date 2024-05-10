import { useState } from "react";
const contactForm = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return { values, handleChange };
};
export default contactForm;
