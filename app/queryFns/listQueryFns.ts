import { fetchClient } from '@/app/client';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface Response {
  message : string
  Items : MedicalFacility[];
}

export const getListQueryHospital = async (sigunNm : string) => fetchClient.get<Response>('hospital', { params: { sigunNm } });
export const getListQueryPharmacy = async (sigunNm : string) => fetchClient.get<Response>('pharmacy', { params: { sigunNm } });
export const getMedicalFindById = async (id : string) => fetchClient.get<Response>('medical', { params: { id } });
