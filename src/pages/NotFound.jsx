import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 text-center text-black max-w-md w-full">

                <h1 className="text-8xl font-extrabold mb-4 tracking-widest">
                    404
                </h1>

                <h2 className="text-2xl font-semibold mb-2">
                    Oops! Page not found
                </h2>

                <p className="text-sm opacity-80 mb-6">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;