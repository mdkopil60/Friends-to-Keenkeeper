import { useEffect, useState } from "react";

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState("All");
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(data);
    }, []);
    const filteredData =
        filter === "All"
            ? timeline
            : timeline.filter((item) => item.type === filter);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toDateString(); // nice readable
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Timeline
            </h2>
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {["All", "Call", "Text", "Video"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-1 rounded-full border ${filter === type
                            ? "bg-green-500 text-white"
                            : "bg-white"
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredData.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No interactions yet
                    </p>
                ) : (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
                        >
                            <div className="text-2xl">
                                {item.type === "Call"
                                    ? "📞"
                                    : item.type === "Text"
                                        ? "💬"
                                        : "🎥"}
                            </div>

                            <div className="flex-1">
                                <p className="font-semibold">
                                    {item.type} with {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {formatDate(item.date)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}