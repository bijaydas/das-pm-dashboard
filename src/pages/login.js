import React, {useState} from 'react';
import {login, storeAuthInfoToLocal} from '../utils/auth';
import Head from 'next/head';

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('bijaydas@ligious.com');
  const [password, setPassword] = useState('Admin@#1234');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add the email and password validation here
    login(email, password, async (err, response) => {
      if (err) {
        const errMessage = await err;
        return setError(errMessage.message);
      }
      setError(false);
      const {data} = response;
      try {
        storeAuthInfoToLocal(data);
      } catch (e) {
        // TODO: Set a proper error handle
        console.log(e.message);
      }
    });
  }

  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-gray-200 h-screen py-10">
        <div className="bg-white w-1/3 px-10 py-20 mx-auto shadow-lg">
          <h3 className="text-4xl text-center text-gray-400 font-bold">
            Login
          </h3>
          <form onSubmit={handleSubmit} action="#">
            <div className="m-2">
              <label className="block font-bold text-gray-700" htmlFor="#">
                Email
              </label>
              <input
                className="block w-full border-2 border-gray-200 text-lg px-4 py-2 focus:outline-none rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"/>
            </div>

            <div className="m-2">
              <label className="block font-bold text-gray-700" htmlFor="#">
                Password
              </label>
              <input
                className="block w-full border-2 border-gray-200 text-lg px-4 py-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"/>
            </div>
            <div className="mx-2 my-6">
              <button className="bg-blue-600 block w-full uppercase text-white py-2 rounded-md tracking-wider font-semibold shadow-md">
                login
              </button>
            </div>

            {error &&
              <div className="mx-2 my-6 center text-red-500 text-center">
                {error}
              </div>
            }
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
