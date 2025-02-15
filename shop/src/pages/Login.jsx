import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../context/AppContext";
import { auth, onAuthStateChanged } from "../firebase/Firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, loginWithEmailAndPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required(""),
    password: Yup.string()
      .required("")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .matches(/^[a-zA-Z]+$/, "Mật khẩu chỉ được chứa chữ cái"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (formik.isValid) {
      loginWithEmailAndPassword(email, password);
      setLoading(true);
    } else {
      setLoading(false);
      alert("Vui lòng kiểm tra lại thông tin nhập");
    }
  };

  const formik = useFormik({ initialValues, validationSchema, handleSubmit });

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
          <ClipLoader color="#367fd6" size={150} speedMultiplier={0.5} />
        </div>
      ) : (
        <div className="grid grid-cols-1 h-screen justify-items-center items-center">
          <Card className="w-96 border border-gray-400 shadow-md px-4 py-4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center border border-gray-400 "
            >
              <Typography variant="h3" color="black">
                ĐĂNG NHẬP
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleSubmit}>
                <div className="mt-4 mb-2">
                  <Typography variant="small" className="w-24">
                    Email:
                  </Typography>
                  <Input
                    name="email"
                    type="email"
                    size="lg"
                    {...formik.getFieldProps("email")}
                    className="w-full border border-gray-400"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <Typography variant="small" color="red">
                    {formik.errors.email}
                  </Typography>
                )}

                <div className="mt-4 mb-2">
                  <Typography variant="small" className="w-24">
                    Mật khẩu:
                  </Typography>
                  <Input
                    name="password"
                    type="password"
                    size="lg"
                    {...formik.getFieldProps("password")}
                    className="w-full border border-gray-400"
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <Typography variant="small" color="red">
                    {formik.errors.password}
                  </Typography>
                )}

                <Button
                  variant="gradient"
                  fullWidth
                  className="mt-4 mb-4 bg-blue-600"
                  type="submit"
                >
                  Đăng nhập
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                className="mb-4 bg-red-600"
                onClick={signInWithGoogle}
              >
                Đăng nhập bằng Google
              </Button>
              <Link to="/reset">
                <p className="text-blue-500 text-center text-sm font-bold">
                  Quên mật khẩu?
                </p>
              </Link>
              <div className="mt-6 flex items-center justify-center text-base">
                Chưa có tài khoản?
                <Link to="/register">
                  <p className="ml-1 font-bold text-sm text-blue-500">
                    Đăng ký ngay
                  </p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Login;
