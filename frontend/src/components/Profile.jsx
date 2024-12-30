import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";


const skills = ["Html", "Css","Javascript","React"]
const isResume = true

const Profile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUxsXN4ieOvaBO-1p8OQiE-A1-Y33yfq3Lg&s"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Add Your Bio here</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>deepak@gupta.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9369560031</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1 my-2">
            {
                
                ! skills.length == 0 ? skills.map((item,index) => <Badge key={index}>{item}</Badge>): <span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume ? <a target="blank" href="https://google.com" className="text-blue-500 hover:underline cursor-pointer">Deepak Gupta</a> : <span>NA</span>
            }
        </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl">
            <h1 className="font-bold text-lg my-5">Applied Job</h1>
            {/* Application Table */}
            <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
