import { Open_Sans, Cormorant_Garamond } from "next/font/google";

export const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
