

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="miguel-safari.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-by-sarahjandira.appspot.com/o/convite%20Miguel%20(1).mp4?alt=media&token=55b0b4ec-073f-4735-8d03-729352520f9d" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-digital-bysarahjandira.appspot.com/o/convite%20Miguel%20(1).mp4?alt=media&token=4cbccc1c-6323-4c70-82f0-3a90c413fe06" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}