import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { register } from "../../../redux/slices/auth";
import { clearMessage } from "../../../redux/slices/message";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    phonenumber: "",
  };
  const handleRegister = (formValue) => {
    const { username, email, password, phonenumber } = formValue;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      phonenumber === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    //viet nam regex
    const regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!regex.test(phonenumber)) {
      toast.error("Số điện thoại không hợp lệ");
      return;
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (password !== formValue.passwordAgain) {
      toast.error("Mật khẩu không khớp");
      return;
    }
    setSuccessful(false);
    dispatch(register({ username, email, password, phonenumber }))
      .unwrap()
      .then((data) => {
        setSuccessful(true);
        if (+data?.EC === 200) {
          toast.success(data?.EM);
          navigate("/login");
        } else {
          toast.error(data?.EM);
          //set formValue = "";
        }
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        <div className="card-body">
          <div className="login_label">
            <h3>Đăng ký</h3>
          </div>
          <Formik initialValues={initialValues} onSubmit={handleRegister}>
            <Form>
              <div>
                <div className="form-group">
                  <label htmlFor="username">Tài khoản</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
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
                  <label htmlFor="password">Nhập lại mật khẩu</label>
                  <Field
                    name="passwordAgain"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="passwordAgain"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="phone">
                  <label htmlFor="phonenumber">Số điện thoại</label>
                  <Field
                    name="phonenumber"
                    type="phonenumber"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phonenumber"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn  btn-block">
                    Đăng ký
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="login-image">
          <img
            src="https://media.lottecinemavn.com/Media/WebAdmin/c07918028d7e45c7b50df72dc7531f9a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
