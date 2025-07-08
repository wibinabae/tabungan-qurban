# 🐄 Tabungan Qurban

**Tabungan Qurban** adalah aplikasi pencatatan tabungan qurban berbasis web yang bertujuan untuk menciptakan transparansi, kemudahan pengelolaan, dan monitoring tabungan qurban secara digital.

Aplikasi ini dibuat menggunakan **Next.js** dan **Tailwind CSS**, serta dirancang dengan sistem multi-role: **Admin**, **Pengelola**, dan **User**.

## 🎯 Fitur Utama

- 🔐 Autentikasi dan otorisasi multi-role (Admin, Pengelola, User)
- 📋 Admin dapat memverifikasi pengelola baru
- 💼 Pengelola dapat membuat dan mengelola program tabungan qurban
- 👥 User dapat memilih program tabungan dan melakukan setoran
- 📈 Monitoring progres tabungan dan riwayat transaksi secara transparan
- 💬 Notifikasi atau status approval (opsional, kalau nanti ditambahkan)

## 🧰 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) – React Framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS Framework
- (Tambahkan lainnya kalau ada, misalnya Firebase, Supabase, Prisma, dst.)

## 🧑‍💼 Role dan Akses

| Role      | Deskripsi                                                                 |
|-----------|--------------------------------------------------------------------------|
| Admin     | Memverifikasi akun pengelola, mengelola data master                     |
| Pengelola | Membuat program tabungan, menerima setoran dari user, memantau progres  |
| User      | Memilih program qurban, menabung, dan melihat progres tabungan          |

## 📦 Instalasi

```bash
# Clone repositori
git clone https://github.com/username/tabungan-qurban.git

# Masuk ke direktori proyek
cd tabungan-qurban

# Install dependencies
npm install

# Jalankan development server
npm run dev
