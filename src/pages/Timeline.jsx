export default function Timeline() {
    const data = [
        { id: 1, type: "Call", title: "Call with Rahim", date: "April 10" },
        { id: 2, type: "Text", title: "Text with Karim", date: "April 12" },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Timeline</h2>

            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow flex gap-4">
                        <span>
                            {item.type === "Call"
                                ? "📞"
                                : item.type === "Text"
                                    ? "💬"
                                    : "🎥"}
                        </span>

                        <div>
                            <p>{item.title}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}