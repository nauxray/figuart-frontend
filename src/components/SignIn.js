import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Api from "../utils/api";
import Button from "./Common/Button";
import Layout from "./Layout/Layout";
import Loader from "./Common/Loader";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    const api = new Api();
    const res = await api.login({ email, password });

    if (res.data.error) {
      setLoading(false);
      return setError(true);
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
    if (error && (email.trim().length > 0 || password.trim().length > 0)) {
      setError(false);
    }
  }, [email, password]);

  return (
    <Layout className="mt-20 px-8 lg:px-0">
      <div className="max-w-[50rem] gap-8 justify-between flex items-end mx-auto">
        <div className="w-2/6 hidden sm:block">
          <img
            className="w-full"
            src="/assets/sunglasses-cat.svg"
            alt="sunglasses-cat"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <h2 className="font-header text-4xl mb-6">Sign In</h2>
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
              {error && (
                <p className="text-red text-sm text-right font-medium">
                  Invalid credentials!
                </p>
              )}
              {loading ? (
                <Loader small className="mx-auto mt-12" />
              ) : (
                <Button
                  text={"Sign in"}
                  className="mt-12 w-fit mx-auto min-w-[9rem]"
                  withIcon
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
