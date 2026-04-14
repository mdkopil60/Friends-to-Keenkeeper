import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router";

export default function FriendDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // পাথ হিসেবে '/data/friends.json' ব্যবহার করা হয়েছে (Absolute Path)
        fetch("/data/friends.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((data) => {
                const found = data.find((f) => f.id == id);
                setFriend(found);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Could not load friend details");
                setLoading(false);
            });
    }, [id]);

    const handleAction = (type) => {
        toast.success(`${type} request sent to ${friend.name}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    if (!friend) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-600">Friend not found!</h2>
                <button onClick={() => navigate("/")} className="mt-4 text-blue-500 underline">
                    Go Back Home
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6 animate-fadeIn">
            <div className="grid md:grid-cols-12 gap-8">

                {/* LEFT COLUMN - Profile Card */}
                <div className="md:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-50 text-center">
                    <div className="relative inline-block">
                        <img
                            src={friend.picture}
                            className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-green-50"
                            alt={friend.name}
                        />
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                    </div>

                    <h2 className="mt-5 text-2xl font-black text-gray-800">{friend.name}</h2>
                    <p className="text-blue-500 font-medium">{friend.email}</p>
                    <p className="mt-4 text-gray-600 leading-relaxed italic">"{friend.bio}"</p>

                    <div className="flex justify-center gap-2 mt-6 flex-wrap">
                        {friend.tags.map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-sm font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN - Stats & Actions */}
                <div className="md:col-span-7 space-y-6">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-50 text-center">
                        <div className="border-r border-gray-100">
                            <p className="text-2xl font-black text-gray-800">{friend.days_since_contact}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Days Ago</p>
                        </div>
                        <div className="border-r border-gray-100">
                            <p className="text-2xl font-black text-gray-800">{friend.goal}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Goal</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-800 text-red-500">{friend.next_due_date.split('-')[2]}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Next Due</p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                        <h3 className="mb-5 font-bold text-gray-800 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Quick Check-In
                        </h3>

                        <div className="grid grid-cols-3 gap-4">
                            <button
                                onClick={() => handleAction("Call")}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors gap-2"
                            >
                                <span className="text-2xl"><img src="/public/assets/call.png" alt="" /></span>
                                <span className="text-xs font-bold uppercase">Call</span>
                            </button>
                            <button
                                onClick={() => handleAction("Message")}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-green-50 hover:bg-green-100 text-green-600 transition-colors gap-2"
                            >
                                <span className="text-2xl"><img src="/public/assets/text.png" alt="" /></span>
                                <span className="text-xs font-bold uppercase">Text</span>
                            </button>
                            <button
                                onClick={() => handleAction("Video")}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-600 transition-colors gap-2"
                            >
                                <span className="text-2xl"><img src="/public/assets/video.png" alt="" /></span>
                                <span className="text-xs font-bold uppercase">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}                