// Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到锚点
    setupSmoothScrolling();
    
    // 导航栏滚动效果
    setupNavbarScrollEffect();
    
    // 页面加载动画
    setupPageAnimation();
    
    // 移动端导航菜单（如果需要的话）
    setupMobileMenu();
});

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
    // 创建模态框显示消息
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>🚀 即将推出</h3>
            <p>${platform} 版本正在开发中，敬请期待！</p>
            <p>您可以关注我们的 GitHub 项目获取最新进展。</p>
            <div class="modal-buttons">
                <a href="https://github.com/your-username/audioConverterWeb" target="_blank" class="btn-primary">
                    查看 GitHub
                </a>
                <button onclick="closeModal()" class="btn-secondary">
                    关闭
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