

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="grazielle-tarcio.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-3.appspot.com/o/Convite%20especial%20Grazielle%20e%20Tarcio.mp4?alt=media&token=ffb6ad70-059d-49fd-a2b3-f00fc9e328eb" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-4.appspot.com/o/Convite%20especial%20Grazielle%20e%20Tarcio.mp4?alt=media&token=d73482fd-e7dc-4fbb-8222-60cd4ace91ed" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}