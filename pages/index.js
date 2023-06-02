import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from './homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="stylesheet" type="text/css" href="css/custom.css" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />

        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
        <script type="text/javascript" src="js/owl.carousel.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.css"/>
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

        <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />

        <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css" />

        <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css" />

        <link rel="stylesheet" href="dist/css/adminlte.min.css" />

        <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />

        <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css" />

        <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css"></link>
      </Head>
      {/* <body> */}
        {/* <main className={styles.main}> */}
        <HomePage />
      {/* </body> */}
      {/* </main> */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
      <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="plugins/chart.js/Chart.min.js"></script>

      <script src="plugins/sparklines/sparkline.js"></script>

      <script src="plugins/jqvmap/jquery.vmap.min.js"></script>
      <script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>

      <script src="plugins/jquery-knob/jquery.knob.min.js"></script>

      <script src="plugins/moment/moment.min.js"></script>
      <script src="plugins/daterangepicker/daterangepicker.js"></script>

      <script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>

      <script src="plugins/summernote/summernote-bs4.min.js"></script>

      <script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>

      <script src="dist/js/adminlte.js"></script>

      <script src="dist/js/demo.js"></script>

      <script src="dist/js/pages/dashboard.js"></script>
      <script src="plugins/jquery/jquery.min.js"></script>

      <script src="plugins/jquery-ui/jquery-ui.min.js"></script>

    </>
    </>
  )
}