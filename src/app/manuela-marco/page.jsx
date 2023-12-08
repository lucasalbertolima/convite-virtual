

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="manuela-marco.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3.appspot.com/o/Convite%20v%C3%ADdeo_MM.mp4?alt=media&token=e6f7a4dd-53c4-409b-999a-79d3165b8859" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-4.appspot.com/o/Convite%20v%C3%ADdeo_MM.mp4?alt=media&token=f31f41c7-1a0d-4121-8bb1-95bef5e182ae" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}