import Image from "next/image";

import StyledListContainer from "../ListContainer.styled";
import ArtistName from "../ArtistName.styled";
import PiecesTitel from "../PiecesTitel.styled";

export default function Card({ pieceName, pieceImg, artistName }) {
  return (
    <StyledListContainer>
      <li>
        <PiecesTitel>{pieceName}</PiecesTitel>
      </li>
      <li>
        <Image src={pieceImg} alt="" height={300} width={300}></Image>
      </li>
      <ArtistName>
        <p>{artistName}</p>
      </ArtistName>
    </StyledListContainer>
  );
}
