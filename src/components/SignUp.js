import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Api from "../utils/api";
import Button from "./Common/Button";
import Layout from "./Layout/Layout";
import Loader from "./Common/Loader";
import { BsArrowRight } from "react-icons/bs";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (password !== cfmPassword) {
      setLoading(false);
      return setError("Passwords do not match!");
    }

    const api = new Api();
    const res = await api.createAcc({
      email,
      username,
      password,
      confirm_password: cfmPassword,
    });

    if (res.data.error) {
      setLoading(false);
      return setError(res.data.error);
    }
    if (res.data.user) {
      localStorage.setItem("jwtToken", res.data.token);
      fetchUser(res.data.user.id, "id");
      return navigate("/");
    }
  };

  useEffect(() => {
    if (!!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (
      error &&
      (email.trim().length > 0 ||
        username.trim().length > 0 ||
        password.trim().length > 0 ||
        cfmPassword.trim().length > 0)
    ) {
      setError("");
    }
  }, [email, username, password, cfmPassword]);

  return (
    <Layout className="mt-20 px-8 lg:px-0">
      <div className="max-w-[50rem] gap-8 justify-between flex items-center mx-auto">
        <div className="w-2/6 hidden sm:block">
          <img
            className="w-full"
            src="/assets/sunglasses-cat.svg"
            alt="sunglasses-cat"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <h2 className="font-header text-4xl mb-6">Create Account</h2>
          <div className="bg-white/5 p-8 rounded-lg px-6">
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => submitForm(e)}
            >
              <section className="flex items-center gap-2 flex-col sm:flex-row">
                <label className="w-full sm:w-28">Email:</label>
                <input
                  disabled={loading}
                  required
                  name="email"
                  type="email"
                  className="outline-none border-2 border-lilac box-border w-full bg-transparent rounded px-2 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </section>
              <section className="flex items-center gap-2 flex-col sm:flex-row">
                <label className="w-full sm:w-28">Username:</label>
                <input
                  disabled={loading}
                  required
                  name="text"
                  type="text"
                  minLength={8}
                  className="outline-none border-2 border-lilac box-border w-full bg-transparent rounded px-2 py-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </section>
              <section className="flex items-center gap-2 flex-col sm:flex-row">
                <label className="w-full sm:w-28">Password:</label>
                <input
                  disabled={loading}
                  required
                  name="password"
                  type="password"
                  minLength={8}
                  className="outline-none border-2 border-lilac box-border w-full bg-transparent rounded px-2 py-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <section className="flex items-center gap-2 flex-col sm:flex-row">
                <label className="w-full sm:w-28">Confirm Password:</label>
                <input
                  disabled={loading}
                  required
                  name="password"
                  type="password"
                  minLength={8}
                  className="outline-none border-2 border-lilac box-border w-full bg-transparent rounded px-2 py-2"
                  value={cfmPassword}
                  onChange={(e) => setCfmPassword(e.target.value)}
                />
              </section>
              {error && (
                <p className="text-red text-sm text-right font-medium">
                  {error}
                </p>
              )}
              {loading ? (
                <Loader small className="mx-auto mt-12" />
              ) : (
                <Button
                  text={"Sign up"}
                  className="mt-12 w-fit mx-auto min-w-[9rem]"
                  withIcon
                />
              )}
            </form>
          </div>
        </div>
      </div>
      <Link
        to="/login"
        className="mx-auto mt-8 text-lg flex items-center gap-2 hover:text-lilac w-fit transition"
      >
        Already have an account? Sign in <BsArrowRight />
      </Link>
    </Layout>
  );
};

export default SignUp;
