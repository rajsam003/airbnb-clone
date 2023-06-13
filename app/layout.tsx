import Navbar from "@/app/components/navbar/Navbar"
import "./globals.css"
import { Inter, Nunito } from "next/font/google"
import RegisterModal from "@/app/components/modals/RegisterModal"
import ToasterProvider from "@/app/providers/ToasterProvider"

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
