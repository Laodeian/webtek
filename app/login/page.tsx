'use client';//pengguna useActionState harus mencantumkan ini

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import {authenticate} from 'app/lib/actions'; //autentikasi

export default function Page() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );
    return (
        <main className="flex min-h-screen flex-col p-6">
            {/* Bagian Header */}
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Image
                    src="/logo/uia-logo.png"
                    width={500}
                    height={360}
                    className="hidden md:block"
                    alt="Banner UIA"
                />
            </div>

            {/* Bagian Form */}
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 m-auto">
                <form action={formAction} className="space-y-3">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        {/* Judul */}
                        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                            Silakan Masuk dengan akun anda
                        </h1>

                        {/* Input Email */}
                        <div className="w-full">
                            <label
                                className="mb-3 block text-xs font-medium text-gray-900"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="ketikan alamat email"
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 outline-2"
                                    aria-label="Masukkan Email"
                                    required
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray" />
                            </div>
                        </div>

                        {/* Input Kata Sandi */}
                        <div className="w-full mt-4">
                            <label
                                className="mb-3 block text-xs font-medium text-gray-900"
                                htmlFor="password"
                            >
                                Kata Sandi
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="ketikan kata sandi"
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 outline-2"
                                    aria-label="Masukkan Kata Sandi"
                                    required
                                    minLength={6}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>

                        {/* Tombol Masuk */}
                        <Button className="mt-4 w-full"  aria-disabled={isPending}>
                            Masuk <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>
                        </Button>
                        <div className="flex h-8 items-end space-x-1">
                            {errorMessage && (
                                <><ExclamationCircleIcon className="h-5 w5 text-red-500"/>
                                <p className="text-sm text-red-500">{errorMessage}</p>
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
