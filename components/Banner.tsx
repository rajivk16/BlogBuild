function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 selection:bg-black selection:text-white">
      <div>
        <h1 className="text-7xl">Hi there,</h1>
        <h2 className="mt-5 md:mt:0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#7745f5]">
            Every Technologist's
          </span>{" "}
          favourite blog on Planet Earth 🌍
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-black max-w-sm underline decoration-1 decoration-[#7745f5]">
        Coding & AI | Consumer Technology | Tutorials, Reviews & much more!
      </p>
    </div>
  );
}

export default Banner;
