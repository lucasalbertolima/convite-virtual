

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="hugo-luana.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3.appspot.com/o/Convite%20Especial%20Luana%20e%20Hugo.mp4?alt=media&token=43aaede8-3e5d-4b5d-b71f-495a81451e62" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-4.appspot.com/o/Convite%20Especial%20Luana%20e%20Hugo.mp4?alt=media&token=32e92480-9b02-41fb-8893-464916bc995a" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}