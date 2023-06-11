import { fetchClient } from '@/app/client';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface Response {
  message : string
  Items : MedicalFacility[];
}

export const getListQueryHospital = async (sigunNm : string) => fetchClient.get<Response>('hospital', { params: { sigunNm } });
export const getListQueryPharmacy = async (sigunNm : string) => fetchClient.get<Response>('pharmacy', { params: { sigunNm } });
export const getReviewFindById = async (reviewId : string) => fetchClient.get<Response>('review', { params: { id: reviewId } });
