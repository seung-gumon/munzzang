export type ReviewPayload = {
  id: string,
  rate : number,
  comment: string,
  /** 검사 항목 */
  treatmentNm: string,
  userId: string,
  receiptImage : string
};
