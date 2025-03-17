import React from "react";
import { IconMessages } from "@tabler/icons-react";

const SearchHistory = ({ history }) => {
  if (history.length === 0) {
    return (
      <section className="mb-auto">
        <h2 className="mb-4 text-sm text-gray-700">Search History</h2>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center mb-4 w-10 h-12 bg-gray-100 rounded-lg">
              <IconMessages size={30} className="text-gray-500" />
            </div>
            <h3 className="mb-2 text-base font-medium text-gray-900">
              No Questions added
            </h3>
            <p className="text-sm text-gray-500">
              Type your questions to below input and get fast answers
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-auto">
      <h2 className="mb-4 text-sm text-gray-700">Search History</h2>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        {history.map((item) => (
          <div key={item.id} className="mb-4 last:mb-0">
            <div className="text-sm text-gray-900 font-medium mb-1">
              Q: {item.prompt}
            </div>
            <div className="text-sm text-gray-700">A: {item.response}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchHistory;