import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h2 className="text-5xl font-bold">Friends to keep <span className='text-fuchsia-400'>close in your life</span></h2>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary">+ Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;