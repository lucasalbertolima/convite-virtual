

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="adrianagilson.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/Convite%20Especial_Adriana%20e%20Gilson%20(1).mp4?alt=media&token=ff3ee877-92b5-4e9d-b30a-d1f7ffa653d4" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos-2.appspot.com/o/Convite%20Especial_Adriana%20e%20Gilson%20(1).mp4?alt=media&token=8ce57e84-0402-4ca9-b53e-104816ec766c" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}