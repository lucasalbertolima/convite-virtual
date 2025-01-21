

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="amanda-bruno.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-4-7d650.appspot.com/o/Convite%20Especial%20Amanda%20e%20Bruno.mp4?alt=media&token=359cdc95-7cb7-4b3b-8be1-3054fe3cf2f2" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-5-cabe1.appspot.com/o/Convite%20Especial%20Amanda%20e%20Bruno.mp4?alt=media&token=6540036f-f068-4e40-8b4d-c6e97250a065" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}