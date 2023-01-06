import Image from "next/image";
import styled from "styled-components";


export default function Card() {
  return (
    <styledDiv>
    <ul>
      <li>
        <h2>Orange Red and Green Abstract Painting</h2>
      </li>
      <li>
        <Image
          src={
            "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
          }
          alt=""
          height={300}
          width={300}
        ></Image>
      </li>
      <li>
        <p>Steve Johnson</p>
      </li>
    </ul>

<ul>
<li>
  <h2>Blue and Red</h2>
</li>
<li>
  <Image
    src={
      "https://example-apis.vercel.app/assets/art/blue-and-red.jpg"
    }
    alt=""
    height={300}
    width={300}
  ></Image>
</li>
<li>
  <p>Jung-Hua Lui</p>
</li>
</ul>

<ul>
      <li>
        <h2>Clay Bust Sculptures</h2>
      </li>
      <li>
        <Image
          src={
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg"
          }
          alt=""
          height={300}
          width={300}
        ></Image>
      </li>
      <li>
        <p>dilara irem</p>
      </li>
    </ul>
    </styledDiv>
  );
}

const styledDiv = styled.div `
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
