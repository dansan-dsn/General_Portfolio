import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="pb-6">coder</div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
