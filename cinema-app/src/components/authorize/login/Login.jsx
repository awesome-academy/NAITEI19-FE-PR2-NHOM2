import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../../redux/slices/auth";
import { clearMessage } from "../../../redux/slices/message";
import {toast} from "react-toastify";
import "./Login.scss";
const Login = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user?.role) {
      if (user?.role === 1) {
        navigate("/admin/user");
      } else if (user?.role === 2) {
        navigate("/");
        toast.success("Đăng nhập thành công");
      } else {
        navigate("/login");
      }
    }
  }, [isLoggedIn, navigate]);
  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then((data) => {
        // navigate("/profile");
        if (+data?.EC === 200) {
          if (data?.DT.role === 1) {
            navigate("/admin/user");
          } else if (data?.DT.role === 2) {
            if (data?.DT.status === 0) {
              toast.error("Tài khoản của bạn đã bị khóa");
              return;
            }
            navigate("/");
          } else {
            navigate("/login");
          }
        }else{
          toast.error(data?.EM);
        }
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <div className="card-body">
          <div className="login_label">
            <h3>Đăng nhập & tạo tài khoản</h3>
          </div>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn  btn-block">
                  <span>Đăng nhập</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="login-image">
          <img
            className="image"
            src="https://media.lottecinemavn.com/Media/WebAdmin/c07918028d7e45c7b50df72dc7531f9a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
