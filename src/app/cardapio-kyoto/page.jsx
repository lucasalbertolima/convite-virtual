import React from 'react';

export default function Home() {
  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/convite-sarah-02.appspot.com/o/Kyoto%20Cozinha%20Oriental.pdf?alt=media&token=6ba70c03-e614-4913-ba10-66b357db3c98'; // Substitua pelo link do seu PDF

  return (
    <main>
      <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
      </div>
    </main>
  );
}