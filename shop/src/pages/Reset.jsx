import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";

const Reset = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="grid grid-cols-1 justify-items-center items-center h-screen">
      <div className="w-96">
        <Typography variant="h6" color="blue-gray" className="pb-4">
          Nhập địa chỉ email liên kết với tài khoản của bạn và chúng tôi sẽ gửi
          cho bạn một liên kết để đặt lại mật khẩu.
        </Typography>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 w-full py-3 text-lg"
          />
        </div>

        <Button variant="gradient" fullWidth className="mt-4 text-black border border-gray-400">
          TIẾP TỤC
        </Button>
      </div>
    </div>
  );
};

export default Reset;
