// *************************THIS IS FOR WITHOUT BACKEND ONLY  FOR LEARNING PURPOSE*********************

import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Frontend only for now
    setLoading(true);

    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    // Simulate login request
    setTimeout(() => {
      setLoading(false);

      setFormData({
        email: "",
        password: "",
      });

      console.log("Frontend login completed");
    }, 1500);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md border-2 border-amber-800 rounded-xl">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5 p-10"
        >
          <h1 className="text-3xl text-white font-semibold text-center">
            Login
          </h1>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="Enter Email"
              disabled={loading}
              className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-5 rounded-full placeholder:text-gray-400"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Enter Password"
              disabled={loading}
              className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-5 rounded-full placeholder:text-gray-400"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-amber-800 text-white py-3 px-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;











// **********************************************THIS IS FOR FRONTEND WITH BACKEND*********************************
// import React, { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [serverError, setServerError] = useState("");

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Remove field error while user is typing
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));

//     setServerError("");
//   }

//   function validateForm() {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     return newErrors;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     setServerError("");

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/auth/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       console.log("Login successful:", data);

//       // Example:
//       // navigate("/dashboard");

//       setFormData({
//         email: "",
//         password: "",
//       });
//     } catch (error) {
//       setServerError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <div className="w-full max-w-md border-2 border-amber-800 rounded-xl">
//         <form
//           onSubmit={handleSubmit}
//           noValidate
//           className="flex flex-col gap-5 p-10"
//         >
//           <h1 className="text-3xl text-white font-semibold text-center">
//             Login
//           </h1>

//           {serverError && (
//             <p className="text-red-500 text-sm">
//               {serverError}
//             </p>
//           )}

//           {/* Email */}

//           <div className="flex flex-col gap-2">
//             <label htmlFor="email" className="text-white">
//               Email
//             </label>

//             <input
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//               autoComplete="email"
//               placeholder="Enter Email"
//               disabled={loading}
//               className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-5 rounded-full placeholder:text-gray-400"
//             />

//             {errors.email && (
//               <p className="text-red-500 text-sm">
//                 {errors.email}
//               </p>
//             )}
//           </div>

//           {/* Password */}

//           <div className="flex flex-col gap-2">
//             <label htmlFor="password" className="text-white">
//               Password
//             </label>

//             <input
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               type="password"
//               autoComplete="current-password"
//               placeholder="Enter Password"
//               disabled={loading}
//               className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-5 rounded-full placeholder:text-gray-400"
//             />

//             {errors.password && (
//               <p className="text-red-500 text-sm">
//                 {errors.password}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-amber-800 text-white py-3 px-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;