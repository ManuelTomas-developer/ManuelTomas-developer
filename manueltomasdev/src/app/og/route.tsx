import Image from 'next/image'
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url)
    // const title = searchParams.get('title')

    // return new ImageResponse(
    //     (
    //         <div
    //             style={{
    //                 height: '100%',
    //                 width: '100%',
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 backgroundColor: '#fff',
    //                 fontSize: 32,
    //                 fontWeight: 600,
    //             }}
    //         >
    //             {/* <img
    //                 src={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
    //                 alt="Logo"
    //                 width={200}
    //                 height={200}
    //             /> */}
    //             <div style={{ marginTop: 40 }}>{title}</div>
    //         </div>
    //     ),
    //     {
    //         width: 1200,
    //         height: 630,
    //     },
    // )
}