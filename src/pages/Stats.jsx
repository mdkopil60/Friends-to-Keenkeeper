import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Stats = () => {
    const history = JSON.parse(localStorage.getItem("timeline")) || [];

    const data = [
        { name: "Call", value: history.filter(h => h.type === "Call").length },
        { name: "Text", value: history.filter(h => h.type === "Text").length },
        { name: "Video", value: history.filter(h => h.type === "Video").length },
    ];

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Friendship Analytics</h1>

            <div className="h-[400px]">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value">
                            {data.map((entry, i) => <Cell key={i} />)}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;