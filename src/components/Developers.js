import Link from "next/link";

export default function DeveloperPage() {
  return (
    <main className="min-h-screen flex-wrap gap-3 bg-gradient-to-tr from-bgl1 to-bgl2 dark:from-bgd1 dark:to-bgd2 text-indigo-900 px-6 py-10 flex items-center justify-center">
      <h1 className="w-full text-center text-5xl text-white">Developers</h1>
      <div className="max-w-xl w-full bg-bgl1 dark:bg-bgd2 border dark:border-bord shadow dark:shadow-shadl rounded-3xl p-8 md:p-12 text-center">
        <img
          src="https://absabur.vercel.app/Md_Abdus_Sabur.png" // Replace with your image
          alt="Md Abdus Sabur"
          className="w-32 h-32 rounded-full mx-auto shadow-md mb-6 border-4 border-purple-300 object-cover"
        />

        <h1 className="text-3xl font-bold text-purple-700">Md Abdus Sabur</h1>
        <p className="mt-2 text-lg text-gray-700 font-medium">
          Web Developer | MERN Stack Developer
        </p>
        <p className="mt-4 text-gray-600">
          A passionate Computer Science student at Bogura Polytechnic Institute.
          Experienced in full-stack development, web scraping, and
          microcontroller-based systems. Focused on creating accessible
          solutions for students and educators.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            href="mailto:abdussabur929@gmail.com"
            className="text-purple-700 hover:underline"
          >
            📧 absabur929@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/ab-sabur"
            target="_blank"
            className="text-purple-700 hover:underline"
          >
            🔗 LinkedIn
          </Link>
          <Link
            href="https://absabur.vercel.app/"
            target="_blank"
            className="text-purple-700 hover:underline"
          >
            🔗 Portfolio
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-bgl2 dark:bg-bgd1 border dark:border-bord rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-800 mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="p-4 bg-bgl2 dark:bg-bgd1 border dark:border-bord rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-800 mb-2">
              Backend & Tools
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js & Express</li>
              <li>MongoDB & Mongoose</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-xl w-full bg-bgl1 dark:bg-bgd2 border dark:border-bord shadow dark:shadow-shadl rounded-3xl p-8 md:p-12 text-center">
        <img
          src="https://rahadmondal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-avatar.33bbb057.png&w=128&q=75" // Replace with your image
          alt="Md Abdus Sabur"
          className="w-32 h-32 rounded-full mx-auto shadow-md mb-6 border-4 border-purple-300 object-cover"
        />

        <h1 className="text-3xl font-bold text-purple-700">Md A Rahad Mondal</h1>
        <p className="mt-2 text-lg text-gray-700 font-medium">
          Web Developer | MERN Stack Developer
        </p>
        <p className="mt-4 text-gray-600">
          A passionate Computer Science student at Bogura Polytechnic Institute.
          Experienced in full-stack development, web scraping, and
          microcontroller-based systems. Focused on creating accessible
          solutions for students and educators.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            href="mailto:rahadmondal165@gmail.com"
            className="text-purple-700 hover:underline"
          >
            📧 rahadmondal165@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/rahad-mondal/"
            target="_blank"
            className="text-purple-700 hover:underline"
          >
            🔗 LinkedIn
          </Link>
          <Link
            href="https://rahadmondal.vercel.app/"
            target="_blank"
            className="text-purple-700 hover:underline"
          >
            🔗 Portfolio
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-bgl2 dark:bg-bgd1 border dark:border-bord rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-800 mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="p-4 bg-bgl2 dark:bg-bgd1 border dark:border-bord rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-800 mb-2">
              Backend & Tools
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js & Express</li>
              <li>MongoDB & Mongoose</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
