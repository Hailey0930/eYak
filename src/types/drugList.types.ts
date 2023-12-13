export interface IDrugListItem {
  entpName: string; // 업체명
  itemName: string; // 제품명
  itemSeq: number; // 품목기준코드
  efcyQesitm: string; // 효능
  useMethodQesitm: string; // 사용법
  atpnWarnQesitm: string; // 주의사항경고
  atpnQesitm: string; // 주의사항
  intrcQesitm: string; // 상호작용
  seQesitm: string; // 부작용
  depositMethodQesitm: string; // 보관법
  openDe: string; // 공개일자
  updateDe: string; // 수정일자
  itemImage: string; // 낱알이미지
  bizrno: string;
}

export interface IDrugListResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: IDrugListItem[];
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}
