

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="arthur-1aninho.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-9-fff65.appspot.com/o/Convite%20especial%20Arthur.mp4?alt=media&token=1d6616cd-eb20-4160-8b95-33fd1018d2e5" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-10-307ef.appspot.com/o/Convite%20especial%20Arthur.mp4?alt=media&token=cdc2802e-69a6-4da7-bff3-f77f45411ceb" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}