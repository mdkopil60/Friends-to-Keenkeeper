import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী কালার নির্ধারণের জন্য একটি অবজেক্ট
  const statusColors = {
    overdue: "bg-red-500",
    "almost due": "bg-yellow-500",
    "on-track": "bg-green-500",
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 h-full">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto object-cover ring-2 ring-gray-50"
        />

        <h3 className="mt-4 font-bold text-gray-800 text-lg">{friend.name}</h3>

        <p className="text-sm text-gray-400 mb-3">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-blue-50 text-blue-600 px-3 py-1 text-[10px] uppercase font-bold rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`mt-4 inline-block px-4 py-1 text-white rounded-full text-xs font-medium capitalize ${
            statusColors[friend.status.toLowerCase()] || "bg-gray-400"
          }`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;