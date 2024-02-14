

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="saul.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-6-6f46d.appspot.com/o/CONVITE%20ESPECIAL.mp4?alt=media&token=b545614d-c390-4053-a3f0-31c79c0677b3" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-7-441ce.appspot.com/o/CONVITE%20ESPECIAL.mp4?alt=media&token=ceccbf32-6b3b-4455-9b43-a68193761007" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}