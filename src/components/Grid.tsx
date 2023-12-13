import * as S from "../styles/Grid.styles";

export default function Grid() {
  return (
    <S.GridContainer>
      <S.PhotoContainer></S.PhotoContainer>
      <S.InfoContainer>
        <S.MedicineName>약 이름</S.MedicineName>
        <S.DetailContainer>
          <S.Detail className="title">업체명</S.Detail>
          <S.Detail>업체명</S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">효능</S.Detail>
          <S.Detail>
            효능효능효능효능효능효능효능효능효능효능효능효능효능
          </S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">사용법</S.Detail>
          <S.Detail>
            사용법사용법사용법사용법사용법사용법사용법사용법사용법사용법사용법사용법사용법
          </S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">주의사항</S.Detail>
          <S.Detail>
            주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항
          </S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">부작용</S.Detail>
          <S.Detail>
            부작용부작용부작용부작용부작용부작용부작용부작용부작용
          </S.Detail>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Detail className="title">보관법</S.Detail>
          <S.Detail>보관법보관법보관법보관법보관법보관법보관법</S.Detail>
        </S.DetailContainer>
      </S.InfoContainer>
    </S.GridContainer>
  );
}
