import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://randomuser.me/api/portraits/lego/6.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
