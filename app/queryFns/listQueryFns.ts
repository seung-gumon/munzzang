import { fetchClient } from '@/app/client';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface Response {
  message : string
  Items : MedicalFacility[];
}

export const getListQueryHospital = async (sigunNm : string) => fetchClient.get<Response>('hospital', { params: { sigunNm } });
export const getListQueryPharmacy = async (sigunNm : string) => fetchClient.get<Response>('pharmacy', { params: { sigunNm } });
export const getPharmacyFindOneById = async (pharmacyId : string) => fetchClient.get<Response>('pharmacy', { params: { id: pharmacyId } });
export const getHospitalFindOneById = async (hospitalId : string) => fetchClient.get<Response>('hospital', { params: { id: hospitalId } });
export const getReviewFindById = async (reviewId : string) => fetchClient.get<Response>('review', { params: { id: reviewId } });
export const postReview = async (review : any) => fetchClient.post<Response>('review', review);
