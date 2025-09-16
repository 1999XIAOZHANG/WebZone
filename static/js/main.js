// DOM 元素选择
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const backToTopBtn = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const typingElement = document.querySelector('.typing-animation');

// 打字机效果配置
const typingTexts = ['科技', '创意', '无限可能', '未来世界', '数字宇宙'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// 打字机效果函数
function type() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 150;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // 暂停时间
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500; // 切换文本的暂停时间
    }
    
    setTimeout(type, typeSpeed);
}

// 导航栏滚动效果
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // 导航栏样式变化
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 回到顶部按钮显示/隐藏
    if (scrollPosition > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    // 导航链接激活状态更新
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 平滑滚动到锚点或处理URL路径
function smoothScroll(target) {
    // 检查是否是URL路径
    if (target.startsWith('/')) {
        // 对于URL路径，直接让浏览器正常处理导航
        window.location.href = target;
        return;
    }
    
    // 处理锚点选择器
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // 关闭移动菜单
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        }
    }
}

// 移动菜单切换
function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    if (mobileNav.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fa fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        document.body.style.overflow = '';
    }
}

// 筛选作品集
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            // 添加动画效果
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.classList.add('hidden');
            }, 300);
        }
    });
    
    // 更新筛选按钮状态
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// 表单提交处理
function handleFormSubmit(event) {
    event.preventDefault();
    // 这里可以添加表单验证和提交逻辑
    alert('感谢您的留言！由于这是演示版本，表单暂未连接到后端服务器。');
    event.target.reset();
}

// 初始化函数
function init() {
    // 仅在首页启动打字机效果
    if (typingElement) {
        type();
    }
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
    
    // 添加导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(link.getAttribute('href'));
        });
    });
    
    // 添加移动导航链接点击事件
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(link.getAttribute('href'));
        });
    });
    
    // 添加移动菜单按钮点击事件
    menuBtn.addEventListener('click', toggleMobileMenu);
    
    // 添加回到顶部按钮点击事件
    backToTopBtn.addEventListener('click', () => {
        smoothScroll('#home');
    });
    
    // 添加作品集筛选按钮点击事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterPortfolio(btn.getAttribute('data-filter'));
        });
    });
    
    // 添加表单提交事件
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // 只在作品集元素存在时初始化筛选状态
    if (portfolioItems.length > 0) {
        filterPortfolio('all');
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);