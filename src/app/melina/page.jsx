

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="melina.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/gisela-jose.appspot.com/o/melina.mp4?alt=media&token=3f73b257-fbad-452a-9a56-1fe99ee128a7" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convitevirtual-7554a.appspot.com/o/melina.mp4?alt=media&token=7cb47479-1f9b-421b-832f-16d22650dc80" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}