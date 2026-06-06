// =========================================
// FUNGSI CHAT WHATSAPP
// =========================================

function chatWA() {
    // --- KONFIGURASI ---
    // GANTI nomor di bawah ini dengan nomor WA Anda (format: 628xxx tanpa 0)
    var nomorWA = "6285376168457";
    
    // Pesan otomatis yang akan dikirim
    var pesan = "Halo kak ZanaShop, saya tertarik dengan produk promo. Apakah stock masih ada?";
    
    // Build URL WhatsApp
    var urlWA = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
    
    // Buka WhatsApp di tab baru
    window.open(urlWA, '_blank');
}
