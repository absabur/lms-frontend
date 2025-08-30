"use client";

const BooksSkeleton = () => {
  // Skeleton item component
  const SkeletonItem = ({ className, children }) => (
    <div className={`skeleton ${className}`}>{children}</div>
  );

  // Book card skeleton
  const BookCardSkeleton = () => (
    <div className="max-w-[300px] bg-bgl1 dark:bg-bgd2 border dark:border-bord rounded-xl shadow-md flex flex-col w-full h-[340px]">
      <SkeletonItem className="w-full h-[150px] rounded-none" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <SkeletonItem className="h-6 w-4/5 mb-2 rounded-md" />
          <SkeletonItem className="h-4 w-3/5 rounded-md" />
        </div>
        <div className="space-y-2">
          <SkeletonItem className="h-4 w-full rounded-md" />
          <SkeletonItem className="h-4 w-5/6 rounded-md" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <SkeletonItem className="h-6 w-14 rounded-md" />
          <SkeletonItem className="h-4 w-32 rounded-md" />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="mx-auto">
        {/* Page Title Skeleton */}
        <SkeletonItem className="h-8 w-64 mx-auto mb-6 rounded-md" />

        <div className="flex flex-row gap-6 items-start">
          {/* Filters Sidebar Skeleton */}
          <div className="z-[40] absolute lg:static bg-white dark:bg-bgd2 p-6 lg:rounded-xl shadow-[0_0_10px_#00000035] space-y-6 mb-3 transition-all duration-300 w-[80vw] left-[-80vw] top-[64px] rounded-none lg:w-[30%] h-[calc(100dvh-64px)] lg:h-[calc(100dvh-220px)] overflow-auto custom-scrollbar border dark:border-bord dark:shadow-shadl">
            {/* Filters Title */}
            <div className="flex justify-center items-center">
              <SkeletonItem className="h-7 w-32 rounded-md" />
              <div className="z-[42] lg:hidden rounded-full border-none bg-white shadow-[0_0_10px_#00000036] px-2 flex items-center gap-2 fixed top-[93px] right-[5px]">
                <SkeletonItem className="h-5 w-16 rounded-full" />
              </div>
            </div>

            {/* Sort By Skeleton */}
            <div className="space-y-4">
              <SkeletonItem className="h-5 w-20 rounded-md" />
              <div className="flex flex-wrap gap-2">
                <SkeletonItem className="h-8 w-16 rounded-full" />
                <SkeletonItem className="h-8 w-20 rounded-full" />
                <SkeletonItem className="h-8 w-24 rounded-full" />
                <SkeletonItem className="h-8 w-16 rounded-full" />
                <SkeletonItem className="h-8 w-16 rounded-full" />
                <SkeletonItem className="h-8 w-20 rounded-full" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Sort Order Skeleton */}
            <div className="space-y-4">
              <SkeletonItem className="h-5 w-24 rounded-md" />
              <div className="flex gap-4">
                <SkeletonItem className="h-8 w-24 rounded-full" />
                <SkeletonItem className="h-8 w-28 rounded-full" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Search Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-16 rounded-md" />
              <SkeletonItem className="h-10 w-full rounded-md" />
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Department Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-24 rounded-md" />
              <div className="flex flex-wrap gap-2">
                <SkeletonItem className="h-8 w-12 rounded-xl" />
                <SkeletonItem className="h-8 w-48 rounded-xl" />
                <SkeletonItem className="h-8 w-32 rounded-xl" />
                <SkeletonItem className="h-8 w-36 rounded-xl" />
                <SkeletonItem className="h-8 w-32 rounded-xl" />
                <SkeletonItem className="h-8 w-28 rounded-xl" />
                <SkeletonItem className="h-8 w-56 rounded-xl" />
                <SkeletonItem className="h-8 w-48 rounded-xl" />
                <SkeletonItem className="h-8 w-40 rounded-xl" />
                <SkeletonItem className="h-8 w-56 rounded-xl" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Shelf Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-16 rounded-md" />
              <div className="flex flex-wrap gap-2">
                <SkeletonItem className="h-8 w-12 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Country Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-20 rounded-md" />
              <div className="flex flex-wrap gap-2">
                <SkeletonItem className="h-8 w-12 rounded-xl" />
                <SkeletonItem className="h-8 w-28 rounded-xl" />
                <SkeletonItem className="h-8 w-24 rounded-xl" />
                <SkeletonItem className="h-8 w-40 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
                <SkeletonItem className="h-8 w-16 rounded-xl" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Language Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-24 rounded-md" />
              <div className="flex flex-wrap gap-2">
                <SkeletonItem className="h-8 w-12 rounded-xl" />
                <SkeletonItem className="h-8 w-16 rounded-xl" />
                <SkeletonItem className="h-8 w-20 rounded-xl" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* MRP Range Skeleton */}
            <div className="space-y-2">
              <SkeletonItem className="h-5 w-24 rounded-md" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <SkeletonItem className="h-4 w-12 rounded-md" />
                  <SkeletonItem className="h-4 w-12 rounded-md" />
                </div>
                <SkeletonItem className="h-2 w-full rounded-lg" />
                <SkeletonItem className="h-2 w-full rounded-lg" />
              </div>
            </div>

            <SkeletonItem className="h-px w-full my-3" />

            {/* Reset Button Skeleton */}
            <div className="pt-4 flex justify-center">
              <SkeletonItem className="h-10 w-32 rounded-md" />
            </div>
          </div>

          {/* Books Grid Skeleton */}
          <div className="w-full lg:w-[70%] flex flex-wrap justify-center gap-6">
            {[...Array(10)].map((_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Pagination Skeleton */}
        <div className="flex m-auto flex-col sm:flex-row sm:justify-center items-center gap-4 mt-8">
          <ul className="flex flex-wrap gap-2 items-center justify-center">
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-20" />
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-8" />
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-8" />
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-8" />
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-8" />
            <SkeletonItem className="px-3 py-1 rounded text-sm h-8 w-16" />
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        .skeleton {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          background-color: #e5e7eb;
        }
        .dark .skeleton {
          background-color: #374151;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }
        .dark .custom-scrollbar {
          scrollbar-color: #475569 #1e293b;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #475569;
        }
      `}</style>
    </div>
  );
};

export default BooksSkeleton;
