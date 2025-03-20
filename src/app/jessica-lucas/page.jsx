

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="jessica-lucas.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/michelle-thiago.appspot.com/o/jessica-lucas.mp4?alt=media&token=1172634c-87ad-41f6-a1d9-1337ef7f7821" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/erismara-matteus.appspot.com/o/jessica-lucas.mp4?alt=media&token=a8b27b1e-9f07-4ecb-8c7f-20f84a04a4fb" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}