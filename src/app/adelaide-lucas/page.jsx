

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="adelaide-lucas.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-9.appspot.com/o/Adelaide%20e%20Alinhado.mp4?alt=media&token=3f797ed8-8c7b-4dd5-9c43-505a06d33213" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-10.appspot.com/o/Adelaide%20e%20Alinhado.mp4?alt=media&token=bc3ee32f-f94d-4604-9e53-d73168e523bf" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}