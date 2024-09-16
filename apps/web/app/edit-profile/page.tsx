import React from 'react'
import { Card, CardContent } from '@repo/ui/card';
import { Input } from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { ArrowLeft, User, AtSign } from 'lucide-react';

type Props = {}

const EditProfile = (props: Props) => {
  return (
    <main>
        <ProfileComponent />
    </main>
  )
}

const ProfileComponent = () => {
  return (
    <main className="w-[1440px] h-[1138px] pl-28 pt-8 pr-28 flex gap-[24px]">
      <div className="flex items-center mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="text-sm text-gray-500">Back to Profile</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/profile.svg"
                alt="Profile"
                className="w-full h-auto rounded-t-lg"
              />
              <Button variant="secondary" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4">
                Upload Image
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-2 space-y-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <User className="w-5 h-5 mr-2" />
              <Input placeholder="riturajreal" className="flex-grow" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-4">
              <AtSign className="w-5 h-5 mr-2" />
              <Input placeholder="Anup Singh" className="flex-grow" />
            </CardContent>
          </Card>
          
          <Button className="w-full">Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile