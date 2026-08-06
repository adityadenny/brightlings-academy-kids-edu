/*
 * Brightlings Academy — Daily Tips Content
 * Pool of parenting & early-childhood-education tips shown as the
 * "Quote of the Day" widget. Rotated automatically by
 * scripts/update-daily-content.js (see assets/js/daily-content.js).
 * Works both in the browser (window.BRIGHTLINGS_QUOTES) and in Node
 * (module.exports), so the same list can be read by the update script.
 */
(function () {
  var quotes = [
    { id: "Bermain adalah bahasa utama anak untuk belajar tentang dunia — beri mereka waktu untuk bereksplorasi tanpa terburu-buru.", en: "Play is a child's first language for understanding the world — give them unhurried time to explore." },
    { id: "Lingkungan yang tertata rapi membantu anak usia dini merasa aman dan mampu membuat pilihan sendiri.", en: "An orderly environment helps young children feel safe and capable of making their own choices." },
    { id: "Anak belajar bahasa kedua paling alami lewat lagu, cerita, dan percakapan sehari-hari, bukan hafalan.", en: "Children pick up a second language most naturally through songs, stories, and everyday conversation — not drilling." },
    { id: "Pujian yang menghargai usaha ('kamu berusaha keras!') menumbuhkan ketahanan lebih baik daripada memuji hasil semata.", en: "Praise that celebrates effort ('you worked so hard!') builds resilience better than praising results alone." },
    { id: "Rutinitas pagi yang konsisten membantu anak merasa tenang sebelum memulai hari belajarnya.", en: "A consistent morning routine helps children feel calm before starting their day of learning." },
    { id: "Biarkan anak menyelesaikan tugas kecil sendiri — mengikat sepatu atau menuang air — untuk membangun rasa percaya diri.", en: "Let children finish small tasks on their own — tying shoes, pouring water — to build genuine confidence." },
    { id: "Rasa ingin tahu tumbuh subur ketika kita menjawab pertanyaan anak dengan pertanyaan balik, bukan jawaban instan.", en: "Curiosity grows best when we answer a child's question with another question, not an instant answer." },
    { id: "Sentuhan dan benda nyata membantu anak usia dini memahami konsep abstrak seperti angka dan huruf.", en: "Hands-on, real objects help young children grasp abstract concepts like numbers and letters." },
    { id: "Kesalahan kecil saat belajar adalah bagian penting dari proses — bukan sesuatu yang harus dihindari.", en: "Small mistakes while learning are an essential part of the process — not something to be avoided." },
    { id: "Membaca bersama setiap malam, walau hanya 10 menit, memperkuat ikatan sekaligus kemampuan bahasa anak.", en: "Reading together every night, even just 10 minutes, strengthens both the bond and a child's language skills." },
    { id: "Anak yang diberi pilihan sederhana — baju mana yang dipakai hari ini — belajar mengambil keputusan lebih awal.", en: "Children given simple choices — which outfit to wear today — learn decision-making earlier." },
    { id: "Emosi besar butuh nama kecil: bantu anak menyebut perasaannya agar mereka lebih mudah mengelolanya.", en: "Big emotions need small names: help children label their feelings so they're easier to manage." },
    { id: "Waktu bermain di luar ruangan setiap hari mendukung perkembangan motorik dan kesehatan mental anak.", en: "Daily outdoor playtime supports both motor development and a child's emotional wellbeing." },
    { id: "Anak belajar berbagi dan bergiliran paling baik lewat contoh nyata, bukan ceramah panjang.", en: "Children learn to share and take turns best through real examples, not long lectures." },
    { id: "Musik dan gerak membantu anak usia dini mengenali ritme bahasa sebelum mereka bisa membaca.", en: "Music and movement help young children internalize the rhythm of language long before they can read." },
    { id: "Memberi anak tanggung jawab kecil di rumah, seperti merapikan mainan, menumbuhkan rasa memiliki.", en: "Giving children small responsibilities at home, like tidying toys, builds a real sense of ownership." },
    { id: "Ketika anak frustrasi, kehadiran tenang orang dewasa lebih menenangkan daripada solusi instan.", en: "When a child is frustrated, a calm adult presence soothes more than an instant solution ever could." },
    { id: "Anak dwibahasa butuh waktu untuk mencampur dua bahasa saat belajar — itu tanda perkembangan, bukan kebingungan.", en: "Bilingual children mixing two languages while learning is a sign of healthy development, not confusion." },
    { id: "Pertanyaan terbuka seperti 'menurutmu kenapa?' mendorong anak berpikir lebih dalam dibanding pertanyaan ya/tidak.", en: "Open-ended questions like 'why do you think?' push children to think deeper than simple yes/no questions." },
    { id: "Anak usia dini belajar empati dengan melihat orang dewasa memperlakukan orang lain dengan hormat.", en: "Young children learn empathy by watching the adults around them treat others with respect." },
    { id: "Konsistensi lebih penting daripada kesempurnaan dalam menjaga rutinitas belajar anak di rumah.", en: "Consistency matters more than perfection when keeping a child's learning routine at home." },
    { id: "Memberi label pada benda sehari-hari dalam dua bahasa memperkaya kosakata anak secara alami.", en: "Labeling everyday objects in two languages naturally enriches a child's vocabulary." },
    { id: "Anak yang merasa didengar lebih mudah diajak bekerja sama dibanding anak yang hanya diperintah.", en: "Children who feel heard are far easier to cooperate with than children who are only given orders." },
    { id: "Waktu tanpa gadget membantu anak usia dini mengembangkan imajinasi lewat permainan pura-pura.", en: "Screen-free time helps young children develop imagination through pretend play." },
    { id: "Setiap anak punya jam belajarnya sendiri — membandingkan dengan teman sebaya sering tidak adil.", en: "Every child has their own learning clock — comparing them to peers is often unfair." },
    { id: "Menyanyikan lagu penutup di akhir hari sekolah membantu anak beralih dari suasana belajar ke suasana rumah.", en: "Singing a closing song at the end of the school day helps children transition from learning mode to home mode." },
    { id: "Anak belajar mengatasi kegagalan kecil dengan lebih baik ketika orang dewasa tidak langsung turun tangan.", en: "Children learn to handle small failures better when adults resist the urge to step in immediately." },
    { id: "Cerita bergambar dengan tokoh yang mirip diri anak membantu mereka memahami emosi dalam kisah tersebut.", en: "Picture books with characters who resemble the child help them relate to and understand the emotions in the story." },
    { id: "Anak-anak menyerap lebih banyak dari nada suara dan bahasa tubuh kita daripada dari kata-kata itu sendiri.", en: "Children absorb more from our tone of voice and body language than from the words themselves." },
    { id: "Merayakan kemajuan kecil — huruf baru yang dikenal, angka baru yang dihitung — menjaga semangat belajar anak.", en: "Celebrating small wins — a new letter recognized, a new number counted — keeps a child's motivation to learn alive." }
  ];

  if (typeof module !== "undefined" && module.exports) {
    module.exports = quotes;
  } else {
    window.BRIGHTLINGS_QUOTES = quotes;
  }
})();
