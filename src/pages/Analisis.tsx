import RootLayout from '@/app/layout'
import React from 'react'
import dynamic from "next/dynamic";

function Analisis() {
    return (
        <RootLayout>

            <div>Analisis</div>
        </RootLayout>
    )
}

export default dynamic(() => Promise.resolve(Analisis), { ssr: false })