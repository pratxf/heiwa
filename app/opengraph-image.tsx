import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'

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

                {/* Logo Text */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Icon could go here, but text is cleaner without svg paths */}
                    <div style={{ color: 'white', fontSize: 140, fontWeight: 800, letterSpacing: '-0.05em' }}>Heiwa</div>
                </div>

                <div style={{ color: '#a855f7', fontSize: 40, marginTop: 20, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Ambient Soundscape
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
