import localFont from "next/font/local";
import "./globals.css";


const rocGrotesk = localFont({
  src: "./fonts/1.otf",
  variable: "--font-roc-grotesk",

});
const lightRocGrotesk = localFont({
  src: "./fonts/6.otf",
  variable: "--font-light-roc-grotesk",
});
const condRocGrotesk = localFont({
  src: "./fonts/23.otf",
  variable: "--font-cond-roc-grotesk",
});
const regRocGrotesk = localFont({
  src: "./fonts/7.otf",
  variable: "--font-reg-roc-grotesk",
});
const extRocGrotesk = localFont({
  src: "./fonts/12.otf",
  variable: "--font-ext-roc-grotesk",
});
const mediumRocGrotesk = localFont({
  src: "./fonts/77.otf",
  variable: "--font-medium-roc-grotesk",
});


export const metadata = {
  title: "Penrith's Leading SEO and Digitral Marketing Agency",
  description: "Penrith's Leading SEO and Digitral Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rocGrotesk.variable} ${lightRocGrotesk.variable} ${condRocGrotesk.variable} ${mediumRocGrotesk.variable} ${regRocGrotesk.variable} ${extRocGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
