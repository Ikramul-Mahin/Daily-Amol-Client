import React from 'react';

const Cover = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hey Brother</h1>
                        <p className="mb-5">Save your Iman. You are responsible for your Iman.</p>
                        <button className="btn btn-primary">Be Muslim</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;