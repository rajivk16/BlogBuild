import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://randomuser.me/api/portraits/lego/2.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The Tech Blog</h1>
      </div>
      <div>
        <Link
          href="http://rajivkulkarni-portfolio.vercel.app/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
            Click here to visit my Portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
