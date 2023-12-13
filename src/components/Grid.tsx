import * as S from "../styles/Grid.styles";
import { IGridProps } from "../types/Grid.types";

export default function Grid({ data }: IGridProps) {
  return (
    <S.GridContainer>
      <S.PhotoContainer>
        {data.itemImage ? <img src={data.itemImage} /> : <S.ImageIcon />}
      </S.PhotoContainer>
      <S.InfoContainer>
        <S.MedicineName>{data.itemName}</S.MedicineName>
        <S.DetailContainer>
          <S.Detail className="title">업체명</S.Detail>
          <S.Detail>{data.entpName}</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">효능</S.Detail>
          <S.Detail>{data.efcyQesitm}</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">사용법</S.Detail>
          <S.Detail>{data.useMethodQesitm}</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">주의사항</S.Detail>
          <S.Detail>{data.atpnWarnQesitm}</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">부작용</S.Detail>
          <S.Detail>{data.seQesitm}</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">보관법</S.Detail>
          <S.Detail>{data.depositMethodQesitm}</S.Detail>
        </S.DetailContainer>
      </S.InfoContainer>
    </S.GridContainer>
  );
}
