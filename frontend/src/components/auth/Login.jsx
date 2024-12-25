import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-8xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-400 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>

          <div>
            <Label>FullName</Label>
            <Input type="text" placeholder="Deepak Gupta" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="deepak@gmail.com" />
          </div>
          <div className="flex items-center justify-between mt-5">
            <RadioGroup className="items-center flex gap-4 my-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-5">
            Login
          </Button>
          <span className="text-sm">Don't have an account ? <Link to={"/signup"} className="text-blue-600 text-sm">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
