import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user= false
  const {user} = useSelector(store=>store.auth)
  // const {user} = useSelector(store=>store.auth)
  return (
    <div>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-600">Portal</span>
          </h1>
          <div className="flex items-center gap-12">
            <ul className="flex font-bold items-center gap-5">
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/jobs"}><li>Jobs</li></Link>
              <Link to={"/browse"}><li>Browse</li></Link>
            </ul>
            {
              !user ? (
                    <div className="flex items-center gap-2">
                      <Link to="/login"><Button variant="outline">LogIn</Button></Link>
                      <Link to="/signup"><Button className="bg-purple-700 hover:bg-purple-800">SignUp</Button></Link>

                    </div>
              ):(
            
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-88">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div><h4 className="font-medium">Deepak Gupta</h4>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.{""}</p></div>
                </div>
                <div/>
                <div className="flex flex-col text-gray-600 gap-4 mt-5">
                    
                      <div className="flex w-fit items-center gap-4 cursor-pointer">
                        <User2 />
                      <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                      </div>
                      <div className="flex w-fit items-center gap-4 cursor-pointer">
                        <LogOut />
                      <Button variant="link">Logout</Button>
                      </div>
                     
                </div>

              </PopoverContent>
            </Popover>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
