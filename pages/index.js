import Head from 'next/head'
import Image from 'next/image'

import Logo from '../public/logo.png'
import Poster from '../public/poster.png'
import Info from '../public/info.jpg'
import Faq from '../public/faq.jpg'
import Faq2 from '../public/faq-2.jpg'
import Hasil from '../public/hasil-print.jpg'
import Testimoni from '../public/testimoni.jpg'

export default function Home() {
  const cv = [
    {
      judul: "CV1", modal: "modal-1",
      harga: "Rp10.000",
      image: "/cv/CV1.png",
      link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV1."
    },
    {
      judul: "CV2", modal: "modal-2",
      harga: "Rp10.000",
      image: "/cv/CV2.png",
      link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV2."
    },
    {
      judul: "CV3", modal: "modal-3",
      harga: "Rp10.000",
      image: "/cv/CV3.png",
      link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV3."
    },
    {
        judul: "CV4", modal: "modal-4",
        harga: "Rp10.000",
        image: "/cv/CV4.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV4."
    },
    {
        judul: "CV5", modal: "modal-5",
        harga: "Rp10.000",
        image: "/cv/CV5.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV5."
    },
    {
        judul: "CV6", modal: "modal-6",
        harga: "Rp10.000",
        image: "/cv/CV6.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV6."
    },
    {
        judul: "CV7", modal: "modal-7",
        harga: "Rp10.000",
        image: "/cv/CV7.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV7."
    },
    {
        judul: "CV8", modal: "modal-8",
        harga: "Rp10.000",
        image: "/cv/CV8.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV8."
    },
    {
        judul: "CV9", modal: "modal-9",
        harga: "Rp10.000",
        image: "/cv/CV9.png",
        link: "https://api.whatsapp.com/send?phone=6285155299160&text=Halo%20Saya%20ingin%20membeli%20CV9."
    }
  ];
  return (
    <>
      <Head>
        <title>Bang CV | Jasa Desain CV</title>
        <meta name="description" content="Menyediakan beragam desain cv dengan desain yang elegan, dengan cv yang menarik tentunya akan membuat HRD semakin tertarik dengan cv anda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="hidden lg:grid hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src={Poster} className="max-w-xl rounded-lg shadow-2xl" alt="Poster" priority/>
              <div>
                <h1 className="text-5xl font-bold">Selamat Datang!</h1>
                <p className="py-6 pr-64 leading-8">Menyediakan beragam desain cv dengan desain yang menarik. <br/>CV yang bagus adalah CV yang jelas ringkasannya sehingga tidak membingungkan recruiter.</p>
                <a id="button-list" href="#list"><button className="text-xs btn btn-primary tracking-widest">Lihat CV</button></a>
              </div>
            </div>
        </div>

        <section className="container m-auto 2xl:px-20 pt-8 pb-16 px-12" id="app">

          <div className="hidden lg:flex justify-center gap-8 flex-wrap">
              <label for="my-modal-1" className="btn modal-button w-60 lg:ml-16 lg:btn lg:modal-button">Info</label>
              <label for="my-modal-2" className="btn modal-button w-60 lg:btn lg:modal-button">Hasil Print</label>
              <label for="my-modal-3" className="btn modal-button w-60 lg:btn lg:modal-button">Testimoni</label>
          </div>

          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal">
              <div className="modal-box p-0 w-11/12 max-w-5xl">
                  <Image src={Info} className="mb-8" alt="Refresh jika gambar tidak muncul" />
                  <Image src={Faq} className="mb-8" alt="Refresh jika gambar tidak muncul" />
                  <Image src={Faq2} className="mb-8" alt="Refresh jika gambar tidak muncul" />
                  <div className="modal-action flex justify-center px-8 py-4 mt-0 border-t-2">
                      <label for="my-modal-1" className="btn bg-red-600 border-0 w-20">X</label>
                  </div>
              </div>
          </div>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal">
              <div className="modal-box p-0 w-11/12 max-w-5xl">
                  <Image src={Hasil} alt="Refresh jika gambar tidak muncul"/>
                  <div className="modal-action flex justify-center px-8 py-4 mt-0 border-t-2">
                      <label for="my-modal-2" className="btn bg-red-600 border-0 w-20">X</label>
                  </div>
              </div>
          </div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
              <div className="modal-box p-0 w-11/12 max-w-5xl">
                  <Image src={Testimoni} alt="Refresh jika gambar tidak muncul"/>
                  <div className="modal-action flex justify-center px-8 py-4 mt-0 border-t-2">
                      <label for="my-modal-3" className="btn bg-red-600 border-0 w-20">X</label>
                  </div>
              </div>
          </div>

          <Image src={Logo} className="w-20 m-auto lg:hidden" alt="Logo" />

          <h2 id="list" className="text-2xl lg:text-3xl font-bold mb-16 text-center mt-12 lg:mt-24">Pick the CV Design</h2>


          <div className="flex flex-wrap gap-10 justify-center">

            {cv.map(cv => {
              return (
              <div className="card bg-base-100 shadow-md basis-36 lg:basis-3/12 rounded-none" key={cv.id}>
                <figure><Image src={cv.image} quality={100} width={100} height={100} class="shadow w-full" alt="Refresh jika gambar tidak muncul" unoptimized/></figure>
                    <div className="card-body px-4 pt-2 pb-1 lg:py-6 lg:p-8">
                        <h2 className="card-title font-bold hidden lg:block">Kode: {cv.judul}</h2>
                        <p className="lg:mb-6">💰&nbsp; {cv.harga}</p>
                        <div className="card-actions">
                            <label for={cv.modal} className="hidden lg:inline-flex btn modal-button">Lihat</label>

                            <input type="checkbox" id={cv.modal} className="modal-toggle" />
                            <div className="modal sm:modal-middle">
                                <div className="modal-box p-0 w-11/12 max-w-5xl">
                                    <div className="hidden lg:flex lg:justify-center modal-action px-8 py-4 mt-0 border-t-2">
                                        <label for={cv.modal} className="btn bg-red-600 border-0 w-20">X</label>
                                    </div>
                                    <Image src={cv.image} quality={100} width={100} height={100} class="w-full" alt="Refresh jika gambar tidak muncul" unoptimized/>
                                    <div className="modal-action flex justify-center px-8 py-4 mt-0 border-t-2">
                                        <label for={cv.modal} className="btn bg-red-600 border-0 w-20">X</label>
                                    </div>
                                </div>
                            </div>
                            <a href={cv.link} target="_blank" rel="noreferrer" className="hidden lg:inline-flex btn btn-primary bg-warning border-0 tracking-widest">Beli!</a>
                        </div>
                    </div>
                </div>
                );
              })}
                
            </div>

        </section>

      </main>
    </>
  )
}