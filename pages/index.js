import ArtPiecesPage from "../componets/ArtPieces";
import StyledContainer from "../componets/Container.styled";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading || !pieces) {
    return null;
  }

  if (error) {
    return <h1>OMG</h1>;
  }

  return (
    <StyledContainer>
      <ArtPiecesPage data={pieces}></ArtPiecesPage>
    </StyledContainer>
  );
}
