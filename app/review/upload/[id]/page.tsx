'use client';

import {
  ChangeEvent, Dispatch, SetStateAction, useEffect, useId, useState,
} from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { IoReceiptOutline } from 'react-icons/io5';
import Image from 'next/image';
import { uploadImageToS3 } from '@/app/libs/s3Utils';
import { useMutation } from '@tanstack/react-query';
import { fetchClient } from '@/app/client';
import { useParams } from 'next/navigation';
import { ReviewPayload } from '@/app/model/Review';
import RenderReviews from '@/app/review/components/ReviewsList';
import { reviewList } from '@/app/util/constant';
import Table from '@/app/components/Table';
import Button from '@/app/components/Button';

function ReceiptUpload() {
  const htmlFor = useId();
  const reviewFor = useId();
  const params = useParams();
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const [receipt, setReceipt] = useState<string>('https://petnmat-dev.s3.ap-northeast-2.amazonaws.com/gcp_ocr.jpeg');
  const [isConfirmedReview, setIsConfirmedReview] = useState<boolean>(false);

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
      // const fileImageUrl = 'https://petnmat-dev.s3.ap-northeast-2.amazonaws.com/image_1689502689917_zxcvzxf.jpeg'

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
    <section className="w-full flex gap-y-3 h-full p-4 justify-center">
      <div className="text-xl w-full">
        {!receipt
          ? (
            <section className="bg-white py-2.5 text-base flex flex-col max-w-md mx-auto">
              <article className="font-semibold">
                <h2>
                  영수증을 선택 후
                  <br />
                  리뷰를 작성해보세요!
                </h2>
              </article>

              <label
                htmlFor={htmlFor}
                className=""
              >
                <div className="flex flex-col px-4 py-2.5 rounded border-gray-200 border-[1px] shadow-md w-full mt-3 cursor-pointer">
                  <div className="flex items-center">
                    <h4 className="font-semibold">영수증으로 인증</h4>
                    <IoReceiptOutline className="ml-0.5 pt-0.5 font-semibold " />
                  </div>
                  <span className="text-sm">방문한 곳 영수증 찍고 인증</span>
                </div>
                <input
                  id={htmlFor}
                  type="file"
                  multiple={false}
                  className="hidden"
                  accept={'image/*'}
                  onChange={uploadFile}
                />
              </label>
            </section>
          )
          : (
            <>
              {/* <Image src={receipt} width={400} height={750} alt="receipt" className="mx-auto rounded-md m-4" /> */}

              {!isConfirmedReview
                ? (
                  <>
                    <section>
                      <article className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="flex items-center font-semibold justify-center w-full">
                          도마 중림동점
                          <span className="text-sm font-normal mx-1.5">한식</span>
                        </h2>
                        <h4 className="text-sm w-full flex items-center justify-center">
                          서울특별시 중구 중림로 31 이화빌딩 1층
                        </h4>
                        {/* <div className="flex items-center justify-center text-xs"> */}
                        {/*  <div className="border-[1px] border-gray-200 w-fit p-1.5 mx-1.5"> */}
                        {/*    지번 */}
                        {/*  </div> */}
                        {/*  <span>종림동 150-1</span> */}
                        {/* </div> */}
                        {/* <div className="flex rounded-md text-xs py-1.5 px-2.5 border-gray-200 border-[1px]"> */}
                        {/*  이 장소가 아니라면, */}
                        {/*  <span className="font-semibold text-sky-500 pl-1.5 cursor-pointer">수정하기</span> */}
                        {/* </div> */}
                      </article>
                    </section>
                    <section className="flex items-center justify-around w-full max-w-sm mx-auto my-3">
                      <article>
                        <h4 className="font-semibold">2023년</h4>
                        <h3>6월 15일 목</h3>
                      </article>
                      <Image src={receipt} width={80} height={80} alt="receipt" className="rounded-md" />
                    </section>
                    <section className="max-w-lg flex items-center justify-center">
                      <Table>
                        <Table.Head>
                          <Table.Row values={['진단명', '단가', '수량', '금액']} />
                        </Table.Head>
                        <Table.Body>
                          <Table.Row values={['뿌빳뽕커리', '12,000', '3', '12,000']} />
                          {/* More rows as needed */}
                        </Table.Body>
                      </Table>
                    </section>
                    <div className="absolute bottom-4 w-full px-4 left-1/2 translate-x-[-50%] ">
                      <Button
                        loading={false}
                        onClick={() => setIsConfirmedReview(true)}
                        type="button"
                        className="bg-primary-clear py-2.5 rounded-md w-full"
                      >
                        <p className="font-semibold flex items-center justify-center">
                          <span>다음</span>
                          <AiOutlineRight className="ml-0.5 pt-0.5" />
                        </p>
                      </Button>
                    </div>
                  </>
                )
                : (
                  <>
                    <label
                      htmlFor={reviewFor}
                      className="block mb-2 text-sm font-semibold"
                    >
                      리뷰 한마디!
                    </label>
                    <textarea
                      id={reviewFor}
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="진짜 존맛탱~"
                    />

                    <h3 className="font-semibold text-sm mt-8">어떤점이 좋았나요 ?</h3>
                    <RenderReviews
                      reviews={reviewList}
                      selected={selectedReview}
                      setSelected={setSelectedReview}
                      render={({ review, selected, setSelected }) => (
                        <li
                          key={review.id}
                          className={`cursor-pointer hover:bg-primary-clear/[0.6] relative rounded-md p-3 bg-primary-clear/[0.3] ${selected === review.id ? 'bg-primary-clear/[0.6]' : ''}`}
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
                  </>
                )}
            </>
          )}
        <div className="absolute bottom-4 w-full px-4 left-1/2 translate-x-[-50%]">
          <Button
            loading={false}
            value={!isConfirmedReview ? '다음' : '확인'}
            // className="bg-primary-clear py-2.5 rounded-md w-full"
            onClick={() => (!isConfirmedReview ? setIsConfirmedReview(true) : console.log('confirm Review'))}
          />
        </div>
      </div>
    </section>
  );
}

export default ReceiptUpload;
