Material Kit is a Free Bootstrap 4 UI Kit, with modified in content.
Using Bootsrap Material Design
Icon Flaticon Image and Google material icon
Using npm css-purge for fixing duplicate, optimizing and compressing css
	Kesalahan terjadi saat pembacaan 0.3em dibulatkan mesin jadi 0 (*0 solid <-- 0.3em solid)
	Known Issue : 	.card-header:first-child { border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }
			.card-footer:last-child { border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }
			value dijadikan 0 saat compressing


/* bagian ini mengatur besar gambar diseluruh card */
.container [class*=card] img {
  height: 200px;
  /* untuk mencrop otomatis gambar gunakan object fit */
  object-fit: cover;
}

semua gambar yang di dalam kelas yg mengandung kata card akan dipaksa untuk mengikuti aturan itu, 
apapun jenis desain cardnya
untuk pembaruan selanjutnya, mungkin akan diganti tag img menjadi tag yg lebih spesifik
object-fit untuk auto crop


yang masih ada bug adalah, bagaimana caranya plyr video rotate ketika fullscreen di hp