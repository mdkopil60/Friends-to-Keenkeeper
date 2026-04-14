import { useEffect, useState } from "react";
import FriendCard from "../FriendCard";


export default function FriendSection() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("./public/data/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>


      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}