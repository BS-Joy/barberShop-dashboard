import AuthBanner from "./AuthBanner";

export default function AuthLayoutWrapper({ children }) {
  return (
    <div className="min-h-[92vh] h-full w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8">
      <AuthBanner />
      <div className="lg:p-[5%] order-first lg:order-last h-full bg-[#ECE8EA] flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
