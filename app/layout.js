import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Script from "next/script";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1263903450171291"
          crossorigin="anonymous"></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RVP4L9F5QF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RVP4L9F5QF');
  `}
        </Script>

      </head>
      <body
        className="bg-white dark:bg-black"
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <div className="mt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
