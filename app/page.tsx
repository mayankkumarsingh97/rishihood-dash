"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth/AuthContext";
import { getUserProfile } from "@/services/auth.service";
//
const DEFAULT_EMAIL = "kevin@gmail.com";
const DEFAULT_PASSWORD = "admin123";

export default function LoginPage() {
    const router = useRouter();
    const { dispatch } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (
                form.email !== DEFAULT_EMAIL ||
                form.password !== DEFAULT_PASSWORD
            ) {
                throw new Error("Invalid email or password");
            }
            const data = await getUserProfile();
            dispatch({ type: "LOGIN", payload: data });
            router.push("/dashboard");
        } catch (err: any) {
            alert(err.message || "An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#bae6fd] flex items-center justify-center">
            <main className="w-full max-w-sm p-6">
                <section className="bg-white shadow-md p-6 sm:p-8">
                    <form className="space-y-4" onSubmit={handleLogin} autoComplete="off">
                        <div>
                            <label htmlFor="email" className="block text-[16px] font-bold text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                                autoFocus
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block ext-[16px] font-bold text-gray-700">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    className="text-xs text-indigo-600 hover:underline"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    tabIndex={-1}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div className="relative mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={form.password}
                                    onChange={handleChange}
                                    className="peer block w-full border border-gray-200 px-4 py-3 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center bg-[#bae6fd] px-4 py-2 text-[16px] font-bold text-black shadow-sm hover:bg-[#a6dcf8] focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer transition duration-150 ease-in-out"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
