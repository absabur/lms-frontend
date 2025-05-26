import BookImage from "./BookImage";
import ReadBook from "./ReadBook";
import RequestForBook from "./RequestForBook";

const BookDetails = ({ book }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Book Info */}
        <div className="space-y-6">
          {/* Title */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {book?.bookName}
              </h1>
              <p className="text-sm text-gray-500">by {book?.bookAuthor}</p>
            </div>
          </div>
          <ReadBook images={book?.images} />

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              Description
            </h2>
            <p className="text-gray-600">{book?.description}</p>
          </div>

          {/* Detail Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <DetailItem label="Edition" value={book?.edition} />
            <DetailItem label="Publisher" value={book?.publisher} />
            <DetailItem label="Shelf" value={book?.shelf?.name} />
            <DetailItem label="Quantity" value={book?.quantity} />
            <DetailItem label="MRP" value={`৳${book?.mrp}`} />
            <DetailItem label="Pages" value={book?.numberOfPages} />
            <DetailItem label="Language" value={book?.language?.name} />
            <DetailItem label="Country" value={book?.country?.name} />
          </div>

          {/* Book Numbers */}
          {book?.bookNumbers?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                Book Numbers
              </h2>
              <div className="flex flex-wrap gap-2">
                {book?.bookNumbers.map((num, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          )}

          {book?.quantity > 0 ? (
            <RequestForBook id={book?._id} />
          ) : (
            <p className="text-red-500">The Book Currently Not Available</p>
          )}
          {/* Created & Updated Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <DetailItem
              label="Created On"
              value={`${book?.createDate?.date}, ${book?.createDate?.formatedTime}`}
            />
            <DetailItem
              label="Updated On"
              value={`${book?.updateDate?.date}, ${book?.updateDate?.formatedTime}`}
            />
          </div>
        </div>

        {/* Right: Book Image */}
        <BookImage images={book?.images} />
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="bg-white shadow rounded-lg p-4">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-base font-medium text-gray-800">{value || "N/A"}</p>
  </div>
);

export default BookDetails;
