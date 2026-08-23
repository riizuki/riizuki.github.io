import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Me",
        "projects": "Projects",
        "skills": "Skills",
        "certificates": "Certificates",
        "contact": "Contact",
        "journal": "Journal"
      },
      "hero": {
        "greeting": "Hello, I am",
        "name": "Rizky Al Farid Hafizh.",
        "role": "A Software Engineer",
        "description": "Crafting digital experiences with a touch of retro futurism and brutalist principles.",
        "cta": "Contact me"
      },
      "about": {
        "title": "About Me",
        "behind": "Behind The",
        "design": "Design",
        "quote": "\"Navigating the digital landscape with mid-century principles & modern tech.\"",
        "career": "Career Path",
        "marquee": {
          "history": "History",
          "experience": "Experience",
          "background": "Background"
        },
        "content1": "I am a passionate Software Engineer dedicated to building modern web and mobile applications. With expertise spanning from JavaScript to C++ and Flutter, I believe technology should be used to create intuitive and meaningful digital experiences.",
        "content2": "My journey ranges from crafting scalable backend systems to integrating Machine Learning models into mobile apps. I focus on writing clean, maintainable code, solving complex algorithmic problems, and delivering high-performance applications with user-focused development at the core.",
        "more": "More about me"
      },
      "experience": {
        "title": "Education & Experience",
        "jobs": [
          { "role": "Informatics Engineering", "company": "Universitas Komputer Indonesia (UNIKOM)", "period": "2023 - Present", "description": "Currently pursuing bachelor's degree. Passionate about software engineering with a strong interest in Web Development and UI/UX Design." },
          { "role": "Member", "company": "Google Developer Student Club ITB", "period": "Sep 2023 - Sep 2024", "description": "Designed and implemented responsive web applications using HTML, CSS, JavaScript, and React.js. Collaborated in team-based projects and applied mobile-first design principles." },
          { "role": "Frontend Developer (Remote)", "company": "Bandung Coders Community", "period": "2023", "description": "Developed modern web applications using React and Next.js" },
          { "role": "Computer Technician (Internship)", "company": "CV. Mekar Utama", "period": "Mar 2022 - Jun 2022", "description": "Experienced in assembling hardware, troubleshooting OS (Windows/Linux), and providing technical support for network and software issues." }
        ]
      },
      "projects": {
        "title": "Selected Projects",
        "subtitle": "A curated collection of mid-century inspired digital artifacts.",
        "viewAll": "All projects",
        "list": [
          {
            "title": "Mobile Redesign - Portfolio",
            "description": "A fully responsive mobile redesign of this personal portfolio, featuring a brutalist bento grid, immersive typography, and neon cyber aesthetics.",
            "tags": ["React", "TailwindCSS", "Framer Motion"],
            "image": "/images/projects/mobile-portfolio.jpg"
          },
          {
            "title": "Piano Teacher Portfolio",
            "description": "An elegant and modern personal branding website design for a private piano teacher. Built on the concept of 'Elegant Classical Piano meets Modern Minimalism' with warm ivory and charcoal palettes, highlighting professional music education.",
            "tags": ["UI/UX Design", "Figma", "Branding"],
            "image": "/images/projects/piano-teacher.jpg"
          },
          {
            "title": "Portfolio UI Design",
            "description": "Professional portfolio UI design to build digital identity as a Frontend Developer & UI/UX Designer.",
            "tags": ["Figma"],
            "image": "/images/projects/portofolioui.png"
          },
          {
            "title": "Social Awareness Website",
            "description": "Social campaign website raising awareness about humanitarian issues in Papua.",
            "tags": ["HTML", "CSS", "Javascript", "Webpack"],
            "image": "/images/projects/papua.png"
          },
          {
            "title": "City Blog Web App",
            "description": "Interactive blog showcasing the culture and charm of Bandung city.",
            "tags": ["ReactJS"],
            "image": "/images/projects/bandungcity.png"
          },
          {
            "title": "Bookshelf API Service",
            "description": "RESTful API for book collection management, complete with docs and deployment-ready.",
            "tags": ["Postman", "NodeJS", "Google Cloud"],
            "image": "/images/projects/bookshelf.png"
          }
        ]
      },
      "contact": {
        "title": "Let's work together",
        "desc": "Have a project in mind, or just want to say hi? Send me a message and I'll get back to you shortly.",
        "email": "Email me",
        "location": "Location",
        "name": "Name",
        "message": "Message",
        "send": "Send Message"
      },
      "skills": {
        "title": "Core Skills",
        "subtitle": "The instruments, languages, and frameworks used to construct digital experiences.",
        "categories": [
          {
            "name": "Frontend Development",
            "items": ["React.js", "Next.js", "Vite", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
          },
          {
            "name": "Backend Development",
            "items": ["Node.js", "Express.js", "MySQL", "MongoDB", "Firebase", "REST APIs"]
          },
          {
            "name": "Mobile Development",
            "items": ["Android Studio", "Dart", "Flutter"]
          },
          {
            "name": "Tools & Technologies",
            "items": ["Git", "GitHub", "Figma", "VS Code", "Webpack", "Vercel"]
          }
        ]
      },
      "certificates": {
        "title": "Certificates & Achievements",
        "subtitle": "Official Documents & Honors",
        "list": [
          { "title": "Software Engineer", "date": "August 2026", "issuer": "HackerRank", "image": "/images/certificate/hackerrank-swe.png" },
          { "title": "React Developer Expert", "date": "June 2025", "issuer": "IDCamp 2024 by Indosat Ooredoo Hutchison", "image": "/images/certificate/idcamp-react.png" },
          { "title": "Flutter Developer Expert", "date": "January 2025", "issuer": "IDCamp 2025 by Indosat Ooredoo Hutchison", "image": "/images/certificate/flutter-expert.png" },
          { "title": "Frontend Developer Expert", "date": "January 2024", "issuer": "Dicoding Indonesia", "image": "/images/certificate/dicoding-frontend.png" },
          { "title": "UI/UX Design With Figma", "date": "October 2024", "issuer": "Udemy", "image": "/images/certificate/certificate-figma.jpg" },
          { "title": "Javascript Intermediate (Gold)", "date": "February 2025", "issuer": "Skilvul", "image": "/images/certificate/certificate-gold.jpg" },
          { "title": "Introduction Cyber Security", "date": "April 2023", "issuer": "Cisco Academy", "image": "/images/certificate/certificate-cyber.jpg" },
          { "title": "Belajar Cepat Vue.JS", "date": "June 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-vue.jpg" },
          { "title": "Jquery Basic", "date": "June 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-jquery.jpg" },
          { "title": "Web Programming Basic", "date": "March 2023", "issuer": "Jabar Digital Academy", "image": "/images/certificate/certificate-pemweb.jpg" }
        ],
        "view": "View Credential"
      },
      "footer": {
        "name": "RIZKY AL FARID HAFIZH",
        "tagline": "Building minimal and modern web experiences.",
        "rights": "© 2026 RIZKY AL FARID HAFIZH. ALL RIGHTS RESERVED.",
        "available": "Available for freelance",
        "lets": "Let's build",
        "thefuture": "the future.",
        "crafting": "Crafting digital experiences with a touch of retro futurism and brutalist principles.",
        "localtime": "Local Time (WIB)",
        "location": "Location",
        "copyrighttext": "Copyright"
      },
      "home": {
        "expertise": "Expertise",
        "allskills": "All Skills",
        "honors": "Honors",
        "viewall": "View All",
        "featured": "Featured Work"
      },
      "journal": {
        "title": "The KKN Chronicles",
        "subtitle": "A collection of stories, thoughts, and memories from the community service program.",
        "read_more": "Read Story"
      },
      "notfound": {
        "title": "PAGE NOT FOUND",
        "description": "Whoops! It looks like you've wandered off the grid. The coordinates you provided don't exist in our current dimension.",
        "button": "Return to Base"
      }
    }
  },
  id: {
    translation: {
      "nav": {
        "home": "Beranda",
        "about": "Tentang Saya",
        "projects": "Proyek",
        "skills": "Keahlian",
        "certificates": "Sertifikat",
        "contact": "Kontak",
        "journal": "Jurnal"
      },
      "hero": {
        "greeting": "Halo, saya",
        "name": "Rizky Al Farid Hafizh.",
        "role": "Software Engineer",
        "description": "Merancang pengalaman digital dengan sentuhan retro futurisme dan prinsip brutalisme.",
        "cta": "Hubungi saya"
      },
      "about": {
        "title": "Tentang Saya",
        "behind": "Di Balik",
        "design": "Desain",
        "quote": "\"Menjelajahi dunia digital dengan prinsip abad pertengahan & teknologi modern.\"",
        "career": "Perjalanan Karir",
        "marquee": {
          "history": "Riwayat",
          "experience": "Pengalaman",
          "background": "Latar Belakang"
        },
        "content1": "Saya adalah seorang Software Engineer yang berdedikasi membangun aplikasi web dan seluler modern. Dengan keahlian yang mencakup JavaScript, C++, hingga Flutter, saya percaya teknologi harus dimanfaatkan untuk menciptakan pengalaman digital yang intuitif dan bermakna.",
        "content2": "Perjalanan saya berkisar dari merancang sistem backend yang skalabel hingga mengintegrasikan model Machine Learning ke dalam aplikasi mobile. Saya berfokus pada penulisan kode yang bersih, memecahkan masalah algoritma yang kompleks, dan memberikan aplikasi berperforma tinggi yang selalu berpusat pada pengguna.",
        "more": "Selengkapnya tentang saya"
      },
      "experience": {
        "title": "Pendidikan & Pengalaman",
        "jobs": [
          { "role": "Teknik Informatika", "company": "Universitas Komputer Indonesia (UNIKOM)", "period": "2023 - Sekarang", "description": "Mahasiswa aktif jenjang S1. Memiliki minat kuat pada rekayasa perangkat lunak, khususnya dalam Pengembangan Web dan Desain UI/UX." },
          { "role": "Anggota", "company": "Google Developer Student Club ITB", "period": "Sep 2023 - Sep 2024", "description": "Merancang dan mengimplementasikan aplikasi web responsif menggunakan HTML, CSS, JavaScript, dan React.js. Berkolaborasi dalam proyek berbasis tim dan menerapkan prinsip desain mobile-first." },
          { "role": "Frontend Developer (Remote)", "company": "Bandung Coders Community", "period": "2023", "description": "Mengembangkan aplikasi web modern menggunakan React dan Next.js" },
          { "role": "Teknisi Komputer (Magang)", "company": "CV. Mekar Utama", "period": "Mar 2022 - Jun 2022", "description": "Berpengalaman merakit perangkat keras, troubleshooting OS (Windows/Linux), dan memberikan dukungan teknis untuk masalah jaringan dan perangkat lunak." }
        ]
      },
      "projects": {
        "title": "Proyek Pilihan",
        "subtitle": "Koleksi pilihan karya digital yang terinspirasi dari gaya pertengahan abad.",
        "viewAll": "Semua proyek",
        "list": [
          {
            "title": "Desain Mobile - Portofolio",
            "description": "Desain ulang versi mobile dari portofolio personal ini, menampilkan antarmuka bento grid brutalist, tipografi imersif, dan estetika siber neon.",
            "tags": ["React", "TailwindCSS", "Framer Motion"],
            "image": "/images/projects/mobile-portfolio.jpg"
          },
          {
            "title": "Portofolio Guru Piano",
            "description": "Desain website personal branding elegan dan modern untuk guru les piano privat. Mengusung konsep 'Elegant Classical Piano meets Modern Minimalism' dengan palet ivory dan charcoal yang hangat, menonjolkan profesionalitas pendidikan musik.",
            "tags": ["UI/UX Design", "Figma", "Branding"],
            "image": "/images/projects/piano-teacher.jpg"
          },
          {
            "title": "Desain UI Portofolio",
            "description": "Desain UI portofolio profesional untuk membangun identitas digital sebagai Frontend Developer & UI/UX Designer.",
            "tags": ["Figma"],
            "image": "/images/projects/portofolioui.png"
          },
          {
            "title": "Website Kesadaran Sosial",
            "description": "Website kampanye sosial untuk meningkatkan kesadaran tentang isu kemanusiaan di Papua.",
            "tags": ["HTML", "CSS", "Javascript", "Webpack"],
            "image": "/images/projects/papua.png"
          },
          {
            "title": "Aplikasi Web Blog Kota",
            "description": "Blog interaktif yang menampilkan budaya dan pesona kota Bandung.",
            "tags": ["ReactJS"],
            "image": "/images/projects/bandungcity.png"
          },
          {
            "title": "Layanan API Rak Buku",
            "description": "RESTful API untuk manajemen koleksi buku, lengkap dengan dokumentasi dan siap di-deploy.",
            "tags": ["Postman", "NodeJS", "Google Cloud"],
            "image": "/images/projects/bookshelf.png"
          }
        ]
      },
      "contact": {
        "title": "Mari bekerja sama",
        "desc": "Punya ide proyek, atau sekadar ingin menyapa? Kirimkan pesan dan saya akan segera membalasnya.",
        "email": "Kirim Email",
        "location": "Lokasi",
        "name": "Nama",
        "message": "Pesan",
        "send": "Kirim Pesan"
      },
      "skills": {
        "title": "Keahlian Utama",
        "subtitle": "Instrumen, bahasa pemrograman, dan kerangka kerja yang digunakan untuk membangun pengalaman digital.",
        "categories": [
          {
            "name": "Frontend Development",
            "items": ["React.js", "Next.js", "Vite", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
          },
          {
            "name": "Backend Development",
            "items": ["Node.js", "Express.js", "MySQL", "MongoDB", "Firebase", "REST APIs"]
          },
          {
            "name": "Mobile Development",
            "items": ["Android Studio", "Dart", "Flutter"]
          },
          {
            "name": "Tools & Technologies",
            "items": ["Git", "GitHub", "Figma", "VS Code", "Webpack", "Vercel"]
          }
        ]
      },
      "certificates": {
        "title": "Sertifikat & Pencapaian",
        "subtitle": "Dokumen Resmi & Penghargaan",
        "list": [
          { "title": "Software Engineer", "date": "Agustus 2026", "issuer": "HackerRank", "image": "/images/certificate/hackerrank-swe.png" },
          { "title": "React Developer Expert", "date": "Juni 2025", "issuer": "IDCamp 2024 by Indosat Ooredoo Hutchison", "image": "/images/certificate/idcamp-react.png" },
          { "title": "Flutter Developer Expert", "date": "Januari 2025", "issuer": "IDCamp 2025 by Indosat Ooredoo Hutchison", "image": "/images/certificate/flutter-expert.png" },
          { "title": "Frontend Developer Expert", "date": "Januari 2024", "issuer": "Dicoding Indonesia", "image": "/images/certificate/dicoding-frontend.png" },
          { "title": "UI/UX Design With Figma", "date": "Oktober 2024", "issuer": "Udemy", "image": "/images/certificate/certificate-figma.jpg" },
          { "title": "Javascript Intermediate (Gold)", "date": "Februari 2025", "issuer": "Skilvul", "image": "/images/certificate/certificate-gold.jpg" },
          { "title": "Introduction Cyber Security", "date": "April 2023", "issuer": "Cisco Academy", "image": "/images/certificate/certificate-cyber.jpg" },
          { "title": "Belajar Cepat Vue.JS", "date": "Juni 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-vue.jpg" },
          { "title": "Jquery Basic", "date": "Juni 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-jquery.jpg" },
          { "title": "Web Programming Basic", "date": "Maret 2023", "issuer": "Jabar Digital Academy", "image": "/images/certificate/certificate-pemweb.jpg" }
        ],
        "view": "Lihat Kredensial"
      },
      "footer": {
        "name": "RIZKY AL FARID HAFIZH",
        "tagline": "Membangun pengalaman web yang minimalis dan modern.",
        "rights": "© 2026 RIZKY AL FARID HAFIZH. HAK CIPTA DILINDUNGI.",
        "available": "Tersedia untuk freelance",
        "lets": "Mari bangun",
        "thefuture": "masa depan.",
        "crafting": "Merancang pengalaman digital dengan sentuhan retro futurisme dan prinsip brutalisme.",
        "localtime": "Waktu Lokal (WIB)",
        "location": "Lokasi",
        "copyrighttext": "Hak Cipta"
      },
      "home": {
        "expertise": "Keahlian",
        "allskills": "Semua Keahlian",
        "honors": "Penghargaan",
        "viewall": "Lihat Semua",
        "featured": "Karya Pilihan"
      },
      "journal": {
        "title": "Catatan KKN",
        "subtitle": "Kumpulan cerita, pemikiran, dan kenangan selama program Kuliah Kerja Nyata.",
        "read_more": "Baca Cerita"
      },
      "notfound": {
        "title": "HALAMAN TIDAK DITEMUKAN",
        "description": "Ups! Sepertinya Anda keluar dari jalur. Koordinat yang Anda tuju tidak tersedia di dimensi ini.",
        "button": "Kembali ke Beranda"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
