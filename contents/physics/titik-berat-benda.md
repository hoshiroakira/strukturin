---
layout: base.njk
title: Titik Berat Benda
permalink: civil/physics/titik-berat-benda.html
description: Materi pengantar mengenai titik berat benda dalam konteks teknik sipil, meliputi konsep, metode perhitungan, dan aplikasi pada penampang struktural.
---

<div class="content-section">
    <h1>Titik Berat Benda</h1>
</div>
<div class="content-hr">
    <hr>
</div>

<div class="content-section">
    <h2 id="bahasan-dan-batasan">Bahasan dan Batasan</h2>
    <ul>
        <li><strong>Cakupan bahasan:</strong> cara menghitung titik berat suatu bidang datar; aplikasi titik berat dalam teknik sipil seperti pada fondasi, balok, dan pelat.</li>
        <li><strong>Limitasi bahasan:</strong> tidak membahas struktur tiga dimensi, kepadatan tidak seragam, dan dibatasi pada struktur sederhana.</li>
    </ul>
    <h2 id="konsep-titik-berat">Konsep Titik Berat</h2>
    <p>Titik berat (atau pusat gravitasi) merupakan <strong>titik tangkap resultan gaya berat</strong> dari suatu bidang atau benda. Dalam rekayasa teknik sipil, titik berat sangat penting karena mempengaruhi distribusi gaya, kestabilan struktur, dan perhitungan lanjutan seperti momen inersia dan analisis tegangan. Titik berat juga sering muncul dalam perhitungan elemen struktur seperti balok, pelat, atau komponen penampang majemuk. Dalam bidang teknik sipil, titik berat digunakan untuk analisis struktur, mekanika benda, dan desain konstruksi.</p>
    <p>Contoh sederhananya, penampang persegi memiliki titik berat di tengah-tengah bidangnya. Hal serupa berlaku pada lingkaran yang titik beratnya berada tepat di pusat.</p>
    <h2 id="penampang">Penampang</h2>
    <p>Penampang adalah <strong>irisan suatu benda atau struktur</strong> yang menunjukkan bentuk dan ukuran bagian dalamnya. Dalam teknik sipil, penampang digunakan untuk menganalisis kekuatan, kestabilan, dan distribusi tegangan pada elemen struktural seperti balok, kolom, dan fondasi.</p>
    <p>Bentuk umum penampang berupa:</p>
    <ul>
        <li>Bujur sangkar</li>
        <li>Persegi panjang</li>
        <li>Segitiga</li>
        <li>Lingkaran</li>
    </ul>
    <h2 id="titik-berat-dan-teknik-sipil">Titik Berat dalam Teknik Sipil</h2>
    <p>Beberapa aplikasi titik berat dalam teknik sipil:</p>
    <ul>
        <li>Menganalisis keseimbangan struktur seperti pelat, fondasi, dan jembatan.</li>
        <li>Menentukan pusat massa pada penampang struktural.</li>
        <li>Perhitungan momen statis dan optimasi distribusi beban.</li>
    </ul>
    <h2 id="rumus-titik-berat">Rumus Titik Berat</h2>
    <p>Untuk bidang datar homogen (massa tersebar merata), titik berat hanya ditentukan oleh bentuk geometri bidang tersebut. Untuk bidang datar dengan elemen luas \( dA \) di titik \( (x, y) \), titik berat dihitung dengan:</p>
    <p>
        \( X = \dfrac{\int x\, dA}{\int dA} \)<br><br>
        \( Y = \dfrac{\int y\, dA}{\int dA} \)
    </p>
    <p>Jika dibagi menjadi beberapa bagian:</p>
    <p>
        \( X = \dfrac{x_1A_1 + x_2A_2 + \ldots + x_nA_n}{A_1 + A_2 + \ldots + A_n} \) <br><br>
        \( Y = \dfrac{y_1A_1 + y_2A_2 + \ldots + y_nA_n}{A_1 + A_2 + \ldots + A_n} \)
    </p>
    <h2 id="bidang-sederhana">Titik Berat Bidang Homogen Sederhana</h2>
    <ul>
        <li>Persegi panjang: \( \bar{x} = \frac{b}{2}, \space \bar{y} = \frac{h}{2} \)</li>
        <li>Segitiga siku-siku: \( \bar{x} = \frac{b}{3},\space \bar{y} = \frac{h}{3} \)</li>
        <li>Lingkaran: titik pusat lingkaran</li>
        <li>Setengah lingkaran: \( \bar{y} = \frac{4r}{3\pi} \) dari alas</li>
    </ul>
    <div class="image-container">
        <img src="/assets/images/titik-berat-benda/titik-berat-1.png" alt="Titik berat benda untuk penampang berbentuk persegi dan lingkaran" class="centered-img">
    </div><br><br>
    <div class="image-container">
        <img src="/assets/images/titik-berat-benda/titik-berat-2.png" alt="Titik berat benda untuk penampang berbentuk persegi panjang dan segitiga" class="centered-img">
    </div>
    <h2 id="penampang-majemuk" style="margin-top: 16px">Titik Berat Penampang Majemuk</h2>
    <p>Untuk penampang tersusun dari beberapa elemen, digunakan rumus:</p>
    <p>
        \( \bar{x} = \dfrac{\sum A_i x_i}{\sum A_i},\space \bar{y} = \dfrac{\sum A_i y_i}{\sum A_i} \)
    </p>
    <h2 id="metode-penyelesaian">Metode Penyelesaian</h2>
    <h3 style="margin-top: 16px">1. Metode Langsung (Diskret)</h3>
    <p>Untuk benda yang dapat dibagi menjadi bentuk geometri dasar.</p>
    <p>
        \( X = \dfrac{\sum x_i A_i}{\sum A_i}, \space Y = \dfrac{\sum y_i A_i}{\sum A_i} \)
    </p>
    <p>Langkah umum untuk mencari titik berat pada penampang majemuk:</p>
    <ol>
        <li>Bagi penampang menjadi bentuk dasar (persegi, segitiga, dll).</li>
        <li>Hitung luas (\( A_i \)) dan posisi titik berat (\( x_i, y_i \)) masing-masing elemen.</li>
        <li>Kalikan luas dengan koordinat untuk memperoleh \( \sum A_i x_i \) dan \( \sum A_i y_i \).</li>
        <li>Gunakan rumus titik berat gabungan:<br>
        \( \bar{x} = \dfrac{\sum A_i x_i}{\sum A_i},\quad \bar{y} = \dfrac{\sum A_i y_i}{\sum A_i} \)
        </li>
    </ol>
    <h3>2. Metode Integrasi (Kontinu)</h3>
    <ul>
        <li>Hitung \( A = \int dA \)</li>
        <li>Hitung momen statis: \( S_x = \int y\, dA, \space S_y = \int x\, dA \)</li>
        <li>Titik berat:
            \( X = \dfrac{S_y}{A}, \space Y = \dfrac{S_x}{A} \)
        </li>
    </ul>
    <h2 id="penampang-berlubang">Penampang Berlubang</h2>
    <p>Jika terdapat lubang, luas dan momen dari lubang dikurangkan dari total:</p>
    <p>
        \( X = \dfrac{x_1A_1 + x_2A_2 - x_3A_3}{A_1 + A_2 - A_3} \)<br><br>
        \( Y = \dfrac{y_1A_1 + y_2A_2 - y_3A_3}{A_1 + A_2 - A_3} \)
    </p>
    <h2 id="contoh-perhitungan">Contoh Perhitungan</h2>
    <h3 style="margin-top: 16px; margin-bottom: 16px">Metode Langsung</h3>
    <div class="image-container">
        <img src="/assets/images/titik-berat-benda/penampang-1.png" alt="Contoh penampang persegi panjang berukuran 4 x 2 cm yang memiliki titik berat di tengah bidang" class="centered-img">
    </div>
    <p>Sebuah bidang persegi panjang berukuran (\( 4 \times 2 \)) cm memiliki titik berat:</p>
    <p>
        \( X = \dfrac{8 \times 2}{8} = 2 \,\text{cm} \)<br><br>
        \( Y = \dfrac{8 \times 1}{8} = 1 \,\text{cm} \)
    </p>
    <div class="content-hr"><hr></div>
    <h2 id="tautan-unduhan">Unduhan</h2>
    <p>Berikut adalah dokumen pendukung yang dapat Anda unduh dan pelajari lebih lanjut:</p>
    <p>
        <a href="https://www.mediafire.com/file/2x19hqxnz07b4uv/Fisika_Teknik_-_Titik_Berat_Benda.pdf/file" target="_blank" rel="noopener noreferrer">File PDF Materi Titik Berat Benda</a>
        <a href="https://www.mediafire.com/file/eybr5ar8bb01284/Fisika_Teknik_-_Modul_Titik_Berat_Benda.pdf/file" target="_blank" rel="noopener noreferrer">File PDF Modul Titik Berat Benda</a>
    </p>
</div>