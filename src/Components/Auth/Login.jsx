import React,{useState} from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmitClick(e) {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-amber-800">
        <form className="flex flex-col items-center justify-center gap-10 p-20">
          <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-7 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email.."
          />
          <input
             value={password}
          onChange={(e)=> setPassword(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-amber-800 py-4 px-7 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password.."
          />
          <button
            onSubmit={(e)=> onSubmitClick(e)}
            type="submit"
            className="bg-amber-800 text-white border-2 border-amber-800 py-2 px-4 rounded-xl mb-2 active:scale-95 transition-transform"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
