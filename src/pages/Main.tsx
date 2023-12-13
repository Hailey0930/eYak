import Grid from "../components/Grid";
import * as S from "../styles/Main.styles";

export default function Main() {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput placeholder="약 이름을 검색하세요." />
        <S.SearchIcon />
      </S.SearchContainer>

      <S.ListContainer>
        <Grid />
      </S.ListContainer>
    </S.Container>
  );
}
