/**
 * FormatDate
 * Utility untuk memformat tanggal dari timestamp secara fleksibel.
 * 
 * - Jika `default = true` (default):
 *   - < 60 menit → "x menit yang lalu"
 *   - < 24 jam → "x jam yang lalu"
 *   - < 7 hari → "x hari yang lalu"
 *   - >= 7 hari → "Senin, 20 Juli 2025"
 * 
 * - Jika `default = false`, gunakan `format` string:
 *   - Contoh: 'DD MM YYYY', 'dd, DD mm YYYY (HH:mm:ss)', dst
 * 
 * Contoh penggunaan:
FormatDate('2025-12-31T12:00:00');
// 👉 "Rabu, 31 Desember 2025"

FormatDate('2025-12-31T12:00:00', {
  default: false,
  format: 'DD/MM/YYYY HH:hh:ss'
});
// 👉 "31/12/2025 12:00:00"

FormatDate('2025-12-31T12:00:00', {
  default: false,
  format: 'dd, DD mm YYYY (HH:hh)'
});
// 👉 "Rabu, 31 Desember 2025 (12:00)"

FormatDate('2025-12-31T12:00:00', {
  default: false,
  format: 'DD mm'
});
// 👉 "31 Desember"

FormatDate('not-a-date');
// 👉 "Beberapa waktu yang lalu"

 * 
 * 
 */

const hariDalamMinggu = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function FormatDate(timestamp, options = {}) {
  const { default: useDefault = true, format = "dd, DD mm YYYY" } = options;

  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) throw new Error("Invalid timestamp");

    const now = new Date();
    const diffMs = now - date;
    const isFuture = diffMs < 0;
    const absDiffMs = Math.abs(diffMs);
    const diffMinutes = Math.floor(absDiffMs / (1000 * 60));
    const diffHours = Math.floor(absDiffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(absDiffMs / (1000 * 60 * 60 * 24));

    // === DEFAULT RELATIVE FORMAT ===
    if (useDefault) {
      if (diffMinutes < 60)
        return isFuture
          ? `Dalam ${diffMinutes || 1} menit`
          : `${diffMinutes || 1} menit yang lalu`;

      if (diffHours < 24)
        return isFuture
          ? `Dalam ${diffHours} jam`
          : `${diffHours} jam yang lalu`;

      if (diffDays < 7)
        return isFuture
          ? `Dalam ${diffDays} hari`
          : `${diffDays} hari yang lalu`;

      // Default full fallback
      const dayName = hariDalamMinggu[date.getDay()];
      const day = date.getDate().toString().padStart(2, "0");
      const monthName = namaBulan[date.getMonth()];
      const year = date.getFullYear();
      return `${dayName}, ${day} ${monthName} ${year}`;
    }

    // === CUSTOM FORMAT MODE ===
    const mapToken = {
      DD: date.getDate().toString().padStart(2, "0"),
      D: date.getDate().toString(),
      MM: (date.getMonth() + 1).toString().padStart(2, "0"),
      M: (date.getMonth() + 1).toString(),
      YYYY: date.getFullYear().toString(),
      YY: date.getFullYear().toString().slice(-2),
      HH: date.getHours().toString().padStart(2, "0"),
      H: date.getHours().toString(),
      mm: namaBulan[date.getMonth()],
      dd: hariDalamMinggu[date.getDay()],
      hh: date.getMinutes().toString().padStart(2, "0"),
      ss: date.getSeconds().toString().padStart(2, "0"),
    };

    // Replace tokens in format string
    const result = format.replace(
      /\b(DD|D|MM|M|YYYY|YY|HH|H|mm|dd|hh|ss)\b/g,
      (token) => {
        return mapToken[token] ?? token;
      }
    );

    return result;
  } catch {
    return "Beberapa waktu yang lalu";
  }
}
