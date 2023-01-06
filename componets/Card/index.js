import Image from "next/image";

export default function Card() {
  return (
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
  );
}
