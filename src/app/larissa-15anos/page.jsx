

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="larissa-15anos.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-1.appspot.com/o/Convite%2015%20anos%20larissa.mp4?alt=media&token=792e4f51-b6ce-446a-9f09-699f8555dd8f" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-2.appspot.com/o/Convite%2015%20anos%20larissa.mp4?alt=media&token=77297d36-4265-4e9c-98af-64f6e953e84d" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}