import React from 'react'
import Link from 'next/link';
import  Logo  from '@/assets/images/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        // <!-- Footer -->
        <footer className="bg-gray-200 py-4 mt-auto">
            <div
                className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
            >
                <div className="mb-4 md:mb-0">
                    <Image src={Logo} alt="Logo" className="h-8 w-auto" />
                </div>
                <div
                    className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
                >
                    <ul className="flex space-x-4">
                        <li><Link href="/properties">Properties</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">
                        &copy; {new Date().getFullYear()} PropertyPulse. All rights reserved. v1.0.0
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer