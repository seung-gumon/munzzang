'use client';

import {
  ChangeEvent, Dispatch, SetStateAction, useId, useState,
} from 'react';
import { IoReceiptOutline } from 'react-icons/io5';
import { bytesToMB } from '@/app/libs/bytesToMb';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { uploadImageToS3 } from '@/app/libs/s3Utils';
import { useMutation } from '@tanstack/react-query';
import { fetchClient } from '@/app/client';
import { useParams } from 'next/navigation';
import { ReviewPayload } from '@/app/model/Review';
import { reviewList } from '@/app/util/constant';

interface Review {
  id: number;
  title: string;
  reviewCount: number;
}

interface ReviewItemProps {
  review: Review;
  selected: number | null;
  setSelected: (id: number | null) => void;
}

interface RenderReviewsProps {
  reviews: Review[];
  render: (props: ReviewItemProps) => JSX.Element;
  selected: number | null;
  setSelected : Dispatch<SetStateAction<number | null>>
}

function RenderReviews({
  reviews, render, selected, setSelected,
}: RenderReviewsProps) {
  return (
    <ul className="flex flex-col gap-y-2">
      {reviews.map((review) => render({ review, selected, setSelected: (id : number | null) => setSelected(id) }))}
    </ul>
  );
}

function ReceiptUpload() {
  const htmlFor = useId();
  const params = useParams();
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const [receipt, setReceipt] = useState<string>('');

  const { reviewMutation, isLoading } = useMutation((variables: ReviewPayload) => fetchClient.post('/review', variables), {
    onSuccess: (data) => {

    },
    onError: (error) => {

    },
  });

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.currentTarget.files) return;
      if (!e.currentTarget.files[0]) return;
      const fileImageURL = await uploadImageToS3(e.currentTarget.files[0]);

      return setReceipt(fileImageURL);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log('Upload File Error', e);
      }
    }
  };

  const postReview = () => {
    try {
      const medicalId = (params?.id || '') as string;

      // const fileImageUrl = 'https://petnmat-dev.s3.ap-northeast-2.amazonaws.com/gcp_ocr.jpeg';

      const body: ReviewPayload = {
        id: medicalId,
        rate: 4.5,
        comment: 'Very good',
        treatmentNm: '쓸개골',
        userId: 'test_user_id',
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log('Catch the Exception');
      }
    }
  };

  return (
    <>
      <section className="w-full flex gap-y-3 h-full p-4 items-center justify-center">
        <div className="font-semibold text-xl w-full">
          <img src="https://petnmat-dev.s3.ap-northeast-2.amazonaws.com/image_1687183230735_review-2.jpeg" alt="영수증" />
          <h2>인증 방법을 선택 후</h2>
          <RenderReviews
            reviews={reviewList}
            selected={selectedReview}
            setSelected={setSelectedReview}
            render={({ review, selected, setSelected }) => (
              <li
                key={review.id}
                className={`relative rounded-md p-3 bg-primary-clear/[0.3] ${selected === review.id ? 'selected-style' : ''}`}
                onClick={() => setSelected(review.id)}
              >
                <h3 className="text-sm font-medium leading-5">
                  {review.title}
                  <span className="ml-1">
                    {`(${review.reviewCount.toLocaleString()})`}
                  </span>
                </h3>
              </li>
            )}
          />
        </div>
      </section>
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
