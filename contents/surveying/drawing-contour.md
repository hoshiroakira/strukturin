---
layout: base.njk
title: Menggambar Garis Kontur
permalink: civil/surveying/menggambar-garis-kontur.html
description: Panduan teknis untuk memahami dan menggambar garis kontur berdasarkan data elevasi titik pada peta topografi bidang.
---

<div class="content-section">
  <h1>Menggambar Garis Kontur</h1>
</div>

<div class="content-hr">
  <hr>
</div>

<div class="content-section">
  <h2 id="pengantar">Pengantar</h2>
  <p>Garis kontur adalah garis yang menghubungkan titik-titik dengan elevasi yang sama pada peta topografi. Teknik ini digunakan dalam Ilmu Ukur Tanah untuk merepresentasikan permukaan medan secara grafis, terutama dalam pekerjaan pemetaan dan perencanaan teknik sipil. Pemahaman terhadap prinsip penggambaran kontur menjadi penting karena ketelitian visualisasi kontur berdampak langsung pada desain konstruksi, drainase, dan kestabilan lereng.</p>

  <h2 id="rumus-interpolasi">Rumus Interpolasi Titik Kontur</h2>
  <p>Untuk menggambar garis kontur secara akurat antara dua titik dengan elevasi berbeda, digunakan rumus interpolasi linier sebagai berikut:</p>
  <pre><code>x = (yk - y1) / (y2 - y1) × xp</code></pre>
  <p>
    Keterangan:<br>
    <strong>x</strong> = Jarak dari titik 1 ke titik kontur pada peta <br>
    <strong>yk</strong> = Elevasi kontur yang dicari <br>
    <strong>y1</strong> = Elevasi titik pertama <br>
    <strong>y2</strong> = Elevasi titik kedua <br>
    <strong>xp</strong> = Jarak antara titik 1 dan titik 2 pada peta
  </p>

  <h2 id="langkah">Langkah-Langkah Menggambar Garis Kontur</h2>
  <ol>
    <li>Tentukan interval kontur (misalnya, 2,5 meter).</li>
    <li>Catat elevasi masing-masing titik yang tersedia pada bidang.</li>
    <li>Identifikasi pasangan titik yang mengapit elevasi kontur tertentu.</li>
    <li>Gunakan rumus interpolasi untuk menghitung letak titik potong kontur di antara dua titik tersebut.</li>
    <li>Hubungkan titik-titik hasil interpolasi dengan garis halus.</li>
    <li>Ulangi proses untuk setiap level kontur hingga semua kontur digambarkan.</li>
  </ol>

  <h2 id="contoh-soal">Contoh Soal</h2>
  <p>Gambarkan garis kontur dari bidang berikut dengan jarak kontur sebesar <strong>2,5 meter</strong>. Tentukan lokasi interpolasi untuk garis kontur dengan elevasi 122,5 m, 125 m, dan 127,5 m antara titik-titik yang memiliki elevasi sebagai berikut:</p>
  <ul>
    <li>A (120 m), B (130 m), C (127 m)</li>
    <li>Gambarkan posisi interpolasi antara A dan B, serta antara B dan C untuk masing-masing elevasi kontur.</li>
  </ul>
  <p>Langkah perhitungan dapat merujuk pada rumus interpolasi sebelumnya. Hasil interpolasi menentukan titik-titik di mana garis kontur akan dipotong di antara garis penghubung titik-titik tersebut.</p>

  <h2 id="penutup">Penutup</h2>
  <p>Penggambaran garis kontur membutuhkan ketelitian dalam membaca data elevasi dan presisi dalam interpolasi. Praktik berulang akan membantu meningkatkan intuisi spasial dan kecepatan dalam membaca medan. Modul ini dapat digunakan sebagai dasar untuk memahami aplikasi kontur dalam analisis hidrologi, desain tapak, dan perencanaan infrastruktur.</p>
</div>
<div class="content-hr">
    <hr>
</div>
<div class="content-section">
    <h2 id="unduhan">Unduhan</h2>
    <p>Berikut adalah dokumen pendukung yang dapat Anda unduh dan pelajari lebih lanjut:</p>
    <ul>
        <li>
            <a href="https://exe.io/CEtlWmcy" target="_blank" rel="noopener">File PDF Penjelasan Langkah Menggambar Garis Kontur</a>
        </li>
        <li>
            <a href="https://exe.io/WkoEx" target="_blank" rel="noopener">Template Excel Pengolahan Data Titik Kontur</a>
        </li>
    </ul>
</div>
