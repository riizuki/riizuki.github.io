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
        "contact": "Contact"
      },
      "hero": {
        "greeting": "Hello, I am",
        "name": "Rizky Al Farid Hafizh.",
        "role": "A Software Engineer",
        "description": "Building modern web and mobile applications. I turn complex ideas into meaningful digital experiences using clean design, scalable systems, and strong algorithmic foundations.",
        "cta": "Contact me"
      },
      "about": {
        "title": "About Me",
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
        "viewAll": "All projects",
        "list": [
          {
            "title": "Personal Portfolio Website",
            "description": "Interactive portfolio website to strengthen personal branding and showcase modern skills.",
            "tags": ["React", "TailwindCSS", "Typescript"],
            "image": "/images/projects/portoflio.png"
          },
          {
            "title": "Portfolio UI Design",
            "description": "Professional portfolio UI design to build digital identity as a Frontend Developer & UI/UX Designer.",
            "tags": ["Figma"],
            "image": "/images/projects/portofolioui.png"
          },
          {
            "title": "Anagram App UI Design",
            "description": "Anagram app interface design focusing on simplicity and ease of exploration.",
            "tags": ["Figma"],
            "image": "/images/projects/anagramui.png"
          },
          {
            "title": "Social Awareness Website",
            "description": "Social campaign website raising awareness about humanitarian issues in Papua.",
            "tags": ["HTML", "CSS", "Javascript", "Webpack"],
            "image": "/images/projects/papua.png"
          },
          {
            "title": "News Landing Page",
            "description": "Lightweight news page with a modern and user-friendly interface.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/news.png"
          },
          {
            "title": "Anagram Finder Web App",
            "description": "Fast anagram finder application based on algorithms with a minimalist interface.",
            "tags": ["Javascript", "SCSS", "Web Component"],
            "image": "/images/projects/anagram.png"
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
          },
          {
            "title": "Todolist Web App",
            "description": "Simple to-do list app to track and complete daily tasks.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/todolist.png"
          },
          {
            "title": "Suwit Jawa Game",
            "description": "Local Rock-Paper-Scissors game with responsive view and interactive experience.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/suwitjawa.png"
          }
        ]
      },
      "contact": {
        "title": "Let's work together",
        "email": "Email me",
        "name": "Name",
        "message": "Message",
        "send": "Send Message"
      },
      "skills": {
        "title": "Core Skills",
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
        "list": [
          { "title": "React Developer level Intermediate", "date": "March 2025", "issuer": "IDCamp 2024 by Indosat Ooredoo Hutchison", "image": "/images/certificate/certicicate-idcamp(react).jpg" },
          { "title": "Frontend Developer (React)", "date": "February 2025", "issuer": "HackerRank", "image": "/images/certificate/certificate-hackerrank.jpg" },
          { "title": "Javascript Intermediate (Gold)", "date": "February 2025", "issuer": "Skilvul", "image": "/images/certificate/certificate-gold.jpg" },
          { "title": "UI/UX Design With Figma", "date": "October 2024", "issuer": "Udemy", "image": "/images/certificate/certificate-figma.jpg" },
          { "title": "Frontend Developer Expert", "date": "January 2024", "issuer": "Dicoding Indonesia", "image": "/images/certificate/certificate-expert.jpg" },
          { "title": "Belajar Cepat Vue.JS", "date": "June 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-vue.jpg" },
          { "title": "Jquery Basic", "date": "June 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-jquery.jpg" },
          { "title": "Introduction Cyber Security", "date": "April 2023", "issuer": "Cisco Academy", "image": "/images/certificate/certificate-cyber.jpg" },
          { "title": "Web Programming Basic", "date": "March 2023", "issuer": "Jabar Digital Academy", "image": "/images/certificate/certificate-pemweb.jpg" }
        ],
        "view": "View Credential"
      },
      "footer": {
        "name": "RIZKY AL FARID HAFIZH",
        "tagline": "Building minimal and modern web experiences.",
        "rights": "© 2026 RIZKY AL FARID HAFIZH. ALL RIGHTS RESERVED."
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
        "contact": "Kontak"
      },
      "hero": {
        "greeting": "Halo, saya",
        "name": "Rizky Al Farid Hafizh.",
        "role": "Seorang Software Engineer",
        "description": "Membangun aplikasi web dan seluler modern. Saya mewujudkan ide kompleks menjadi pengalaman digital yang bermakna menggunakan desain bersih, sistem skalabel, dan fondasi algoritma yang kuat.",
        "cta": "Hubungi saya"
      },
      "about": {
        "title": "Tentang Saya",
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
        "viewAll": "Semua proyek",
        "list": [
          {
            "title": "Website Portofolio Personal",
            "description": "Website portofolio interaktif untuk memperkuat personal branding dan menampilkan keahlian modern.",
            "tags": ["React", "TailwindCSS", "Typescript"],
            "image": "/images/projects/portoflio.png"
          },
          {
            "title": "Desain UI Portofolio",
            "description": "Desain UI portofolio profesional untuk membangun identitas digital sebagai Frontend Developer & UI/UX Designer.",
            "tags": ["Figma"],
            "image": "/images/projects/portofolioui.png"
          },
          {
            "title": "Desain UI Aplikasi Anagram",
            "description": "Desain antarmuka aplikasi anagram dengan fokus pada kesederhanaan dan kemudahan eksplorasi.",
            "tags": ["Figma"],
            "image": "/images/projects/anagramui.png"
          },
          {
            "title": "Website Kesadaran Sosial",
            "description": "Website kampanye sosial untuk meningkatkan kesadaran tentang isu kemanusiaan di Papua.",
            "tags": ["HTML", "CSS", "Javascript", "Webpack"],
            "image": "/images/projects/papua.png"
          },
          {
            "title": "Halaman Utama Berita",
            "description": "Halaman berita ringan dengan antarmuka yang modern dan ramah pengguna.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/news.png"
          },
          {
            "title": "Aplikasi Web Pencari Anagram",
            "description": "Aplikasi pencari anagram yang cepat berbasis algoritma dengan antarmuka minimalis.",
            "tags": ["Javascript", "SCSS", "Web Component"],
            "image": "/images/projects/anagram.png"
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
          },
          {
            "title": "Aplikasi Web Todolist",
            "description": "Aplikasi daftar tugas sederhana untuk melacak dan menyelesaikan tugas harian.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/todolist.png"
          },
          {
            "title": "Permainan Suwit Jawa",
            "description": "Permainan Suwit Jawa lokal dengan tampilan responsif dan pengalaman interaktif.",
            "tags": ["HTML", "CSS", "Javascript"],
            "image": "/images/projects/suwitjawa.png"
          }
        ]
      },
      "contact": {
        "title": "Mari bekerja sama",
        "email": "Kirim Email",
        "name": "Nama",
        "message": "Pesan",
        "send": "Kirim Pesan"
      },
      "skills": {
        "title": "Keahlian Utama",
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
        "list": [
          { "title": "React Developer level Intermediate", "date": "Maret 2025", "issuer": "IDCamp 2024 by Indosat Ooredoo Hutchison", "image": "/images/certificate/certicicate-idcamp(react).jpg" },
          { "title": "Frontend Developer (React)", "date": "Februari 2025", "issuer": "HackerRank", "image": "/images/certificate/certificate-hackerrank.jpg" },
          { "title": "Javascript Intermediate (Gold)", "date": "Februari 2025", "issuer": "Skilvul", "image": "/images/certificate/certificate-gold.jpg" },
          { "title": "UI/UX Design With Figma", "date": "Oktober 2024", "issuer": "Udemy", "image": "/images/certificate/certificate-figma.jpg" },
          { "title": "Frontend Developer Expert", "date": "Januari 2024", "issuer": "Dicoding Indonesia", "image": "/images/certificate/certificate-expert.jpg" },
          { "title": "Belajar Cepat Vue.JS", "date": "Juni 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-vue.jpg" },
          { "title": "Jquery Basic", "date": "Juni 2023", "issuer": "Codepolitan", "image": "/images/certificate/certificate-jquery.jpg" },
          { "title": "Introduction Cyber Security", "date": "April 2023", "issuer": "Cisco Academy", "image": "/images/certificate/certificate-cyber.jpg" },
          { "title": "Web Programming Basic", "date": "Maret 2023", "issuer": "Jabar Digital Academy", "image": "/images/certificate/certificate-pemweb.jpg" }
        ],
        "view": "Lihat Kredensial"
      },
      "footer": {
        "name": "RIZKY AL FARID HAFIZH",
        "tagline": "Membangun pengalaman web yang minimalis dan modern.",
        "rights": "© 2026 RIZKY AL FARID HAFIZH. HAK CIPTA DILINDUNGI."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
