# 📝 Task Tracker CLI

Saya mencoba membuat Task Tracker sederhana berbasis command-line menggunakan Node.js. Menyimpan data task dalam file `task.json`. Setiap task memiliki deskripsi, status (`todo`, `in-progress`, `done`), serta waktu dibuat dan diperbarui.

---

## 📥 Clone Project dari GitHub

Untuk meng-clone project ini ke lokal:

```bash
git This site was built using [GitHub Pages](https://pages.github.com/).


cd task-tracker-cli
```

---

## 🛠️ Setup & Instalasi

Agar perintah `task-cli` bisa dijalankan langsung di terminal, ikuti langkah berikut:

### 🔗 Install Secara Lokal menggunakan `npm link`

1. Buka terminal di direktori project kamu.
2. Jalankan perintah berikut:
   ```bash
   npm link
   ```
3. Sekarang kamu bisa menggunakan perintah CLI langsung seperti:
   ```bash
   task-cli add "Contoh tugas"
   ```

> Catatan: `npm link` akan membuat symlink dari global `node_modules` ke direktori project kamu, memungkinkan kamu menjalankan CLI ini secara global selama development.

## 🚀 Cara Kerja / Alur Fungsionalitas

### 📌 1. **Menambahkan Task**

```bash
node index.js add "Deskripsi tugas"
```

- Menambahkan task baru dengan status default `todo`.
- Otomatis membuat ID berdasarkan urutan terakhir.
- Menyimpan waktu pembuatan dan update saat itu juga.

### ✏️ 2. **Mengupdate Task**

```bash
node index.js update <id> "Deskripsi baru"
```

- Memperbarui deskripsi task berdasarkan ID.
- Waktu update akan diubah ke saat pengeditan dilakukan.

### ❌ 3. **Menghapus Task**

```bash
node index.js delete <id>
```

- Menghapus task dari daftar berdasarkan ID.

### ✅ 4. **Menandai Status Task**

```bash
node index.js mark-todo <id>
node index.js mark-in-progress <id>
node index.js mark-done <id>
```

- Mengubah status task sesuai perintah (`todo`, `in-progress`, `done`).
- Waktu update akan diperbarui.

### 📋 5. **Melihat Daftar Task**

```bash
node index.js list
```

- Menampilkan semua task yang ada.

```bash
node index.js list todo
node index.js list done
node index.js list in-progress
```

- Menampilkan task berdasarkan status yang dipilih.

---

## 📂 Struktur Data (`task.json`)

```json
[
  {
    "id": 1,
    "description": "Contoh tugas",
    "status": "todo",
    "createAt": "2025-04-17T08:00:00.000Z",
    "updateAt": "2025-04-17T08:00:00.000Z"
  }
]
```

---

## 📦 Dependencies

- Hanya menggunakan built-in module:
  - `fs`
  - `path`

---

## 🛠️ Menjalankan Program

1. Pastikan Node.js terinstal.
2. Jalankan perintah langsung dari terminal seperti contoh di atas.
3. File `task.json` akan otomatis dibuat di direktori yang sama saat pertama kali menambahkan task.
