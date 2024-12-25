import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [user, setuser] = useState(false)
  return (
    <div>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-600">Portal</span>
          </h1>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Jobs</li>
              <li>Browse</li>
            </ul>
            {
              !user ? (
                    <div className="flex items-center gap-2">
                      <Button variant="outline">Login</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Signup</Button>

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
                      <button variant="link">View Profile</button>
                      </div>
                      <div className="flex w-fit items-center gap-4 cursor-pointer">
                        <LogOut />
                      <button variant="link">Logout</button>
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
