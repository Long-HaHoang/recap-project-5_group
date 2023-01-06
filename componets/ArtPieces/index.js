import Card from "../Card";
import CardContainer from "../CardContainer.styled";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <h1>Pieces</h1>
      <CardContainer>
        {data.map((artwork) => {
          return (
            <li key={artwork.slug}>
              <Card
                pieceName={artwork.name}
                pieceImg={artwork.imageSource}
                artistName={artwork.artist}
              ></Card>
            </li>
          );
        })}
      </CardContainer>
    </>
  );
}
