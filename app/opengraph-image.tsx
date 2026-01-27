import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Heiwa - Ambient Soundscape'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0f0f12',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    backgroundImage: 'radial-gradient(circle at center, #1a1a2e 0%, #0f0f12 100%)',
                }}
            >
                {/* Decorative Circle */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(131,17,212,0.15) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Logo SVG & Text Container */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    {/* Embedded SVG Logo */}
                    <svg
                        width="200"
                        height="160"
                        viewBox="0 0 100 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M25 15 C 20 25, 20 55, 25 65 L 35 65 C 30 55, 30 25, 35 15 Z" fill="#8311d4" />
                        <path d="M75 15 C 80 25, 80 55, 75 65 L 65 65 C 70 55, 70 25, 65 15 Z" fill="#8311d4" />
                        <path d="M10 35 C 40 45, 60 45, 90 35 L 90 45 C 60 55, 40 55, 10 45 Z" fill="#8311d4" />
                    </svg>

                    {/* Logo Text - Using system font since fetch might fail */}
                    <div style={{ color: 'white', fontSize: 100, fontWeight: 800, letterSpacing: '-0.05em' }}>Heiwa</div>
                </div>

                <div style={{ color: '#a855f7', fontSize: 32, marginTop: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Ambient Soundscape
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
