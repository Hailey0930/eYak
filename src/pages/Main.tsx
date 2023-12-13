import { useState } from "react";
import { getDrugList } from "../api/getDrugList";
import Grid from "../components/Grid";
import * as S from "../styles/Main.styles";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

export default function Main() {
  const [search] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { data, isFetching } = getDrugList(search, page, setTotal);

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput placeholder="약 이름을 검색하세요." />
        <S.SearchIcon />
      </S.SearchContainer>
      <S.ListContainer>
        {isFetching ? (
          <Loading />
        ) : (
          data?.body?.items?.map((item, index) => (
            <Grid key={index} data={item} />
          ))
        )}
      </S.ListContainer>
      <Pagination total={total} page={page} setPage={setPage} />
    </S.Container>
  );
}
