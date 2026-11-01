// ====== INVITATION CONTENT (edit this file; keep the quotes and commas) ======
// Every text below has an English (en) and Khmer (km) version.
// Date, time, venue and map link are in event.js. Firebase keys are in config.js.

export const CONTENT = {
  en: {
    name1: "KRY Synan",
    name2: "CHOY Chanrathana",
    gFather: "Mr. KRY Sruy",
    gMother: "Mrs. HEU Hong",
    bFather: "Mr. CHEAM MEAN",
    bMother: "Mrs. UN Phalla",
    inviteText: "We cordially invite Their Excellencies, distinguished guests, and honored attendees to join us in celebrating our beloved son and daughter’s wedding and to bless them with happiness and prosperity.",
    lunarLine: "Thursday, the 11th Waning Moon of Phalguna, Year of the Horse, Buddhist Era 2570",
    venueLine: "At Phum Rolous, Doem Ruos Commune, Kandal Stueng District, Kandal Province",
    venueName: "Phum Rolous, Doem Ruos Commune",
    venueAddr: "Kandal Stueng District, Kandal Province, Cambodia",
    prog1: "Hair Cutting Ceremony",
    prog2: "Monk Blessing Ceremony",
    prog3: "Pairing Ceremony",
    prog4: "Wedding Reception",
    prog4Sub: "Dinner & Dancing",
    t1: "07:00 AM",
    t2: "09:00 AM",
    t3: "11:00 AM",
    t4: "05:00 PM",
    giftDesc: "Your presence is enough, but if you wish to bless us, you can use the digital registry below.",
    couple: "KRY Synan & CHOY Chanrathana",
  },
  km: {
    name1: "គ្រី ស៊ីណាន",
    name2: "ចយ ច័ន្ទរតនា",
    gFather: "លោក គ្រី​ ស្រ៊ុយ",
    gMother: "លោកស្រី ហ៊ឺ ហ៊ង",
    bFather: "លោក ចែម មាន",
    bMother: "លោកស្រី អ៊ុន ផល្លា",
    inviteText: "យើងខ្ញុំមានកិត្តិយស សូមគោរពអញ្ជើញឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និង ជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្ដី ជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុស-ស្រី របស់យើងខ្ញុំ។",
    lunarLine: "ត្រូវនឹងថ្ងៃព្រហស្បតិ៍ ១១ រោច ខែផល្គុន ឆ្នាំមមី អដ្ឋស័ក ពុទ្ធសករាជ ២៥៧០",
    venueLine: "ស្ថិតនៅ ភូមិរលួស ឃុំដើមឬស ស្រុកកណ្តាលស្ទឹង ខេត្តកណ្តាល",
    venueName: "ភូមិរលួស ឃុំដើមឬស",
    venueAddr: "ស្រុកកណ្តាលស្ទឹង ខេត្តកណ្តាល",
    prog1: "ពិធីកាត់សក់បង្កក់សិរី",
    prog2: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
    prog3: "ពិធីសំពះផ្ទឹម និងចងដៃ",
    prog4: "ពិធីទទួលភ្ញៀវកិត្តិយស",
    prog4Sub: "អាហារពេលល្ងាច និងរាំលេងកម្សាន្ត",
    t1: "ម៉ោង ៧:០០ ព្រឹក",
    t2: "ម៉ោង ៩:០០ ព្រឹក",
    t3: "ម៉ោង ១១:០០ ព្រឹក",
    t4: "ម៉ោង ៥:០០ ល្ងាច",
    giftDesc: "វត្តមានរបស់លោកអ្នកគឺជាកិត្តិយសដ៏ធំបំផុត។ ប្រសិនបើលោកអ្នកចង់ផ្តល់ចំណងដៃ អាចផ្ញើតាមរយៈគណនីខាងក្រោម។",
    couple: "គ្រី ស៊ីណាន នឹង ចយ ច័ន្ទរតនា",
  },
};

// Gift card
export const BANK = {
  bankName: "ABA BANK",
  accountNumber: "123456789",                 // shown on the card and copied by the Copy button
  qr: "https://placehold.co/150x150/F3D3D3/7A2230?text=QR+Code",   // later: "assets/qr.png"
};

// Gallery photos, in order. Use files in assets/ (e.g. "assets/photo1.jpg") or full web links.
export const GALLERY = [
  "https://placehold.co/400x500/F3D3D3/7A2230?text=Photo+1",
  "https://placehold.co/400x300/F3D3D3/7A2230?text=Photo+2",
  "https://placehold.co/400x450/F3D3D3/7A2230?text=Photo+3",
  "https://placehold.co/400x350/F3D3D3/7A2230?text=Photo+4",
];

// Program timeline. Add, remove or reorder items freely.
// icon: monk, arch, gift, lips, ring, scissors, baysei, pray, dinner, toast, heart
export const PROGRAM = [
  {
    "icon": "monk",
    "time": {
      "en": "06:00 AM",
      "km": "ម៉ោង ០៦:០០ នាទីព្រឹក"
    },
    "text": {
      "en": "Monk chanting and blessing ceremony",
      "km": "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត"
    }
  },
  {
    "icon": "arch",
    "time": {
      "en": "06:30 AM",
      "km": "ម៉ោង ០៦:៣០ នាទីព្រឹក"
    },
    "text": {
      "en": "Honoured guests gather to prepare for the gift procession",
      "km": "ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំពិធីហែជំនូន"
    }
  },
  {
    "icon": "gift",
    "time": {
      "en": "07:00 AM",
      "km": "ម៉ោង ០៧:០០ នាទីព្រឹក"
    },
    "text": {
      "en": "Gift procession ceremony (Hae Chum Noun)",
      "km": "ពិធីហែជំនូន (កំណត់)"
    }
  },
  {
    "icon": "lips",
    "time": {
      "en": "07:30 AM",
      "km": "ម៉ោង ០៧:៣០ នាទីព្រឹក"
    },
    "text": {
      "en": "Family gathering and betel ceremony",
      "km": "ពិធីជំនុំជើងការ និងពិសាស្លាកំណាត់"
    }
  },
  {
    "icon": "ring",
    "time": {
      "en": "08:00 AM",
      "km": "ម៉ោង ០៨:០០ នាទីព្រឹក"
    },
    "text": {
      "en": "Ring exchange ceremony",
      "km": "ពិធីបំពាក់ចិញ្ចៀន"
    }
  },
  {
    "icon": "scissors",
    "time": {
      "en": "09:00 AM",
      "km": "ម៉ោង ០៩:០០ នាទីព្រឹក"
    },
    "text": {
      "en": "Hair cutting ceremony",
      "km": "ពិធីកាត់សក់បង្កក់សិរី"
    }
  },
  {
    "icon": "baysei",
    "time": {
      "en": "10:00 AM",
      "km": "ម៉ោង ១០:០០ នាទីព្រឹក"
    },
    "text": {
      "en": "Khan Sla ceremony",
      "km": "ពិធីជាវខាន់ស្លា"
    }
  },
  {
    "icon": "pray",
    "time": {
      "en": "10:30 AM",
      "km": "ម៉ោង ១០:៣០ នាទីព្រឹក"
    },
    "text": {
      "en": "Candle circling, Sampeah Phtem blessing and hand tying",
      "km": "ពិធីបង្វិលពពិល និងសំពះផ្ទឹមសែនចងដៃ"
    }
  },
  {
    "icon": "dinner",
    "time": {
      "en": "12:00 PM",
      "km": "ម៉ោង ១២:០០ ថ្ងៃត្រង់"
    },
    "text": {
      "en": "Lunch reception for honoured guests",
      "km": "អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ ថ្ងៃត្រង់"
    }
  },
  {
    "icon": "toast",
    "time": {
      "en": "05:00 PM",
      "km": "ម៉ោង ០៥:០០ ល្ងាច"
    },
    "text": {
      "en": "Evening dinner reception for honoured guests",
      "km": "អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ ពេលល្ងាច"
    }
  }
];

// Optional: a second account for riel. When filled in, guests see USD / KHR tabs on the gift card.
// export const BANK_KHR = { bankName: "ABA BANK", accountNumber: "", qr: "assets/qr-khr.png" };
