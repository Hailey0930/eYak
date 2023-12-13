import { useNavigate } from "react-router";
import * as S from "../../styles/Header.styles";

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Logo onClick={handleLogoClick}>eYak</S.Logo>
    </S.Container>
  );
}
