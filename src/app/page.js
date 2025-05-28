import DepartmentTabs from "@/components/DepartmentTabs";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/fixed-values/all-values?departments=true`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const result = await response.json();

  return (
    <main className=" bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <DepartmentTabs activeDepartment={""} />
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-20 gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-indigo-900">
            Welcome to the Digital Library of <br />
            <span className="text-purple-600">
              Bogura Polytechnic Institute
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl text-indigo-700">
            An official platform for students and teachers to access textbooks,
            academic resources, and research materials — all for free.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/books"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition"
            >
              Browse Books
            </a>
            <a
              href="/auth/register"
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Students reading books in library"
            className="rounded-xl shadow-xl mx-auto max-w-full"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">
            Why Use the BPI Library Platform?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-indigo-700">
            {[
              {
                title: "Free & Open Access",
                desc: "No fees or subscriptions — just instant access to a vast collection of academic books and materials.",
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M12 4v16" />
                    <path d="M3 8h7" />
                  </svg>
                ),
              },
              {
                title: "For Students & Teachers",
                desc: "Designed to support both learners and educators with curated resources and personalized accounts.",
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                title: "Easy Book Borrowing",
                desc: "Borrow digital copies effortlessly with instant approval — read on any device, anytime.",
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
              },
              {
                title: "Organized by Department",
                desc: "Find books easily by department, subject, or author for streamlined study and research.",
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18" />
                    <path d="M12 3v18" />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-default"
              >
                {icon}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">
          About Bogura Polytechnic Institute Library
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The <strong>Digital Library of Bogura Polytechnic Institute</strong>{" "}
          is created to help our students and faculty access quality academic
          resources anywhere, anytime. With a wide range of departmental books
          and research materials, this platform ensures everyone has equal
          access to learning tools — 100% free and easy to use.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-12 text-center">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {[
            {
              step: "1",
              title: "Create Your Account",
              desc: "Sign up easily as a student or teacher with your college credentials.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                  <path d="M6 20v-1c0-1.657 3.582-3 6-3s6 1.343 6 3v1" />
                </svg>
              ),
            },
            {
              step: "2",
              title: "Browse & Search Books",
              desc: "Explore books by department, title, or author using our intuitive search system.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              ),
            },
            {
              step: "3",
              title: "Borrow & Read Free",
              desc: "Request any book and read instantly online or download for offline reading.",
              icon: (
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1-1" />
                  <path d="M12 4v8" />
                </svg>
              ),
            },
          ].map(({ step, title, desc, icon }) => (
            <div
              key={title}
              className="flex-1 bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-purple-600 mb-4">
                {step}
              </div>
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-indigo-900 mb-12 text-center">
          Explore Books by Department
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {result?.departments?.map(({ name, _id }) => (
            <a
              key={_id}
              href={`/books/department/${name}`}
              className="block bg-gradient-to-tr from-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-sm opacity-90">
                Find textbooks, research, and notes for {name}.
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
