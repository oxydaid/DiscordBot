# Oxyda Bot 🤖

[![Discord.js](https://img.shields.io/badge/discord.js-v14-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/) [![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Lisensi](https://img.shields.io/badge/Lisensi-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Bot Discord multifungsi yang canggih, modular, dan dapat dikonfigurasi sepenuhnya, dirancang untuk mengelola dan meningkatkan pengalaman komunitas Anda secara otomatis.



---

## ✨ Fitur Unggulan

Oxyda Bot dilengkapi dengan berbagai fitur canggih untuk memenuhi kebutuhan server Anda:

* **🎟️ Sistem Tiket Lanjutan**: Buat panel tiket yang berbeda di setiap channel dengan tombol, role support, dan pesan yang dapat dikustomisasi sepenuhnya.
* **👋 Sambutan & Perpisahan Otomatis**: Sapa anggota baru dan berikan pesan perpisahan dengan kartu gambar (canvas) yang dapat dipersonalisasi.
* **🛡️ Moderasi Lengkap**: Jaga server Anda tetap aman dengan perintah `/kick`, `/ban`, `/timeout`, `/clear`, dan `/disconnect`.
* **🎉 Sistem Giveaway Interaktif**: Buat giveaway dengan mudah! Pengguna bisa masuk dengan menekan tombol, dan bot akan secara otomatis mengumumkan pemenang saat waktunya habis.
* **🌙 Fitur AFK Cerdas**: Pengguna bisa mengatur status AFK, dan bot akan otomatis memberitahu siapa pun yang me-mention mereka. Status akan terhapus saat pengguna kembali aktif.
* **✍️ Pengirim Embed Kustom**: Kirim pengumuman atau pesan yang didesain dengan indah menggunakan data JSON langsung dari perintah `/embed`.
* **⚙️ Konfigurasi Fleksibel**: Hampir semua fitur dapat diatur melalui perintah slash, dari pesan hingga role yang diizinkan.
* **🔒 Sistem Lisensi**: Bot dilengkapi dengan validasi lisensi saat startup untuk penggunaan komersial.

---

## 🚀 Memulai

Ikuti langkah-langkah ini untuk menjalankan bot di lingkungan Anda sendiri.

### Prasyarat

* **Node.js**: Versi 18.x atau lebih tinggi.
* **Database**: Server MySQL atau MariaDB yang sedang berjalan.
* **Git**: [https://git-scm.com/](https://git-scm.com/)

### Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/oxydaid/DiscordBot.git
    cd DiscordBot
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment**:
    Salin file `.env.example` menjadi `.env` dan isi semua nilainya, seperti Token Bot, ID Klien, dan detail database.

4.  **Jalankan Migrasi Database**:
    Perintah ini akan secara otomatis membuat semua tabel yang dibutuhkan oleh bot.
    ```bash
    npm run migrate:latest
    ```

5.  **Jalankan Bot**:
    Untuk development (dengan auto-restart):
    ```bash
    npm run dev
    ```

---

## ⚙️ Konfigurasi (`.env`)

File `.env` adalah tempat Anda menyimpan semua kredensial rahasia.

```env
# Kredensial Bot Discord
TOKEN="TOKEN_BOT_ANDA"
CLIENT_ID="CLIENT_ID_BOT_ANDA"

# Kunci Lisensi
LICENSE_KEY="KUNCI_LISENSI_ANDA"

# Kredensial Database MySQL/MariaDB
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="password_database_anda"
DB_DATABASE="nama_database_anda"
```

## 📚 Daftar Perintah

Berikut adalah ringkasan dari beberapa perintah utama yang tersedia.

<details>
<summary><strong>🛡️ Moderasi</strong></summary>

* `/kick [user] [reason]`: Menendang anggota dari server.
* `/ban [user] [reason]`: Memblokir anggota dari server.
* `/timeout [user] [duration] [reason]`: Membisukan anggota untuk durasi tertentu.
* `/clear [amount]`: Menghapus sejumlah pesan dari channel.
* `/disconnect [user]`: Memutuskan anggota dari voice channel.

</details>

<details>
<summary><strong>🎟️ Sistem Tiket</strong></summary>

* `/ticket config create [type] ...`: Mengkonfigurasi properti untuk jenis tiket baru (kategori, role, tampilan tombol, dll).
* `/ticket setup [channel] [ticket_types] ...`: Mengirim panel tiket ke channel tertentu dengan tombol-tombol yang sudah dikonfigurasi.

</details>

<details>
<summary><strong>🎉 Giveaway</strong></summary>

* `/giveaway start [duration] [winners] [prize] [channel]`: Memulai sebuah giveaway baru.
* `/giveaway delete [message_id]`: Membatalkan dan menghapus giveaway yang sedang berjalan.

</details>

<details>
<summary><strong>🔧 Utilitas</strong></summary>

* `/help`: Menampilkan menu bantuan interaktif dengan daftar kategori perintah.
* `/afk [reason]`: Mengatur status AFK Anda.
* `/embed [channel]`: Membuka modal untuk mengirim pesan embed kustom via JSON.
* `/welcome ...`: Mengatur semua aspek pesan selamat datang.
* `/leave ...`: Mengatur semua aspek pesan perpisahan.

</details>

---

## 🤝 Kontribusi

Kontribusi membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. Setiap kontribusi yang Anda buat sangat **dihargai**.

1.  Fork Proyek ini
2.  Buat Branch Fitur Anda (`git checkout -b fitur/FiturLuarBiasa`)
3.  Commit Perubahan Anda (`git commit -m 'Menambahkan FiturLuarBiasa'`)
4.  Push ke Branch (`git push origin fitur/FiturLuarBiasa`)
5.  Buka sebuah Pull Request

---

## 📜 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.
