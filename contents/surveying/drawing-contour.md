---
layout: base.njk
title: Menggambar Garis Kontur
permalink: civil/surveying/menggambar-garis-kontur.html
description: Modul menggambar garis kontur membahas mengenai prinsip, prosedur, dan kaidah menggambar garis kontur pada peta topografi berdasarkan data elevasi hasil survei lapangan.
---

<div class="content-section">
  <h1>Menggambar Garis Kontur</h1>
</div>
<div class="content-hr"><hr></div>
<div class="content-section">
  <h2 id="pendahuluan">Pendahuluan</h2>
  <p>
    Garis kontur adalah representasi ketinggian suatu wilayah dalam bentuk garis yang menghubungkan titik-titik dengan elevasi yang sama. Garis kontur digunakan untuk memvisualisasikan bentuk permukaan bumi dalam peta topografi.
  </p>
  <p>
    Data elevasi untuk menggambar kontur biasanya diperoleh melalui survei lapangan menggunakan alat seperti <em>waterpass</em> dengan metode pembacaan <strong>benang atas</strong> dan <strong>benang bawah</strong> pada rambu ukur. Titik-titik detail diukur dari satu atau beberapa titik kontrol kemudian dibidik ke seluruh wilayah dengan pola tertentu.
  </p>
  <p>
    Tiga pola umum yang digunakan dalam survei topografi untuk menggambar kontur meliputi:
  </p>
  <ul>
    <li><strong>Pola grid</strong> dengan membagi wilayah menjadi kotak-kotak (<i>spot level</i>) dan melakukan pengukuran di tiap simpul grid.</li>
    <li><strong>Pola profil</strong> dengan mengikuti lintasan garis lurus memanjang dan melintang wilayah yang biasanya digunakan untuk perencanaan jalan atau saluran.</li>
    <li><strong>Pola radial</strong> yang digunakan pada wilayah yang luas dan tidak beraturan dengan pengukuran dilakukan secara menyebar dari satu titik pusat.</li>
  </ul>
  <p>
    Setelah pengambilan data selesai, titik-titik elevasi diplot pada bidang gambar, lalu dilakukan proses interpolasi untuk menggambar garis-garis kontur.
  </p>
  <h2 id="prinsip-interpolasi-kontur">Prinsip Interpolasi Kontur</h2>
  <p>
    Karena titik-titik elevasi hasil pengukuran umumnya memiliki ketinggian yang berbeda, maka diperlukan interpolasi untuk menentukan posisi garis kontur yang mewakili ketinggian tertentu.
  </p>
  <p>
    Metode interpolasi yang umum digunakan:
  </p>
  <ul>
    <li><strong>Perkiraan visual</strong> (taksiran)</li>
    <li><strong>Perhitungan numerik</strong> berdasarkan rasio jarak dan selisih elevasi</li>
    <li><strong>Metode grafis</strong> menggunakan alat bantu garis bantu pada kertas gambar</li>
  </ul>
  <h2 id="rumus-interpolasi-kontur">Rumus Interpolasi Titik Kontur</h2>
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
  <h2 id="prosedur-menggambar-kontur">Prosedur Menggambar Garis Kontur</h2>
  <ol>
    <li>Plot semua titik elevasi pada bidang gambar berdasarkan data pengukuran lapangan.</li>
    <li>Tentukan interval kontur sesuai skala dan ketelitian medan.</li>
    <li>Lakukan interpolasi antara dua titik untuk menentukan posisi garis kontur.</li>
    <li>Hubungkan titik-titik interpolasi menggunakan garis halus mengikuti morfologi medan.</li>
    <li>Pastikan garis kontur membentuk bidang tertutup atau mengarah keluar bidang gambar jika tidak lengkap.</li>
    <li>Labeli garis kontur dengan nilai elevasi yang sesuai.</li>
  </ol>
  <h2 id="catatan">Catatan Tambahan</h2>
  <ul>
    <li>Garis kontur tidak boleh saling berpotongan.</li>
    <li>Selisih ketinggian antar kontur harus konstan (misal tiap 0.5 m atau 1 m).</li>
    <li>Kontur membentuk bidang tertutup. Jika tidak, berarti data belum lengkap atau terbuka ke luar peta.</li>
    <li>Semakin rapat garis kontur, maka medan semakin terjal. Sebaliknya, garis yang renggang menunjukkan lereng landai.</li>
    <li>Garis kontur yang membentuk lingkaran naik ke pusat menunjukkan bukit, sedangkan yang turun ke pusat menunjukkan cekungan.</li>
    <li>Garis kontur tidak pernah bercabang atau berujung ganda.</li>
  </ul>
  <h2 id="contoh">Contoh Penyelesaian Soal</h2>
  <p>Silakan pelajari contoh soal dan cara menggambar garis kontur pada video berikut:</p>
</div>
<div class="content-hr"><hr></div>
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