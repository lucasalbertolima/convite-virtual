

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="miguel-safari.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-by-sarahjandira.appspot.com/o/convite%20Miguel.mp4?alt=media&token=58e72db2-3a3a-4951-8513-22dfa304471f" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-digital-bysarahjandira.appspot.com/o/convite%20Miguel.mp4?alt=media&token=0a3ad05e-fb20-41ff-98f8-cd43a1547de6" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}