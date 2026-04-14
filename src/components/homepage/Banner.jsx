
const Banner = () => {
    return (
        <section className="bg-base-200 pt-16 pb-12 px-4">
            {/* --- Banner Text Content --- */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                    Friends to keep close in your life
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <div className="mt-8">
                    <button className="btn btn-primary text-white border-none normal-case rounded-md px-6">
                        + Add a Friend
                    </button>
                </div>
            </div>
      
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">10</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-gray-400 font-bold mt-2">
                        Total Friends
                    </p>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">3</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-gray-400 font-bold mt-2">
                        On Track
                    </p>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">6</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-gray-400 font-bold mt-2">
                        Need Attention
                    </p>
                </div>

                <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-gray-800">12</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-gray-400 font-bold mt-2">
                        Interactions This Month
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Banner;