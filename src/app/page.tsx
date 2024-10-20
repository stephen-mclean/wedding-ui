export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center bg-[url('/flowers.png')] bg-no-repeat bg-contain pt-32 sm:pt-48 bg-left-bottom">
      <div className="flex flex-col gap-2 text-center text-balance">
        <h1 className="font-serif text-4xl">
          <span className="text-primary">Ilaria</span> and{" "}
          <span className="text-primary">Stephen</span>
        </h1>
        <h2 className="font-serif text-2xl">
          invite you for a day of dancing, drinking, eating, love, and fun
        </h2>
        <h2 className="font-serif text-2xl">
          ...and also to celebrate their wedding :)
        </h2>
        <h2 className="font-serif text-2xl font-semibold">
          20th September 2025
        </h2>
      </div>
    </div>
  );
}
