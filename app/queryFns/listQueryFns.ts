import { fetchClient } from '@/app/client';
import { MedicalFacility } from '@/app/model/MedicalFacility';

export const getListQueryHospital = async () => fetchClient.get<MedicalFacility[]>('hospital');
export const getListQueryPharmacy = async () => fetchClient.get<MedicalFacility[]>('pharmacy');
