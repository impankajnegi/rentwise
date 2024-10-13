import Footer from "@/components/Footer";
import MainHeader from "@/components/Header/MainHeader";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "RentWise | Smarter Gadget Rentals",
  description:
    "At RentWise, you can turn your unused gadgets into a source of income. Simply give us your devices for a selected time duration, and we'll rent them out to others. Whether it's a smartphone, laptop, or gaming console, we'll handle the process and ensure your gadgets are in good hands. In return, you will receive regular payments for every rental. Its a hassle-free way to make money from your tech without selling it.Let your gadgets work for you with RentWise!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader></MainHeader>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
