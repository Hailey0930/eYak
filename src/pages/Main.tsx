import { useState } from "react";
import { getDrugList } from "../api/getDrugList";
import Grid from "../components/Grid";
import * as S from "../styles/Main.styles";

export default function Main() {
  const [search] = useState("");
  const [page] = useState(1);
  const [, setTotal] = useState(0);

  const { data } = getDrugList(search, page, setTotal);

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput placeholder="약 이름을 검색하세요." />
        <S.SearchIcon />
      </S.SearchContainer>

      <S.ListContainer>
        {data?.body.items.map((item) => <Grid key={item.bizrno} data={item} />)}
      </S.ListContainer>
    </S.Container>
  );
}
