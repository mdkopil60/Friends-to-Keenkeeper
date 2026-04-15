import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArchive, FaBell, FaTrash } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";

export default function FriendDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(navigate);
    useEffect(() => {
        fetch("/data/friends.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(f => f.id == id);
                setFriend(found);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to load data");
                setLoading(false);
            });
    }, [id]);


    const handleAction = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            name: friend.name,
            date: new Date().toISOString()
        };

        const oldData = JSON.parse(localStorage.getItem("timeline")) || [];
        const updated = [newEntry, ...oldData];

        localStorage.setItem("timeline", JSON.stringify(updated));

        toast.success(`${type} with ${friend.name} added to timeline`);
    };


    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-red-100 text-red-600";
        if (status === "almost due") return "bg-yellow-100 text-yellow-600";
        return "bg-green-100 text-green-600";
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (!friend) {
        return <h2 className="text-center mt-20 text-xl">Friend not found</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto p-5">
            <div className="grid md:grid-cols-12 gap-6">

                {/* LEFT SIDE */}
                <div className="md:col-span-4 space-y-4">

                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <img src={friend.picture} className="w-24 h-24 mx-auto rounded-full" />
                        <h2 className="font-bold text-xl mt-3">{friend.name}</h2>

                        <span className={`px-3 py-1 rounded-full text-sm mt-2 inline-block ${getStatusColor(friend.status)}`}>
                            {friend.status}
                        </span>
                        <br />
                         <span className={`px-3 py-1 rounded-full text-sm mt-2 inline-block ${getStatusColor(friend.tags)}`}>
                            {friend.tags}
                        </span>
                        <p className="text-gray-600 mt-3 text-md">{friend.bio}</p>
                        <p className="text-bold text-gray-500 mt-2">Email : {friend.email}</p>
                        

                        {/* <div className="flex flex-wrap gap-2 justify-center mt-3">
                            {friend.tags.map((tag, i) => (
                                <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div> */}
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow space-y-2">
                        <button className="btn w-full"><FaBell /> Snooze 2 Weeks</button>
                        <button className="btn w-full"> <FaArchive /> Archive</button>
                        <button className="btn w-full btn-error"> <FaTrash /> Delete</button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-8 space-y-5">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-2xl font-bold">{friend.days_since_contact}</h2>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-2xl font-bold">{friend.goal}</h2>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <h2 className="text-lg font-bold">{friend.next_due_date}</h2>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-green-900">Relationship Goal</h3>
                            <p className="text-gray-600 text-sm">
                                Connect every {friend.goal} days
                            </p>
                        </div>
                        <button className="btn btn-sm">Edit</button>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="font-bold mb-3 text-green-900">Quick Check-In</h3>

                        <div className=" grid grid-cols-3 gap-4  ">
                            <button onClick={() => handleAction("Call")} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                                <img className="w-6 h-6" src="/assets/call.png" alt="" /> Call
                            </button>

                            <button onClick={() => handleAction("Text")} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                                <img className="w-6 h-6" src="/assets/chat.png" alt="" /> Text
                            </button>

                            <button onClick={() => handleAction("Video")} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                                <img className="w-6 h-6" src="/assets/video.png" alt="" /> Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}