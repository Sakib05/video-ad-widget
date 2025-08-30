// একাধিক বিজ্ঞাপনের ডাটা
const ads = [
    {
        id: 1,
        video: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
        logo: "https://i.ibb.co/6n4d1sF/logo.png",
        title: "আপনার ব্র্যান্ড এখানে",
        description: "আমাদের সেবা সম্পর্কে আরও জানতে এখনই ভিজিট করুন!",
        url: "https://example.com",
        bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4",
        logo: "https://i.ibb.co/7Qp3KqT/logo2.png",
        title: "ফ্যাশন ওয়ার্ল্ড",
        description: "নতুন ফ্যাশন কালেকশন দেখতে এখনই আমাদের ওয়েবসাইট ভিজিট করুন!",
        url: "https://example2.com",
        bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-for-a-photoshoot-1238-large.mp4",
        logo: "https://i.ibb.co/0XxQJ0f/logo3.png",
        title: "টেক সলিউশন",
        description: "আধুনিক প্রযুক্তির সাথে পরিচিত হতে আমাদের সাথে যোগাযোগ করুন!",
        url: "https://example3.com",
        bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-taking-a-photo-1236-large.mp4",
        logo: "https://i.ibb.co/6n4d1sF/logo.png",
        title: "ফটোগ্রাফি স্টুডিও",
        description: "প্রফেশনাল ফটোগ্রাফি সার্ভিসের জন্য আমাদের সাথে যোগাযোগ করুন!",
        url: "https://example4.com",
        bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 5,
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-relaxing-in-a-cafe-1239-large.mp4",
        logo: "https://i.ibb.co/7Qp3KqT/logo2.png",
        title: "ক্যাফে ডেলিশ",
        description: "মজাদার খাবার আর আরামদায়ক পরিবেশে আপনাকে অপেক্ষা করছে ক্যাফে ডেলিশ!",
        url: "https://example5.com",
        bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 6,
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-groceries-1248-large.mp4",
        logo: "https://i.ibb.co/0XxQJ0f/logo3.png",
        title: "সুপার শপ",
        description: "সেরা মানের পণ্য সবচেয়ে কম দামে পেতে আমাদের সুপার শপে ভিজিট করুন!",
        url: "https://example6.com",
        bgColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 7,
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-and-woman-cooking-together-1246-large.mp4",
        logo: "https://i.ibb.co/6n4d1sF/logo.png",
        title: "কুকিং ক্লাস",
        description: "পেশাদার শেফদের কাছ থেকে রান্না শিখুন এবং হয়ে উঠুন মাস্টার শেফ!",
        url: "https://example7.com",
        bgColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 8,
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-1245-large.mp4",
        logo: "https://i.ibb.co/7Qp3KqT/logo2.png",
        title: "ডিজিটাল মার্কেটিং",
        description: "আপনার ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে নিয়ে যেতে আমাদের সাথে যোগাযোগ করুন!",
        url: "https://example8.com",
        bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    {
        id: 9,
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-practicing-yoga-1244-large.mp4",
        logo: "https://i.ibb.co/0XxQJ0f/logo3.png",
        title: "যোগা সেন্টার",
        description: "শারীরিক ও মানসিক সুস্থতার জন্য যোগা অনুশীলন করুন আমাদের সাথে!",
        url: "https://example9.com",
        bgColor: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
    },
    {
        id: 10,
        video: "https://assets.mixkit.co/videos/preview/mixkit-man-reading-a-book-1247-large.mp4",
        logo: "https://i.ibb.co/6n4d1sF/logo.png",
        title: "বুক স্টোর",
        description: "জ্ঞানের ভান্ডারে ডুব দিতে আমাদের বুক স্টোরে ভিজিট করুন!",
        url: "https://example10.com",
        bgColor: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"
    }
];

// রেন্ডমভাবে একটি বিজ্ঞাপন নির্বাচন করার ফাংশন
function getRandomAd() {
    const randomIndex = Math.floor(Math.random() * ads.length);
    return ads[randomIndex];
}

// বিজ্ঞাপন HTML তৈরি করার ফাংশন
function createAdHTML(ad) {
    return `
        <div class="ad-container" onclick="visitAd('${ad.url}')">
            <div class="ad-content">
                <div class="video-section">
                    <video class="video-player" autoplay muted loop playsinline>
                        <source src="${ad.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="play-overlay">
                        <div class="play-button">
                            <div class="play-icon"></div>
                        </div>
                    </div>
                </div>
                
                <div class="info-section" style="background: ${ad.bgColor};">
                    <img src="${ad.logo}" alt="Advertiser Logo" class="advertiser-logo">
                    <h2 class="ad-title">${ad.title}</h2>
                    <p class="ad-description">${ad.description}</p>
                    <a href="#" class="cta-button" onclick="event.stopPropagation(); visitAd('${ad.url}')">
                        Visit Now <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// বিজ্ঞাপন ওয়েবসাইটে যাওয়ার ফাংশন
function visitAd(url) {
    window.open(url, '_blank');
}

// পেজ লোড হওয়ার সময় রেন্ডম বিজ্ঞাপন দেখানো
document.addEventListener('DOMContentLoaded', function() {
    const randomAd = getRandomAd();
    const adWrapper = document.getElementById('ad-wrapper');
    if (adWrapper) {
        adWrapper.innerHTML = createAdHTML(randomAd);
        
        // ভিডিও প্লে/পজ কন্ট্রোল এবং লুপ হ্যান্ডলিং
        const video = document.querySelector('.video-player');
        const playOverlay = document.querySelector('.play-overlay');
        
        if (playOverlay) {
            playOverlay.addEventListener('click', function(e) {
                e.stopPropagation();
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }
        
        // ভিডিও শেষ হলে আবার শুরু করার ইভেন্ট হ্যান্ডলার
        if (video) {
            video.addEventListener('ended', function() {
                // ভিডিও শেষ হলে আবার প্লে করা
                this.currentTime = 0;
                this.play();
            });
        }
    }
});
