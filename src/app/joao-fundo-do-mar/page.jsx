

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="joao-fundo-do-mar.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-11-af5bd.appspot.com/o/Convite_fundo%20do%20mar.mp4?alt=media&token=91be92d3-de8c-45d7-86f6-857bf06e8fc5" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-12-fb208.appspot.com/o/Convite_fundo%20do%20mar.mp4?alt=media&token=e0b4f080-4f67-4548-afe5-6bf7c95388e4" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}