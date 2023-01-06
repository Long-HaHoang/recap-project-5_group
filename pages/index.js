import ArtPiecesPage from "../componets/ArtPieces";
import StyledContainer from "../componets/Container.styled";

export default function HomePage() {
  return (
    <StyledContainer>
      <h1>Hello from Next.js</h1>
      <ArtPiecesPage></ArtPiecesPage>
    </StyledContainer>
  );
}
