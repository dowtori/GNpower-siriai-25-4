const translations = {
    ko: {
        hero_sub: "강릉시 특별 프로젝트",
        hero_title: "해외 IG 파워페이지 홍보 채널 모집",
        hero_desc: "드라마 '도깨비' 촬영지, 영진 해변을 전 세계에 알릴 파워 페이지를 찾습니다.",
        apply_now: "지금 지원하기",
        benefit_title: "활동 혜택",
        benefit_desc: "30만원",
        target_title: "활동 안내",
        target_desc: "최소 기준 충족 후 강릉시의 최종 검토를 거쳐 선별된 채널에 제공되는 소중한 기회입니다.",
        deadline_title: "모집 기한",
        deadline_desc: "4월 5일(일)까지",
        guide_title: "모집 가이드",
        item_theme: "홍보 주제",
        item_theme_desc: "영진해변(도깨비 촬영지) 및 강릉 주요 관광지",
        item_schedule: "진행 일정",
        schedule_1: "선정 안내 (강릉시 검토):",
        schedule_2: "콘텐츠 제작:",
        schedule_3: "게시 예정:",
        item_portfolio: "운영사 포트폴리오",
        apply_title: "지원하기",
        form_page_name: "인스타그램 프로필 링크 (URL)",
        form_country: "활용 지역",
        form_agreement: "위 프로젝트 진행 내용에 동의합니다.",
        form_contact: "연락처 (Email/Line/WhatsApp)",
        form_submit: "지원서 제출"
    },
    ja: {
        hero_sub: "江陵市特別プロジェクト",
        hero_title: "海外IGパワーページ 宣伝チャンネル募集",
        hero_desc: "ドラマ『トッケビ』のロケ地、領津（ヨンジ）海辺를 世界に広めるパワーページを募集します。",
        apply_now: "今すぐ応募",
        benefit_title: "活動特典",
        benefit_desc: "300,000 KRW",
        target_title: "活動のご案内",
        target_desc: "最小基準を満たし、江陵市の最終検討を経て厳選されたチャンネルのみに提供される特別なご提案です。",
        deadline_title: "募集期限",
        deadline_desc: "4月5일(일)까지",
        guide_title: "募集ガイド",
        item_theme: "プロモーションテーマ",
        item_theme_desc: "領津海辺（『トッケビ』ロケ地） 및 江陵의 主要 觀光地",
        item_schedule: "進行スケジュール",
        schedule_1: "選定案内 (江陵市の検討):",
        schedule_2: "コンテンツ制作:",
        schedule_3: "投稿予定:",
        item_portfolio: "運営会社ポートフォ리오",
        apply_title: "チャンネル応募",
        form_page_name: "Instagramプロフィール링크 (URL)",
        form_country: "活用地域",
        form_agreement: "上記のプロジェクト進行内容に同意します。",
        form_contact: "連絡先 (Email/Line/WhatsApp)",
        form_submit: "応募する"
    },
    "zh-tw": {
        hero_sub: "江陵市特別項目",
        hero_title: "海外 IG Power Page 宣傳頻道招募",
        hero_desc: "尋找能向世界推廣韓劇《孤單又燦爛的神－鬼怪》拍攝地——領津海邊의 Power Page。",
        apply_now: "立即申請",
        benefit_title: "活動福利",
        benefit_desc: "300,000 KRW",
        target_title: "活動指南",
        target_desc: "這是僅向符合最低標準並經過江陵市最終審核的精選頻道提供的專屬邀約。",
        deadline_title: "截止日期",
        deadline_desc: "截至 4월 5일(일)",
        guide_title: "招募指南",
        item_theme: "宣傳主題",
        item_theme_desc: "領津海邊（《鬼怪》拍攝地）及江陵主要旅遊景點",
        item_schedule: "活動時程",
        schedule_1: "入選通知 (江陵市審核):",
        schedule_2: "內容製作:",
        schedule_3: "預計發布:",
        item_portfolio: "營運代理商作品集",
        apply_title: "頻道申請",
        form_page_name: "Instagram 個人主頁連結 (URL)",
        form_country: "目標地區",
        form_agreement: "我同意上述項目進行內容。",
        form_contact: "聯繫方式 (Email/Line/WhatsApp)",
        form_submit: "提交申請"
    }
};

function setLanguage(lang) {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');
    
    // Update Custom Select label
    const activeLangLabel = document.querySelector('.active-lang-label');
    if (activeLangLabel) {
        const langMap = { 'ko': 'KR', 'ja': 'JP', 'zh-tw': 'TW' };
        activeLangLabel.textContent = langMap[lang] || lang.toUpperCase();
    }

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Handle Layout Visibility
    if (splash && !splash.classList.contains('hidden')) {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
        }, 800);
    }
    
    // Refresh Icons
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Close dropdown if open
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) dropdown.classList.remove('active');
}

// Custom Language Dropdown Toggle
function toggleDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!document.querySelector('.lang-picker').contains(e.target)) {
        document.querySelector('.lang-dropdown').classList.remove('active');
    }
});

// Form Handling
document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!document.getElementById('agreement').checked) {
        alert("Please agree to the project details to proceed.");
        return;
    }

    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    // Simulate API Call
    setTimeout(() => {
        alert("Thank you! Your application has been submitted.\n감사합니다! 지원이 완료되었습니다.");
        submitBtn.textContent = "Submitted Successfully";
        e.target.reset();
    }, 1500);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Initialize Icons
if (window.lucide) {
    lucide.createIcons();
}
