export type MedicalFacility = {
  /**
   * 병원의 고유 식별자입니다.
   */
  'id': string,
  /**
   * 병원이 위치한 시/도의 이름입니다.
  */
  'sidoNm': string,
  /**
   * 병원이 위치한 시/군의 이름입니다.
   */
  'sigunNm': string,
  /**
   * 병원의 상호명 또는 사업장 이름입니다.
   */
  'bizPlcNm': string,
  /**
   * 병원의 도로명 주소입니다.
   */
  'roadNmAddr': string,
  /**
   * 병원의 지번 주소입니다.
   */
  'lotNoAddr': string,
  /**
   * 병원의 위도 좌표입니다.
   */
  'lat': number,
  /**
   * 병원의 경도 좌표입니다.
   */
  'lng': number,
  'telNo' : string,
  zipCode : string,
  createTime : Date,
  updateTime : Date,

};
