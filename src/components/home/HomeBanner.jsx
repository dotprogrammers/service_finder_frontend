import React, { useMemo, useState } from "react";
import { Input, Button, Dropdown } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

export default function HomeBanner() {
    const [category, setCategory] = useState(null);

    const categories = useMemo(
        () => [
            { key: "murer", label: "Murer" },
            { key: "elektriker", label: "Elektriker" },
            { key: "vvs", label: "VVS" },
            { key: "rengoring", label: "Rengøring" },
            { key: "flytning", label: "Flytning" },
            { key: "maler", label: "Maler" },
        ],
        []
    );

    const categoryMenu = useMemo(
        () => ({
            items: categories.map((c) => ({
                key: c.key,
                label: c.label,
                onClick: () => setCategory(c),
            })),
        }),
        [categories]
    );

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

                    {/* Search row like image */}
                    <form
                        action="service-list"
                        method="get"
                        className="mt-10 w-full max-w-5xl"
                    >
                        {/* Outer pill */}
                        <div className="flex w-full flex-col overflow-hidden rounded-[999px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:flex-row">
                            {/* Search input */}
                            <div className="flex flex-1 items-center">
                                <div className="flex h-16 w-full items-center">
                                    <span className="pl-6 pr-2 text-slate-400">
                                        <SearchOutlined />
                                    </span>

                                    <Input
                                        name="q"
                                        placeholder="Search for a task and get quotes, c"
                                        bordered={false}
                                        className="!h-16 !rounded-none !text-[15px]"
                                    />
                                </div>

                                {/* Vertical divider */}
                                <div className="hidden h-10 w-px bg-slate-200 sm:block" />
                            </div>

                            {/* Category dropdown */}
                            <div className="flex items-center justify-between sm:w-[320px]">
                                <Dropdown
                                    menu={categoryMenu}
                                    trigger={["click"]}
                                    placement="bottomLeft"
                                >
                                    <button
                                        type="button"
                                        className="flex h-16 w-full items-center justify-between px-6 text-left text-[15px] text-slate-700"
                                    >
                                        <span className={`${category ? "text-slate-900" : "text-slate-600"}`}>
                                            {category ? category.label : "Choose a category"}
                                        </span>
                                        <DownOutlined className="text-slate-400" />
                                    </button>
                                </Dropdown>

                                {/* Vertical divider */}
                                <div className="hidden h-10 w-px bg-slate-200 sm:block" />
                            </div>

                            {/* Button */}
                            <div className="sm:w-[280px]">
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    className="!h-16 !w-full !rounded-none !border-0  !text-[15px] !font-semibold "
                                >
                                    Search for quotes
                                </Button>
                            </div>
                        </div>

                        {/* Hidden field so you can submit selected category */}
                        <input type="hidden" name="category" value={category?.key || ""} />
                    </form>
                </div>
            </div>
        </section>
    );
}