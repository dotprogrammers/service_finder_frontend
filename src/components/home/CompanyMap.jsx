import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Input, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons (Vite + Leaflet)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const { Option } = Select;

function FlyTo({ position, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (!position) return;
        map.flyTo(position, zoom ?? map.getZoom(), { duration: 0.8 });
    }, [position, zoom, map]);
    return null;
}

export default function CompanyMap() {
    // Demo data, replace with your API later
    const categories = useMemo(
        () => [
            { value: "", label: "All Categories" },
            { value: "75", label: "Advokater & Jurister" },
            { value: "8", label: "Bil værksted" },
            { value: "63", label: "Bilsyn (synshaller)" },
            { value: "3", label: "Byggefirma" },
            { value: "26", label: "Flyttemand & Flyttefirma" },
            { value: "42", label: "Køreskole" },
            { value: "56", label: "Reklamebureauer" },
            { value: "67", label: "Udlejning" },
            { value: "70", label: "Vikar & Vikarbureau" },
        ],
        []
    );

    const cities = useMemo(
        () => [
            { value: "", label: "All Cities", zipcode: "" },
            { value: "Aarhus", label: "Aarhus", zipcode: "8000" },
            { value: "København", label: "København", zipcode: "1000" },
            { value: "Odense", label: "Odense", zipcode: "5000" },
            { value: "Aalborg", label: "Aalborg", zipcode: "9000" },
        ],
        []
    );

    const radiusOptions = useMemo(
        () => [
            { value: "", label: "No limit" },
            { value: "5", label: "5 km" },
            { value: "10", label: "10 km" },
            { value: "25", label: "25 km" },
            { value: "50", label: "50 km" },
            { value: "100", label: "100 km" },
        ],
        []
    );

    const allCompanies = useMemo(
        () => [
            {
                id: 6,
                name: "Nielsen El-Service A/S",
                city: "Aarhus",
                zipcode: "8000",
                categoryId: "8",
                lat: 56.1629,
                lng: 10.2039,
            },
            {
                id: 7,
                name: "Copenhagen Legal Group",
                city: "København",
                zipcode: "1000",
                categoryId: "75",
                lat: 55.6761,
                lng: 12.5683,
            },
            {
                id: 8,
                name: "Odense Flyt & Lager",
                city: "Odense",
                zipcode: "5000",
                categoryId: "26",
                lat: 55.4038,
                lng: 10.4024,
            },
            {
                id: 9,
                name: "Aalborg Køreskole",
                city: "Aalborg",
                zipcode: "9000",
                categoryId: "42",
                lat: 57.0488,
                lng: 9.9217,
            },
        ],
        []
    );

    // Filters state
    const [category, setCategory] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [radius, setRadius] = useState("");

    // Active selection
    const [activeCompanyId, setActiveCompanyId] = useState(allCompanies[0]?.id ?? null);

    const activeCompany = useMemo(
        () => allCompanies.find((c) => c.id === activeCompanyId) || null,
        [allCompanies, activeCompanyId]
    );

    // Result list (filtered)
    const filteredCompanies = useMemo(() => {
        return allCompanies.filter((c) => {
            const okCategory = category ? c.categoryId === category : true;
            const okZip = zipCode ? c.zipcode.startsWith(zipCode) : true;
            const okCity = city ? c.city === city : true;

            // radius is UI only here, implement real geo distance later
            const okRadius = radius ? true : true;

            return okCategory && okZip && okCity && okRadius;
        });
    }, [allCompanies, category, zipCode, city, radius]);

    // Ensure selected company is visible after filtering
    useEffect(() => {
        if (!filteredCompanies.length) {
            setActiveCompanyId(null);
            return;
        }
        if (!activeCompanyId || !filteredCompanies.some((c) => c.id === activeCompanyId)) {
            setActiveCompanyId(filteredCompanies[0].id);
        }
    }, [filteredCompanies, activeCompanyId]);

    const mapCenter = useMemo(() => {
        if (activeCompany) return [activeCompany.lat, activeCompany.lng];
        return [56.0, 10.0]; // Denmark-ish
    }, [activeCompany]);

    // My Location button
    const [locLoading, setLocLoading] = useState(false);

    const handleUseLocation = () => {
        if (!navigator.geolocation) return;
        setLocLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLocLoading(false);
                const { latitude, longitude } = pos.coords;
                // Fly map to user location (without changing filters)
                setTempFlyTo([latitude, longitude]);
            },
            () => setLocLoading(false),
            { enableHighAccuracy: true, timeout: 12000 }
        );
    };

    // temporary fly target for "My Location"
    const [tempFlyTo, setTempFlyTo] = useState(null);

    const handleSearch = (e) => {
        e?.preventDefault?.();
        // You can call your API here with {category, zipCode, city, radius}
        // For now, filtering already happens in-memory.
    };

    // Auto fill zip if a city is chosen (optional, matches your HTML data-zipcode idea)
    useEffect(() => {
        const found = cities.find((x) => x.value === city);
        if (found?.zipcode) setZipCode(found.zipcode);
        if (city === "") setZipCode("");
    }, [city, cities]);

    return (
        <section className="w-full bg-slate-50 py-10">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900">Find Companies on the Map</h2>
                    <p className="mt-2 text-sm text-slate-500">Explore companies across Denmark</p>
                </div>

                {/* Filters Card */}
                <form onSubmit={handleSearch} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:items-end">
                        <div className="md:col-span-1">
                            <label className="mb-2 block text-xs font-medium text-slate-700">Category</label>
                            <Select
                                value={category}
                                onChange={setCategory}
                                className="w-full"
                                size="large"
                                placeholder="All Categories"
                                options={categories}
                            />
                        </div>

                        <div className="md:col-span-1">
                            <label className="mb-2 block text-xs font-medium text-slate-700">Zip Code</label>
                            <Input
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                                placeholder="Enter zip code"
                                size="large"
                                maxLength={4}
                            />
                        </div>

                        <div className="md:col-span-1">
                            <label className="mb-2 block text-xs font-medium text-slate-700">City</label>
                            <Select
                                value={city}
                                onChange={setCity}
                                className="w-full"
                                size="large"
                                placeholder="All Cities"
                                options={cities.map((c) => ({ value: c.value, label: c.label }))}
                            />
                        </div>

                        <div className="md:col-span-1">
                            <label className="mb-2 block text-xs font-medium text-slate-700">Radius</label>
                            <Select
                                value={radius}
                                onChange={setRadius}
                                className="w-full"
                                size="large"
                                placeholder="No limit"
                                options={radiusOptions}
                            />
                        </div>

                        <div className="md:col-span-1">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className="w-full"
                            >
                                Search
                            </Button>
                        </div>

                        <div className="md:col-span-1">
                            <Button
                                type="primary"
                                size="large"
                                loading={locLoading}
                                icon={<EnvironmentOutlined />}
                                onClick={handleUseLocation}
                                className="w-full !bg-blue-600 hover:!bg-blue-700"
                            >
                                My Location
                            </Button>
                        </div>
                    </div>
                </form>

                {/* Layout */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                            <div className="border-b border-slate-100 p-4">
                                <div className="text-sm font-semibold text-slate-900">
                                    {filteredCompanies.length} Companies
                                </div>
                            </div>

                            <div className="max-h-[520px] overflow-auto p-3">
                                {filteredCompanies.length === 0 ? (
                                    <div className="p-3 text-sm text-slate-500">No companies found.</div>
                                ) : (
                                    <div className="space-y-3">
                                        {filteredCompanies.map((c) => {
                                            const isActive = c.id === activeCompanyId;
                                            return (
                                                <button
                                                    key={c.id}
                                                    type="button"
                                                    onClick={() => setActiveCompanyId(c.id)}
                                                    className={[
                                                        "w-full rounded-lg border p-4 text-left transition",
                                                        isActive
                                                            ? "border-green-600 bg-green-50"
                                                            : "border-slate-200 bg-white hover:border-slate-300",
                                                    ].join(" ")}
                                                >
                                                    <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                                                    <div className="mt-1 text-xs text-slate-500">
                                                        {c.zipcode} {c.city}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Map */}
                    <div className="lg:col-span-9">
                        <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                            <div className="h-[560px] w-full">
                                <MapContainer
                                    center={mapCenter}
                                    zoom={10}
                                    scrollWheelZoom
                                    className="h-full w-full"
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    {/* Fly to selected company */}
                                    {activeCompany && <FlyTo position={[activeCompany.lat, activeCompany.lng]} zoom={12} />}

                                    {/* Fly to user location if clicked */}
                                    {tempFlyTo && <FlyTo position={tempFlyTo} zoom={12} />}

                                    {filteredCompanies.map((c) => (
                                        <Marker key={c.id} position={[c.lat, c.lng]}>
                                            <Popup>
                                                <div className="text-sm font-semibold">{c.name}</div>
                                                <div className="text-xs text-slate-600">
                                                    {c.zipcode} {c.city}
                                                </div>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}