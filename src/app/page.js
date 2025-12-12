import DepartmentTabs from "@/components/DepartmentTabs";
import HeroImageRotator from "@/components/HeroImage";
import Link from "next/link";
import {
  Search,
  BookOpen,
  ArrowRight,
  Library,
  Users,
  Clock,
  Zap,
  GraduationCap,
  ChevronRight,
  Bookmark,
  Star,
  BookOpenCheck,
} from "lucide-react";
import BookSearch from "@/components/BookSearch";

export default async function Home() {
  const [fixedValuesData, dashboardData] = await Promise.all([
    // Request 1: Departments
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/fixed-values/all-values?departments=true`,
      { method: "GET", credentials: "include" }
    ).then((res) => res.json()),

    // Request 2: Dashboard Stats
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/dashboard`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json()),
  ]);

  // Access your data directly
  const departments = fixedValuesData?.departments || [];
  const resultDashboard = dashboardData;
  const topDepartments = Object.entries(
    resultDashboard.bookCountByDepartment || {}
  ).slice(0, 3);

  return (
    <main className="font-sans bg-bgl2 dark:bg-bgd1 text-textl dark:text-textd min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Decorative Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten" />
      </div>

      <DepartmentTabs activeDepartment={"all"} />

      {/* --- HERO SECTION: Centered & Search Focused --- */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-bgd2/50 border border-purple-100 dark:border-purple-900/30 backdrop-blur-md shadow-sm mb-4 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              অফিশিয়াল লাইব্রেরি পোর্টাল v2.0
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-indigo-950 dark:text-white leading-[1.1]">
            জ্ঞান এখন{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              উন্মুক্ত
            </span>{" "}
            এবং <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              সহজলভ্য
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-purple-400 opacity-50"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C2.00025 6.99997 43.6139 1.54226 102.825 2.12642C162.037 2.71058 198 4.5 198 4.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            বগুড়া পলিটেকনিকের হাজারো বইয়ের ভাণ্ডার এখন আপনার হাতের মুঠোয়।
            খুঁজুন, পড়ুন এবং শিখুন—সবকিছু সম্পূর্ণ বিনামূল্যে।
          </p>

          {/* Search Simulation Card */}
          <BookSearch />

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <span>জনপ্রিয়:</span>
            <Link
              href="/books/department/Computer"
              className="hover:text-purple-600 underline decoration-dotted"
            >
              Computer
            </Link>
            <Link
              href="/books/department/Civil"
              className="hover:text-purple-600 underline decoration-dotted"
            >
              Civil
            </Link>
            <Link
              href="/books/department/Electrical"
              className="hover:text-purple-600 underline decoration-dotted"
            >
              Electrical
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="bg-indigo-900 text-white py-12 transform -skew-y-2 origin-top-left mb-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 transform skew-y-2">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">
                {resultDashboard?.uniqueBooksCount}+
              </h3>
              <p className="text-indigo-200">বই</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">
                {resultDashboard?.studentsCount +
                  resultDashboard?.teachersCount}
                +
              </h3>
              <p className="text-indigo-200">সক্রিয় শিক্ষার্থী</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <BookOpenCheck className="w-8 h-8" />
            </div>
            <div>
              {/* Replace 'totalBorrowed' with your actual state or prop variable */}
              <h3 className="text-3xl font-bold">
                {resultDashboard?.totalBorrowStudentsCount +
                  resultDashboard?.totalBorrowTeachersCount}
                +
              </h3>
              <p className="text-indigo-200">মোট বই ধার</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BENTO GRID DEPARTMENTS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          {/* Left Side: Text */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-950 dark:text-white">
              বইয়ের জগৎ
            </h2>
            <p className="mt-2 text-gray-500">
              আপনার ডিপার্টমেন্ট বেছে নিন এবং পড়াশোনা শুরু করুন
            </p>
          </div>

          {/* Right Side: Link */}
          {/* Added 'w-fit' so the button doesn't stretch full width on mobile */}
          <Link
            href="/books"
            className="w-fit group flex items-center gap-2 text-purple-600 font-semibold hover:bg-purple-50 dark:hover:bg-bgd2 px-4 py-2 rounded-lg transition-all"
          >
            সব দেখুন{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">
          {/* Main Large Item */}
          {departments[0] && (
            <Link
              href={`/books/department/${departments[0].name}`}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gray-900 text-white p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="bg-purple-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  Top Pick
                </span>
                <h3 className="text-3xl font-bold mb-2">
                  {departments[0].name}
                </h3>
                <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {departments[0].name} এর জন্য সেরা সব রেফারেন্স বই এবং নোটস।
                </p>
              </div>
            </Link>
          )}

          {/* Secondary Items */}
          {departments.slice(1, 5).map((dept, idx) => (
            <Link
              key={dept._id}
              href={`/books/department/${dept.name}`}
              className={`relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between border border-gray-100 dark:border-gray-800 bg-white dark:bg-bgd2 hover:shadow-xl transition-all duration-300 group ${
                idx === 0 || idx === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 dark:bg-purple-900/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>

              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Library className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                  {dept.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <span>Explore</span> <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FEATURES: ZIGZAG LAYOUT --- */}
      <section className="bg-white dark:bg-bgd2 py-24 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1 relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="bg-bgl1 dark:bg-bgd1 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <HeroImageRotator />{" "}
                {/* Reusing your component inside a card */}
                <div className="bg-white/90 dark:bg-black/80 backdrop-blur rounded-xl flex items-center gap-3 pt-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Average Time
                    </p>
                    <p className="font-bold text-sm text-gray-900 dark:text-white">
                      ২ মিনিটের মধ্যে বই সংগ্রহ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 space-y-6">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                বিদ্যুতগতিতে সেবা
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                লাইব্রেরিতে আর লাইনে দাঁড়াতে হবে না। ক্লাসে বসেই বইয়ের
                রিকুয়েস্ট পাঠান। লাইব্রেরিতে যান এবং সাথে সাথে বই সংগ্রহ করুন।
                আমাদের সিস্টেম রিয়েল-টাইম ডাটা সিঙ্ক করে।
              </p>
              <ul className="space-y-3">
                {[
                  "১ ক্লিকে রিকুয়েস্ট",
                  "রিয়েল-টাইম স্টক আপডেট",
                  "অটোমেটিক ডিউ ডেট রিমাইন্ডার",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                শুধুমাত্র শিক্ষার্থীদের জন্য
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                বগুড়া পলিটেকনিকের কারিকুলাম অনুযায়ী সাজানো আমাদের ডাটাবেস।
                আপনার সেমিস্টারের জন্য প্রয়োজনীয় বইগুলো আমরা পিন করে রাখি
                ড্যাশবোর্ডের শুরুতেই।
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center px-4 py-3 bg-gray-50 dark:bg-bgd1 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-xl text-indigo-600">১০০%</h4>
                  <p className="text-xs text-gray-500">ফ্রি অ্যাক্সেস</p>
                </div>
                <div className="text-center px-4 py-3 bg-gray-50 dark:bg-bgd1 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-xl text-indigo-600">৭ দিন</h4>
                  <p className="text-xs text-gray-500">রিটার্ন পলিসি</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              {/* Decorative Elements mimicking a dashboard */}
              <div className="bg-bgl1 dark:bg-bgd1 border border-gray-200 dark:border-gray-700 p-6 rounded-3xl shadow-2xl relative z-10 -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Header: Total Stats */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Library className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                      লাইব্রেরি সংগ্রহ
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      সর্বমোট {resultDashboard.totalBooksCount} টি বই
                    </p>
                  </div>
                </div>

                {/* Body: Top 3 Departments List */}
                <div className="space-y-3">
                  {topDepartments.map(([deptName, count], i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-bgd2 rounded-xl group hover:bg-white dark:hover:bg-bgd1 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                    >
                      <div className="w-8 h-10 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <BookOpen className="w-4 h-4" />
                      </div>

                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-200 truncate">
                          {deptName}
                        </h5>
                        <p className="text-[10px] text-gray-400 truncate">
                          Department Collection
                        </p>
                      </div>

                      <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold whitespace-nowrap bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                        {count} টি
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS: TIMELINE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-indigo-950 dark:text-white">
            সহজ ৩টি ধাপ
          </h2>
          <p className="mt-4 text-gray-500">
            লাইব্রেরি ব্যবহার করা এখন ফেসবুক চালানোর মতোই সহজ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "রেজিস্ট্রেশন",
              desc: "আপনার রোল ও তথ্য দিয়ে একাউন্ট খুলুন",
              icon: Users,
              color: "text-blue-500",
            },
            {
              title: "বই নির্বাচন",
              desc: "ক্যাটালগ থেকে পছন্দমতো বই কার্টে যোগ করুন",
              icon: Bookmark,
              color: "text-purple-500",
            },
            {
              title: "লাইব্রেরি থেকে সংগ্রহ",
              desc: "অ্যাডমিনের অ্যাপ্রুভাল পেলে বই নিয়ে নিন",
              icon: Star,
              color: "text-amber-500",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative group text-center">
              <div className="w-20 h-20 mx-auto bg-white dark:bg-bgd2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              {/* Line connector */}
              {idx !== 2 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10 opacity-30"></div>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-indigo-950 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              পড়া শুরু করতে প্রস্তুত?
            </h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
              আজই জয়েন করুন আমাদের ডিজিটাল প্লাটফর্মে। কোনো ফি ছাড়াই উপভোগ করুন
              আধুনিক লাইব্রেরি সুবিধা।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-white text-indigo-950 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                একাউন্ট তৈরি করুন
              </Link>
              <Link
                href="/books"
                className="border border-indigo-700 text-indigo-100 px-8 py-4 rounded-xl font-bold hover:bg-indigo-900 transition"
              >
                বইসমূহ দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
