import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 bg-white px-4 py-16 dark:bg-black sm:px-8 sm:py-32">
        <Image
          className="h-45 w-45 object-cover rounded-full sm:h-72 sm:w-72"
          src="/founder.webp"
          alt="Profile image"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center ">
          <h1 className="text-brand text-4xl font-bold leading-[1.15] sm:text-6xl">
            TAILWIND CSS PRACTICE
          </h1>

          <p className="max-w-xs text-lg leading-7 text-black dark:text-zinc-50">
            Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes
            to help you build responsive and customizable user interfaces quickly.
            It allows you to apply styles directly in your HTML or JSX, making it easy to create
            complex designs without writing custom CSS.
          </p>

          </div>
      </main>
    </div>
  );
}
