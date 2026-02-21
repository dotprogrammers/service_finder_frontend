export default function HomeBanner() {
    return (
        <section className="w-full">
            <div
                className="relative w-full overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://dsy1.crateweb.cloud/assets/uploads/media-uploader/dsy-banner-11706063230.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative mx-auto flex min-h-[380px] max-w-7xl flex-col items-center justify-center px-4 py-16 lg:min-h-[520px] lg:px-6">
                    <h1 className="text-center text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
                        FIND LOKALE
                        <br />
                        SERVICEVIRKSOMHEDER
                    </h1>

                    <p className="mt-6 max-w-3xl text-center text-base text-white/90 sm:text-lg">
                        Opret en opgave og få tilbud, eller tilmeld din virksomhed og få mere at lave.
                    </p>

                    {/* Search row */}
                    <form
                        action="service-list"
                        method="get"
                        className="mt-8 w-full max-w-5xl"
                    >
                        <div className="flex w-full flex-col gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4">
                            {/* Input */}
                            <div className="relative flex-1">
                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
                                    {/* crosshair icon */}
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 2v3m0 14v3M2 12h3m14 0h3"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </span>

                                <input type="hidden" name="change_address_new" id="change_address_new" value="" />

                                <input
                                    id="autocomplete"
                                    name="q"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Skriv hvad du søger, og eventuelt by (Murer, københavn)..."
                                    className="h-14 w-full rounded-xl bg-white px-12 text-sm text-slate-800 shadow-sm outline-none ring-1 ring-black/5 placeholder:text-slate-500 focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="h-14 shrink-0 rounded-xl bg-green-600 px-8 text-sm font-semibold text-white shadow-sm hover:bg-green-700 active:bg-green-800"
                            >
                                Klik her for at søge
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}