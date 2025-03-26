

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="emanuelle-pedro.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/gisela-jose.appspot.com/o/Convite%20Especial%20Emanuelle%20e%20Pedro.mp4?alt=media&token=cd96d3f2-6b3c-4afe-bf3a-3be1be6baf24" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/o-ano-de-ouro-do-theo.appspot.com/o/Convite%20Especial%20Emanuelle%20e%20Pedro.mp4?alt=media&token=28c33de1-ae98-4729-95a8-062115df7582" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}