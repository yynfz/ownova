# OWNOVA MetaMask Patch

Patch ini mengimplementasikan koneksi MetaMask berbasis `window.ethereum` untuk jaringan Ethereum Sepolia.

## File yang disertakan

- Domain interface wallet
- Use case `ConnectWallet`
- `MetaMaskWalletGateway`
- Global `WalletProvider`
- Root layout dengan provider
- Header yang membaca wallet session
- Halaman koneksi MetaMask
- Contoh environment variable

## Instalasi

1. Ekstrak ZIP ke root proyek dan izinkan file menggantikan versi lama.
2. Salin `.env.example` menjadi `.env.local`.
3. Pastikan alias `@/*` menunjuk ke `src/*` pada `tsconfig.json`.
4. Jalankan:

```bash
npm run dev
```

5. Buka `/connect-wallet`, klik MetaMask, setujui koneksi akun, lalu setujui perpindahan ke Sepolia.

## Catatan

- Tombol disconnect hanya membersihkan session lokal UI. MetaMask tidak menyediakan RPC standar untuk memutus izin akun secara paksa dari dApp.
- Jangan pernah menyimpan seed phrase, mnemonic, atau private key di source code maupun variabel `NEXT_PUBLIC_*`.
- File lain pada source yang berisi URL tercemar markup `<a ...>` tetap perlu dibersihkan agar seluruh proyek dapat dikompilasi.
