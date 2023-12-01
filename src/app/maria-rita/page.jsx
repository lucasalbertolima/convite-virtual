

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="mariarita.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/o-ano-de-ouro-do-theo.appspot.com/o/Convite%20Maria%20Rita.mp4?alt=media&token=a54de3b5-66dc-44a4-9933-856a6da8472b" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/erismara-matteus.appspot.com/o/Convite%20Maria%20Rita.mp4?alt=media&token=9090f50d-5a71-47bb-8cc9-075acbca6136" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}