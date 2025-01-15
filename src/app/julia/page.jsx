

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="monik.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/apinoticias-with-next.appspot.com/o/julia-video.mp4?alt=media&token=53aebceb-baa6-489d-8a96-375823985ddd" type="video/mp4" />
                </video>   
            </div>
        </main>
    )
    
}