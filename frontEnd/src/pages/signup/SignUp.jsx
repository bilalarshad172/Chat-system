import React from 'react'
import GenderCheckbox from './GenderCheckbox';

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat app</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-bold label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="enter username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <GenderCheckbox/>
          <a href="#" className="link link-neutral">
            Already have an account.
          </a>
          <button className="btn btn-block btn-sm mt-2">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp