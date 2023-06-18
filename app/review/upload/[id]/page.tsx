'use client';

import { ChangeEvent, useId } from 'react';
import { IoReceiptOutline } from 'react-icons/io5';
import { bytesToMB } from '@/app/libs/bytesToMb';
import { uploadImageToS3 } from '@/app/libs/s3Utils';

function ReceiptUpload() {
  const htmlFor = useId();
  console.log('process.env.NEXT_PUBLIC_AWS_REGION ::: ', process.env.NEXT_PUBLIC_AWS_REGION);
  const uploadFile = async (e : ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    if (!e.currentTarget.files[0]) return;
    const fileImageURL = await uploadImageToS3(e.currentTarget.files[0]);
    console.log('file Image Url :::', fileImageURL);
  };

  return (
    <>
      <div className="flex flex-col gap-y-3 h-full p-4">
        <p>Hello</p>
      </div>
      <label
        htmlFor={htmlFor}
        className="absolute bottom-4 w-11/12 left-1/2 translate-x-[-50%] bg-primary-clear py-2.5 rounded-md"
      >
        <p className="font-semibold flex items-center justify-center">
          <span>영수증 업로드</span>
          <IoReceiptOutline className="ml-0.5 pt-0.5" />
        </p>
        <input
          id={htmlFor}
          type="file"
          multiple={false}
          className="hidden"
          accept={'image/*'}
          onChange={uploadFile}
        />
      </label>
    </>

  );
}

export default ReceiptUpload;
