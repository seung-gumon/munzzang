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
  /**
   * 병원의 전화번호 입니다.
   */
  'telNo' : string | null,
  /**
   * 병원의 우편번호 입니다.
   */
  zipCode : string,
  /**
   * 병원의 별점 점수 입니다.
   */
  rate : null | number,
  /**
   * 리뷰 총 개수
   */
  reviewCount : null | number,
  /**
   * 리뷰의 상태 입니다.
   */
  status : string
  createTime : Date,
  updateTime : Date,
};
