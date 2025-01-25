import image from "../../assets/images/Logo.png";

export default function AuthBanner() {
  return (
    <div className="mx-auto lg:p-[15%] lg:pr-[20%]">
      <img src={image} alt="" />
    </div>
  );
}
