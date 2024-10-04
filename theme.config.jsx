import Image from "next/image";

const themeConfig = {
  logo: (
    <>
      <Image
        src="/images/emonkhan.me.png"
        width={220}
        height={100}
        alt="Logo"
      />
    </>
  ),
  project: {
    link: "https://github.com/codersemon/notesdoc",
  },
  backgroundColor: {
    dark: "11, 17, 32",
  },
  footer: {
    content: "Develop by Emon Khan",
  },
};
export default themeConfig;
