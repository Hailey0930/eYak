import { ChangeEvent, useState } from "react";
import { getDrugList } from "../api/getDrugList";
import Grid from "../components/Grid";
import * as S from "../styles/Main.styles";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

export default function Main() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { data, isFetching, refetch } = getDrugList(search, page, setTotal);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    refetch();
    setPage(1);
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput
          placeholder="약 이름을 검색하세요."
          onChange={(e) => handleSearch(e)}
        />
        <S.SearchIcon onClick={handleSearchClick} />
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
