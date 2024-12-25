import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const Signup = () => {
  const [input, setInput] = useState({
    fullname:"",
    email:"",
    phonenumber:"",
    password:"",
    roll:"",
    file:"",
  })
  // const cheaked = false;
  const changeEventHandler = (e) =>{
    setInput({...input,[e.target.value]:e.target.value});
  }
  const changefileHandler = (e) =>{
    setInput({...input,file:e.target.files?.[0]});
  }
  const submitHandler = async(e) =>{
    e.preventDefault();
    console.log(input)
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-8xl mx-auto">
      <form onSubmit={submitHandler} className="w-1/2 border border-gray-400 rounded-md p-4 my-10">
        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
        <div>
        <Label>FullName</Label>
        <Input 
        type="text" 
        value={input.fullname}
        name="fullname" 
        onChange={changeEventHandler} 
        placeholder="Deepak Gupta" />
        </div>
        <div>
        <Label>Email</Label>
        <Input 
        type="email" 
        value={input.email}
        name="email" 
        onChange={changeEventHandler} 
        placeholder="deepak@gmail.com" />
        </div>
        <div>
        <Label>Phone Number</Label>
        <Input type="text" value={input.phonenumber} onChange={changeEventHandler} placeholder="9999999999" />
        </div>
        <div>
        <Label>Password</Label>
        <Input type="password" value={input.password} onChange={changeEventHandler} placeholder="Enter password" />
        </div>
        <div className="flex items-center justify-between">
            <RadioGroup className="items-center flex gap-4 my-5" >
                <div className="flex items-center space-x-2">
                    <Input 
                    type="radio" 
                    name="role" 
                    value="student" 
                    cheaked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer" />
                        <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                <Input 
                type="radio" 
                name="role" 
                value="student"
                cheaked={input.role === "recruiter"}
                onChange={changeEventHandler} 
                className="cursor-pointer" />
                        <Label htmlFor="r2">Recruiter</Label>
                </div>
            </RadioGroup>
            <div className="flex items-center gap-2 mt-3">
                <Label>Profile</Label>
                <Input accept="img/*" type="file"
                onChange={changefileHandler} className="cursor-pointer" />
            </div>
        </div>
        <Button type="submit" className="w-full my-5">Sign Up</Button>
        <span className="text-sm">Already have an account ? <Link to={"/login"} className="text-blue-600 text-sm">Login</Link></span>
      </form>
      </div>
    </div>
  );
};

export default Signup;
