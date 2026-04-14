import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Stats = () => {
    const history = JSON.parse(localStorage.getItem("timeline")) || [];
    const data = [
        { name: "Text", value: history.filter(h => h.type === "Text").length || 0 },
        { name: "Call", value: history.filter(h => h.type === "Call").length || 0 },
        { name: "Video", value: history.filter(h => h.type === "Video").length || 0 },
    ];
    const COLORS = ["#8B5CF6", "#1F4D36", "#34A853"];
    
    return (
        <div className="min-h-[70vh] bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-[#1F2937] mb-8">
                    Friendship Analytics
                </h1>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col items-center justify-center min-h-[450px]">
                    <p className="w-full text-left text-gray-600 font-medium mb-4">
                        By Interaction Type
                    </p>
                    <div className="w-full h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="none"
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend
                                    iconType="circle"
                                    verticalAlign="bottom"
                                    height={36}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;