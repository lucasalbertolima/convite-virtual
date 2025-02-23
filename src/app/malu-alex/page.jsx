export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="malu-alex.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/Convite%20Especial%20Malu%20e%20Alex.mp4?alt=media&token=424a8d9d-e9d8-48a7-8a43-1627be1453f1" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos-2.appspot.com/o/Convite%20Especial%20Malu%20e%20Alex.mp4?alt=media&token=d43e8832-db2d-44e3-aa94-34964cc68224" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}