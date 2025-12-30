Custom Hook is basically a javascript function that:
  Starts with use
  Uses one or more built-in hooks
  Encapsulates reusable logic
Custom hooks helps to prevent dublicate code and easy to read code
Custom hooks should return data in any form it should never return jsx, since jsx is returned by component not a hook
UseCase for creating custom hook
  api/data fetching
  authetication/authorization
  form handling and validation
  debouncing/throtling
  local storage/session storage sync

# Example of api/data fetching hook
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;


# form handling and validation
1️⃣ useForm Custom Hook
import { useState } from "react";

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

2️⃣ Validation Function (Separate Logic)
function validateLogin(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}

export default validateLogin;

3️⃣ Using the Custom Hook in a Component
import useForm from "./useForm";
import validateLogin from "./validateLogin";

function LoginForm() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    validateLogin
  );

  const submitForm = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

