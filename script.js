// Landing Page JavaScript with Multi-language Support
document.addEventListener('DOMContentLoaded', function() {
    // 初始化多语言支持
    initializeLanguageSupport();
    
    // 平滑滚动到锚点
    setupSmoothScrolling();
    
    // 导航栏滚动效果
    setupNavbarScrollEffect();
    
    // 页面加载动画
    setupPageAnimation();
    
    // 移动端导航菜单（如果需要的话）
    setupMobileMenu();
    
    // 输出语言信息用于调试
    console.log('🌐 Browser Language:', navigator.language || navigator.userLanguage);
    console.log('📝 Current Page Language:', document.documentElement.getAttribute('lang'));
});

// 多语言数据
const translations = {
    'zh': {
        // 导航栏
        'nav-title': 'Audio Converter',
        'nav-features': '功能',
        'nav-download': '下载',
        'nav-contact': '联系',
        
        // 主页横幅
        'hero-title': '专业音频转换工具',
        'hero-subtitle': '快速、高质量、支持多种格式的音频转换应用',
        'hero-download': '免费下载',
        'hero-learn-more': '了解更多',
        'preview-title': 'Audio Converter',
        
        // 功能特色
        'features-title': '强大功能',
        'feature-speed-title': '高速转换',
        'feature-speed-desc': '采用优化算法，转换速度快，处理大文件也毫无压力',
        'feature-quality-title': '高质量输出',
        'feature-quality-desc': '保持音频原有质量，支持多种采样率和比特率设置',
        'feature-formats-title': '多格式支持',
        'feature-formats-desc': '支持 MP3、WAV、M4A、OGG、FLAC 等主流音频格式',
        'feature-privacy-title': '隐私安全',
        'feature-privacy-desc': '本地处理，文件不上传服务器，保护您的隐私安全',
        'feature-batch-title': '批量处理',
        'feature-batch-desc': '支持批量选择和转换多个文件，提高工作效率',
        'feature-ui-title': '简洁界面',
        'feature-ui-desc': '直观易用的界面设计，操作简单，上手即用',
        
        // 下载区域
        'download-title': '立即下载',
        'download-subtitle': '支持多个平台，选择适合您的版本',
        'ios-store': 'App Store',
        'android-store': 'Google Play',
        'desktop-platform': '桌面版',
        
        // 联系区域
        'contact-title': '联系我们',
        'contact-question': '有问题或建议？',
        'contact-feedback': '我们很乐意听到您的反馈，帮助我们改进产品。',
        'github-project': 'GitHub 项目',
        
        // 页脚
        'footer-desc': '专业的音频转换工具',
        'footer-features': '功能特色',
        'footer-download': '下载应用',
        'footer-contact': '联系我们',
        'footer-copyright': '© 2025 Audio Converter. 保留所有权利.',
        
        // 模态框
        'modal-coming-soon': '🚀 即将推出',
        'modal-platform-developing': '版本正在开发中，敬请期待！',
        'modal-github-follow': '您可以关注我们的 GitHub 项目获取最新进展。',
        'modal-view-github': '查看 GitHub',
        'modal-close': '关闭'
    },
    'en': {
        // Navigation
        'nav-title': 'Audio Converter',
        'nav-features': 'Features',
        'nav-download': 'Download',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Professional Audio Converter',
        'hero-subtitle': 'Fast, high-quality audio conversion app supporting multiple formats',
        'hero-download': 'Free Download',
        'hero-learn-more': 'Learn More',
        'preview-title': 'Audio Converter',
        
        // Features
        'features-title': 'Powerful Features',
        'feature-speed-title': 'High-Speed Conversion',
        'feature-speed-desc': 'Optimized algorithms for fast conversion, handles large files effortlessly',
        'feature-quality-title': 'High-Quality Output',
        'feature-quality-desc': 'Maintains original audio quality with support for various sample rates and bitrates',
        'feature-formats-title': 'Multiple Format Support',
        'feature-formats-desc': 'Supports mainstream audio formats including MP3, WAV, M4A, OGG, FLAC',
        'feature-privacy-title': 'Privacy & Security',
        'feature-privacy-desc': 'Local processing, no file uploads to servers, protecting your privacy',
        'feature-batch-title': 'Batch Processing',
        'feature-batch-desc': 'Support for batch selection and conversion of multiple files for efficiency',
        'feature-ui-title': 'Clean Interface',
        'feature-ui-desc': 'Intuitive and user-friendly interface design, simple operation',
        
        // Download Section
        'download-title': 'Download Now',
        'download-subtitle': 'Available on multiple platforms, choose your version',
        'ios-store': 'App Store',
        'android-store': 'Google Play',
        'desktop-platform': 'Desktop',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-question': 'Questions or Suggestions?',
        'contact-feedback': 'We\'d love to hear your feedback to help us improve our product.',
        'github-project': 'GitHub Project',
        
        // Footer
        'footer-desc': 'Professional Audio Conversion Tool',
        'footer-features': 'Features',
        'footer-download': 'Download App',
        'footer-contact': 'Contact Us',
        'footer-copyright': '© 2025 Audio Converter. All rights reserved.',
        
        // Modal
        'modal-coming-soon': '🚀 Coming Soon',
        'modal-platform-developing': 'version is in development, stay tuned!',
        'modal-github-follow': 'You can follow our GitHub project for the latest updates.',
        'modal-view-github': 'View GitHub',
        'modal-close': 'Close'
    }
};

// 多语言支持初始化
function initializeLanguageSupport() {
    const langSwitch = document.getElementById('langSwitch');
    
    // 绑定语言切换事件
    langSwitch.addEventListener('click', toggleLanguage);
    
    // 智能选择语言
    let languageToUse = 'zh'; // 默认中文
    
    // 1. 首先检查是否有用户保存的偏好语言
    const savedLanguage = localStorage.getItem('preferred-language');
    
    if (savedLanguage) {
        // 如果用户之前选择过语言，使用保存的语言
        languageToUse = savedLanguage;
    } else {
        // 如果是首次访问，根据浏览器语言智能选择
        const browserLang = navigator.language || navigator.userLanguage;
        
        // 检测浏览器语言
        // 支持的中文语言代码：zh, zh-CN, zh-TW, zh-HK, zh-SG
        if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
            languageToUse = 'zh';
        } else {
            // 其他语言都使用英文
            languageToUse = 'en';
        }
        
        // 保存自动检测的语言（用户可以随时切换）
        localStorage.setItem('preferred-language', languageToUse);
    }
    
    // 设置初始语言
    setLanguage(languageToUse);
}

// 切换语言
function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') || 'zh';
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
}

// 设置语言
function setLanguage(lang) {
    // 更新 HTML lang 属性
    document.documentElement.setAttribute('lang', lang);
    
    // 更新语言切换按钮文本
    const langSwitch = document.getElementById('langSwitch');
    const langText = langSwitch.querySelector('.lang-text');
    langText.textContent = lang === 'zh' ? 'EN' : '中文';
    
    // 保存到本地存储
    localStorage.setItem('preferred-language', lang);
    
    // 应用翻译
    applyTranslations(lang);
    
    // 更新页面标题和描述
    updatePageMeta(lang);
}

// 应用翻译
function applyTranslations(lang) {
    const translation = translations[lang] || translations['zh'];
    
    // 查找所有需要翻译的元素
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            // 使用淡入淡出效果
            element.style.opacity = '0.5';
            setTimeout(() => {
                element.textContent = translation[key];
                element.style.opacity = '1';
            }, 150);
        }
    });
}

// 更新页面元数据
function updatePageMeta(lang) {
    if (lang === 'en') {
        document.title = 'Audio Converter - Professional Audio Conversion Tool';
        document.querySelector('meta[name="description"]').content = 
            'Professional audio format conversion app with high-quality output, multiple format support, and easy-to-use interface.';
    } else {
        document.title = 'Audio Converter - 专业音频转换工具';
        document.querySelector('meta[name="description"]').content = 
            '专业的音频格式转换应用，支持多种格式转换，高质量输出，简单易用。';
    }
}

// 平滑滚动设置
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑固定导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 导航栏滚动效果
function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // 添加/移除滚动样式类
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // 向上滚动时显示导航栏，向下滚动时隐藏（可选）
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// 页面加载动画
function setupPageAnimation() {
    const heroContent = document.querySelector('.hero-content');
    const phoneMockup = document.querySelector('.phone-mockup');
    
    // 设置初始状态
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    phoneMockup.style.opacity = '0';
    phoneMockup.style.transform = 'translateX(50px)';
    
    // 延迟显示动画
    setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            phoneMockup.style.transition = 'all 0.8s ease-out';
            phoneMockup.style.opacity = '1';
            phoneMockup.style.transform = 'translateX(0)';
        }, 300);
    }, 500);
    
    // 滚动触发的动画
    setupScrollAnimations();
}

// 滚动动画
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// 移动端菜单处理（简化版本）
function setupMobileMenu() {
    // 如果屏幕宽度小于768px，可以添加移动端菜单逻辑
    if (window.innerWidth <= 768) {
        console.log('移动端视图');
        // 这里可以添加移动端特定的交互逻辑
    }
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            // 移动端逻辑
        } else {
            // 桌面端逻辑
        }
    });
}

// 显示"即将推出"消息的函数
function showComingSoon(platform) {
    const currentLang = document.documentElement.getAttribute('lang') || 'zh';
    const translation = translations[currentLang];
    
    // 创建模态框显示消息
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${translation['modal-coming-soon']}</h3>
            <p>${platform} ${translation['modal-platform-developing']}</p>
            <p>${translation['modal-github-follow']}</p>
            <div class="modal-buttons">
                <a href="https://github.com/your-username/audioConverterWeb" target="_blank" class="btn-primary">
                    ${translation['modal-view-github']}
                </a>
                <button onclick="closeModal()" class="btn-secondary">
                    ${translation['modal-close']}
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加点击背景关闭功能
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// 关闭模态框
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// 添加模态框样式
const modalStyles = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    }
    
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease-out;
    }
    
    .modal-content h3 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1.5rem;
    }
    
    .modal-content p {
        margin-bottom: 1rem;
        color: #666;
        line-height: 1.6;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1.5rem;
        flex-wrap: wrap;
    }
    
    .modal-buttons .btn-primary,
    .modal-buttons .btn-secondary {
        padding: 10px 20px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 1rem;
    }
    
    .modal-buttons .btn-primary {
        background: #667eea;
        color: white;
    }
    
    .modal-buttons .btn-secondary {
        background: #f8f9ff;
        color: #667eea;
        border: 2px solid #667eea;
    }
    
    .modal-buttons .btn-primary:hover {
        background: #5a67d8;
        transform: translateY(-2px);
    }
    
    .modal-buttons .btn-secondary:hover {
        background: #667eea;
        color: white;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .navbar {
        transition: transform 0.3s ease-out;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 25px rgba(0,0,0,0.15);
    }
    
    /* 语言切换过渡效果 */
    [data-translate] {
        transition: opacity 0.3s ease;
    }
    
    .language-switching [data-translate] {
        opacity: 0.7;
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// 键盘事件监听
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// 性能优化：节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}