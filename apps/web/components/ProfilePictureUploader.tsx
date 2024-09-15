"use client";

import React, { useRef, useState } from 'react';
import { Button } from '@repo/ui/button';

const ProfilePictureUploader = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative mb-2">
      <img
        src={image || "/profile.svg"}
        alt="Profile"
        className="w-full aspect-square object-cover"
      />
      <Button
        variant="secondary"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full bg-gray-800 text-white hover:bg-gray-700"
        onClick={handleButtonClick}
      >
        Upload Image
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureUploader;
