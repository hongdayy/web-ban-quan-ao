import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../context/AppContext";
import { auth, onAuthStateChanged } from "../firebase/Firebase";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { registerWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      setLoading(false);
    });
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Họ và tên là bắt buộc")
        .min(4, "Tên phải có ít nhất 4 ký tự"),
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      password: Yup.string()
        .required("Mật khẩu là bắt buộc")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      registerWithEmailAndPassword(values.name, values.email, values.password);
    },
  });

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
          <ClipLoader color="#367fd6" size={150} speedMultiplier={0.5} />
        </div>
      ) : (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
          <Card className="w-96 border border-gray-400 shadow-md px-4 py-4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center border border-gray-400"
            >
              <Typography variant="h3" color="black" >
                ĐĂNG KÝ
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-4 mb-2">
                  <Typography variant="small" color="blue-gray">
                    Họ và tên
                  </Typography>
                  <Input
                    name="name"
                    type="text"
                    size="lg"
                    {...formik.getFieldProps("name")}
                    className="border border-gray-300"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <Typography variant="small" color="red">
                      {formik.errors.name}
                      
                    </Typography>
                  )}
                </div>
                <div className="mt-4 mb-2">
                  <Typography variant="small" color="blue-gray">
                    Email
                  </Typography>
                  <Input
                    name="email"
                    type="email"
                    size="lg"
                    {...formik.getFieldProps("email")}
                    className="border border-gray-300"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Typography variant="small" color="red">
                      {formik.errors.email}
                    </Typography>
                  )}
                </div>
                <div className="mt-4 mb-2">
                  <Typography variant="small" color="blue-gray">
                    Mật khẩu
                  </Typography>
                  <Input
                    name="password"
                    type="password"
                    size="lg"
                    {...formik.getFieldProps("password")}
                    className="border border-gray-300"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <Typography variant="small" color="red">
                      {formik.errors.password}
                    </Typography>
                  )}
                </div>
                <Button variant="gradient" fullWidth type="submit" className="mt-4 mb-4 bg-blue-600">
                  ĐĂNG KÝ
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="mt-6 flex font-roboto text-base justify-center">
                Bạn đã có tài khoản?
                <Link to="/login">
                  <p className="ml-1 font-bold text-base text-blue-500">Đăng nhập</p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Register;
