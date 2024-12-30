import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <sapn className="mx-auto py-2 px-4 rounded-full bg-gray-100 text-red-500 font-medium">No.1 JobPortal Website</sapn>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-purple-600">Dream Jobs</span>
        </h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          quaerat nesciunt laborum iusto magni enim dolorum impedit, sapiente
          quos beatae.
        </p>
        <div className="flex w-[40%] shadow-lg border border-y-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input type="text" placeholder="Find your dream job" className="outline-none border-none w-full" />
            <Button className="rounded-r-full bg-purple-600">
                <Search className="h-5 w-5"/>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
