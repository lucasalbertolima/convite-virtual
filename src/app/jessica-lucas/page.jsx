

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="daniela.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/phd-global.appspot.com/o/Convite%20Especial%20Daniela.mp4?alt=media&token=3c567f87-e79a-40be-800d-7a2b6215688b" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/o-ano-de-ouro-do-theo.appspot.com/o/Convite%20Especial%20Daniela.mp4?alt=media&token=9e0e5112-2b1c-4484-9624-6f19761e59a1" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}