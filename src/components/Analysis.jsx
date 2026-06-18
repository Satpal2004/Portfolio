import React from 'react'

const Analysis = () => {
    return (
        <div
            className="absolute w-87.5 h-50 z-25 bottom-10 left-5 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-8! text-white">

            {/* <!-- Glow --> */}
            {/* <div
                                className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-pink-500/30 blur-3xl">
                            </div> */}

            {/* <!-- Small Tag --> */}
            <div
                className="mb-5 inline-flex items-center rounded-full border border-pink-400/30 bg-pink-300/10 px-4! py-2! text-sm tracking-wide text-pink-800">
                Premium Analytics
            </div>

            {/* <!-- Stats --> */}
            <div className="mt-8! grid grid-cols-3 gap-4">

                <div
                    className="rounded-2xl border border-white/10  p-4 backdrop-blur-lg">
                    <h3 className="text-3xl font-bold">12K</h3>
                    <p className="mt-1 text-xs text-red-800">Users</p>
                </div>

                <div
                    className="rounded-2xl border border-white/10  p-4 backdrop-blur-lg">
                    <h3 className="text-3xl font-bold">98%</h3>
                    <p className="mt-1 text-xs text-red-800">Success</p>
                </div>

                <div
                    className="rounded-2xl border border-white/10  p-4 backdrop-blur-lg">
                    <h3 className="text-3xl font-bold">4.9</h3>
                    <p className="mt-1 text-xs text-red-800">Rating</p>
                </div>

            </div>

        </div>
    )
}

export default Analysis