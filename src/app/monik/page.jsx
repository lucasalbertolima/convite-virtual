

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="monik.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/Convite%20especial%20Monik.mp4?alt=media&token=30d24369-e0d0-457e-a58b-6140ba266da8" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos-2.appspot.com/o/Convite%20especial%20Monik.mp4?alt=media&token=e079c22c-7a01-40cd-afc1-c88b01f6b016" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3.appspot.com/o/Convite%20especial%20Monik.mp4?alt=media&token=93d78375-9535-4670-8d8e-a37474488e20" type="video/mp4" />
                </video>   
            </div>
        </main>
    )
    
}