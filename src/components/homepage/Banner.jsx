import { useEffect, useState } from "react";

const Banner = () => {
    const [friends, setFriends] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        fetch("/data/friends.json")
            .then(res => res.json())
            .then(data => setFriends(data));

        const storedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
        setTimeline(storedTimeline);
    }, []);

    const totalFriends = friends.length;

    const onTrack = friends.filter(f => f.status === "on-track").length;

    const needAttention = friends.filter(
        f => f.status === "overdue" || f.status === "almost due"
    ).length;

    const currentMonth = new Date().getMonth();
    const interactionsThisMonth = timeline.filter(item => {
        const date = new Date(item.date);
        return date.getMonth() === currentMonth;
    }).length;

    return (
        <section className="bg-base-200 pt-16 pb-12 px-4">

            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                    Friends to keep close in your life
                </h2>

                <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mt-8">
                    <button className="btn btn-primary text-white bg-green-900 rounded-md px-6">
                        + Add a Friend
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

                <div className="bg-white border shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-green-900">
                        {totalFriends}
                    </h3>
                    <p className="text-xs uppercase text-gray-400 font-bold mt-2">
                        Total Friends
                    </p>
                </div>

                <div className="bg-white border shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-green-900">
                        {onTrack}
                    </h3>
                    <p className="text-xs uppercase text-gray-400 font-bold mt-2">
                        On Track
                    </p>
                </div>

                <div className="bg-white border shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-green-900">
                        {needAttention}
                    </h3>
                    <p className="text-xs uppercase text-gray-400 font-bold mt-2">
                        Need Attention
                    </p>
                </div>

                <div className="bg-white border shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-green-900">
                        {interactionsThisMonth}
                    </h3>
                    <p className="text-xs uppercase text-gray-400 font-bold mt-2">
                        Interactions This Month
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Banner;