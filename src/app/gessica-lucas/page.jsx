

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="gessica-lucas.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-01.appspot.com/o/video-gessica-lucas.MP4?alt=media&token=ffbd1626-ea66-45bf-999d-4a00657a602b" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-02.appspot.com/o/video-gessica-lucas.MP4?alt=media&token=c51f14ca-951c-4f61-9051-5d1ac6894466" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}