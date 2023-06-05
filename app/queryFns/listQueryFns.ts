import { fetchClient } from '@/app/client';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface Response {
  message : string
  Items : MedicalFacility[];
}

export const getListQueryHospital = async () => fetchClient.get<Response>('hospital');
export const getListQueryPharmacy = async () => fetchClient.get<Response>('pharmacy');
