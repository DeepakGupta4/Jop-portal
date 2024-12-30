import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
    const jobId = "dsvjsbkshc";
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-600'>2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <Button variant="outline" className="p-6" size="icon">
                <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUxsXN4ieOvaBO-1p8OQiE-A1-Y33yfq3Lg&s" />
                </Avatar>
            </Button>
            <div>
                <h1>Company Name</h1>
                <p>India</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Position</Badge>
            <Badge className={"text-red-700 font-bold"} variant="ghost">Part Time</Badge>
            <Badge className={"text-purple-700 font-bold"} variant="ghost">2Lpa</Badge>
            
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button onClick={()=> navigate(`/jobs/description/${jobId}`)} variant="outline">Details</Button>
            <Button className="bg-purple-700">Save For Later</Button>
        </div>
    </div>
  )
}

export default Job