export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center">

        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-yellow-400">
            Sanskriti Designer
          </span>
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Handmade fashion • Saree painting • Jewellery
        </p>

      </div>
    </footer>
  );
}
