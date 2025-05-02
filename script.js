document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');

    // Function to translate text
    function translateText(text, lang) {
        return translations[lang][text] || text;
    }

    // Function to translate all elements
    function translatePage(lang) {
        // Translate text content while preserving HTML attributes
        const elements = document.querySelectorAll('h1, h2, h3, p, a, button, li, span');
        elements.forEach(element => {
            // Skip translation if element has no text content
            if (!element.textContent.trim()) return;

            if (element.tagName.toLowerCase() === 'a') {
                // For links, only translate the visible text, not the href
                const originalText = element.textContent.trim();
                const translatedText = translateText(originalText, lang);
                if (translatedText !== originalText) {
                    element.textContent = translatedText;
                }
            } else {
                // For other elements, translate all text content
                const childNodes = Array.from(element.childNodes);
                childNodes.forEach(node => {
                    if (node.nodeType === 3) { // Text node
                        const originalText = node.textContent.trim();
                        if (originalText) {
                            const translatedText = translateText(originalText, lang);
                            if (translatedText !== originalText) {
                                node.textContent = translatedText;
                            }
                        }
                    }
                });
            }
        });
        
        // Save language preference
        localStorage.setItem('language', lang);
    }

    // Add language switcher to all pages if not already present
    const existingLanguageSwitcher = document.querySelector('.language-switcher');
    if (!existingLanguageSwitcher) {
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.style.position = 'fixed';
        languageSwitcher.style.top = '20px';
        languageSwitcher.style.right = '20px';
        languageSwitcher.style.display = 'flex';
        languageSwitcher.style.gap = '10px';
        languageSwitcher.style.zIndex = '1000';

        const vietnameseButton = document.createElement('button');
        vietnameseButton.textContent = 'Tiếng Việt';
        vietnameseButton.style.padding = '10px 20px';
        vietnameseButton.style.backgroundColor = '#58a6ff';
        vietnameseButton.style.color = '#fff';
        vietnameseButton.style.border = 'none';
        vietnameseButton.style.borderRadius = '5px';
        vietnameseButton.style.cursor = 'pointer';
        vietnameseButton.id = 'vietnameseButton';
        vietnameseButton.className = 'lang-btn lang-btn-vi';

        const englishButton = document.createElement('button');
        englishButton.textContent = 'English';
        englishButton.style.padding = '10px 20px';
        englishButton.style.backgroundColor = '#58a6ff';
        englishButton.style.color = '#fff';
        englishButton.style.border = 'none';
        englishButton.style.borderRadius = '5px';
        englishButton.style.cursor = 'pointer';
        englishButton.id = 'englishButton';
        englishButton.className = 'lang-btn lang-btn-en';

        languageSwitcher.appendChild(vietnameseButton);
        languageSwitcher.appendChild(englishButton);
        document.body.appendChild(languageSwitcher);
    }

    const translations = {
        en: {
            "Community": "Community",
            "Shop": "Shop",
            "User": "User",
            "Join Discord": "Join Discord",
            "The ultimate place to connect, learn, and grow.": "The ultimate place to connect, learn, and grow.",
            "Get Started": "Get Started",
            "Contact": "Contact",
            "Privacy Policy": "Privacy Policy",
            "Terms of Service": "Terms of Service",
            "Welcome to the community!": "Welcome to the community!",
            "Communicate with others": "Communicate with others",
            "Expand your system": "Expand your system",
            "Learn more about the anarchist server": "Learn more about the anarchist server",
            "Play games with everyone!!": "Play games with everyone!!",
            "Buy hacked clients tax free!!": "Buy hacked clients tax free!!",
            "High-performance client for advanced users.": "High-performance client for advanced users.",
            "Reliable and feature-rich client for all needs.": "Reliable and feature-rich client for all needs.",
            "Innovative client with cutting-edge features.": "Innovative client with cutting-edge features.",
            "Buy Now": "Buy Now",
            "Staff, Admin server Satella Community": "Staff, Admin server Satella Community",
            "Owner server Satella Community": "Owner server Satella Community",
            "Developer Satella Community": "Developer Satella Community",
            "Get in Touch": "Get in Touch",
            "If you have any questions, feel free to reach out to us via our": "If you have any questions, feel free to reach out to us via our",
            "Your privacy is important to us.": "Your privacy is important to us.",
            "Terms": "Terms",
            "Credits": "Credits",
            "About Our Community": "About Our Community",
            "Welcome to Satella Community! Here, you can:": "Welcome to Satella Community! Here, you can:",
            "How to Buy": "How to Buy",
            "Steps to Purchase": "Steps to Purchase",
            "Join our Discord server.": "Join our Discord server.",
            "Create a ticket in the Satella Community server.": "Create a ticket in the Satella Community server.",
            "Specify the product you want to purchase.": "Specify the product you want to purchase.",
            "Our support team will assist you with the process.": "Our support team will assist you with the process.",
            "Contact Us": "Contact Us",
            "Home": "Home",
            "Satella": "Satella",
            "Tiếng Việt": "Vietnamese",
            "English": "English"
        },
        vi: {
            "Community": "Community",
            "Shop": "Cửa hàng",
            "User": "Người dùng",
            "Join Discord": "Tham gia Discord",
            "The ultimate place to connect, learn, and grow.": "Nơi tuyệt vời để kết nối, học hỏi và phát triển.",
            "Get Started": "Bắt đầu",
            "Contact": "Liên hệ",
            "Privacy Policy": "Chính sách bảo mật",
            "Terms of Service": "Điều khoản dịch vụ",
            "Welcome to the community!": "Chào mừng đến với Satella Community!",
            "Communicate with others": "Giao tiếp với mọi người",
            "Expand your system": "Mở rộng hệ thống của bạn",
            "Learn more about the anarchist server": "Tìm hiểu thêm về máy chủ vô chính phủ",
            "Play games with everyone!!": "Chơi game cùng mọi người!!",
            "Buy hacked clients tax free!!": "Mua client hack miễn phí thuế!!",
            "High-performance client for advanced users.": "Client hiệu suất cao cho người dùng nâng cao.",
            "Reliable and feature-rich client for all needs.": "Client đáng tin cậy và nhiều tính năng cho mọi nhu cầu.",
            "Innovative client with cutting-edge features.": "Client sáng tạo với các tính năng tiên tiến.",
            "Buy Now": "Mua ngay",
            "Staff, Admin server Satella Community": "Nhân viên, Quản trị viên máy chủ Satella Community",
            "Owner server Satella Community": "Chủ sở hữu máy chủ Satella Community",
            "Developer Satella Community": "Nhà phát triển Satella Community",
            "Get in Touch": "Liên lạc",
            "If you have any questions, feel free to reach out to us via our": "Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua",
            "Your privacy is important to us.": "Quyền riêng tư của bạn rất quan trọng với chúng tôi.",
            "Terms": "Điều khoản",
            "Credits": "Tín dụng",
            "About Our Community": "Về Community của Chúng tôi",
            "Welcome to Satella Community! Here, you can:": "Chào mừng đến với Satella Community! Tại đây, bạn có thể:",
            "How to Buy": "Hướng Dẫn Mua Hàng",
            "Steps to Purchase": "Các Bước Mua Hàng",
            "Join our Discord server.": "Tham gia máy chủ Discord của chúng tôi.",
            "Create a ticket in the Satella Community server.": "Tạo ticket trong máy chủ Satella Community.",
            "Specify the product you want to purchase.": "Chọn sản phẩm bạn muốn mua.",
            "Our support team will assist you with the process.": "Đội ngũ hỗ trợ sẽ giúp bạn hoàn tất quá trình mua hàng.",
            "Contact Us": "Liên hệ với Chúng tôi",
            "Home": "Trang chủ",
            "Satella": "Satella",
            "At Satella Community, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.": "Tại Satella Community, chúng tôi coi trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn. Chính sách Bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.",
            "Information We Collect": "Thông tin Chúng tôi Thu thập",
            "Personal details such as name, email address, and contact information.": "Thông tin cá nhân như tên, địa chỉ email và thông tin liên hệ.",
            "Activity logs and preferences within our community platform.": "Nhật ký hoạt động và tùy chọn trong nền tảng cộng đồng của chúng tôi.",
            "Technical data such as IP address and browser type.": "Dữ liệu kỹ thuật như địa chỉ IP và loại trình duyệt.",
            "How We Use Your Information": "Cách Chúng tôi Sử dụng Thông tin của Bạn",
            "To provide and improve our services.": "Để cung cấp và cải thiện dịch vụ của chúng tôi.",
            "To communicate updates and respond to inquiries.": "Để thông báo cập nhật và trả lời các câu hỏi.",
            "To ensure the security and functionality of our platform.": "Để đảm bảo an ninh và chức năng của nền tảng.",
            "Your Rights": "Quyền của Bạn",
            "You have the right to access, update, or delete your personal information. For assistance, please contact us via our": "Bạn có quyền truy cập, cập nhật hoặc xóa thông tin cá nhân của mình. Để được hỗ trợ, vui lòng liên hệ với chúng tôi qua",
            "Contact page": "trang Liên hệ",
            "Welcome to Satella Community! By accessing or using our platform, you agree to the following terms and conditions:": "Chào mừng đến với Satella Community! Bằng cách truy cập hoặc sử dụng nền tảng của chúng tôi, bạn đồng ý với các điều khoản và điều kiện sau:",
            "Usage Guidelines": "Hướng dẫn Sử dụng",
            "Respect other members and maintain a friendly environment.": "Tôn trọng các thành viên khác và duy trì môi trường thân thiện.",
            "Do not engage in illegal activities or share prohibited content.": "Không tham gia vào các hoạt động bất hợp pháp hoặc chia sẻ nội dung bị cấm.",
            "Follow all community rules and guidelines.": "Tuân thủ tất cả các quy tắc và hướng dẫn của cộng đồng.",
            "Account Responsibilities": "Trách nhiệm Tài khoản",
            "You are responsible for maintaining the confidentiality of your account credentials.": "Bạn có trách nhiệm duy trì tính bảo mật của thông tin đăng nhập tài khoản của mình.",
            "Report any unauthorized access or suspicious activity immediately.": "Báo cáo ngay lập tức mọi truy cập trái phép hoặc hoạt động đáng ngờ.",
            "Limitation of Liability": "Giới hạn Trách nhiệm",
            "Satella Community is not liable for any damages or losses resulting from the use of our platform. Use our services at your own risk.": "Satella Community không chịu trách nhiệm cho bất kỳ thiệt hại hoặc mất mát nào phát sinh từ việc sử dụng nền tảng của chúng tôi. Sử dụng dịch vụ của chúng tôi với rủi ro của riêng bạn.",
            "If you have any questions about these terms, please reach out via our": "Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ qua",
            "Contact page.": "trang Liên hệ.",
            "Liên hệ với Chúng tôi": "Liên hệ với Chúng tôi",
            "Tiếng Việt": "Tiếng Việt",
            "English": "Tiếng Anh"
        }
    };

    // Add click event listeners to all language buttons
    document.addEventListener('click', (e) => {
        if (e.target.id === 'vietnameseButton' || e.target.classList.contains('lang-btn-vi')) {
            translatePage('vi');
        } else if (e.target.id === 'englishButton' || e.target.classList.contains('lang-btn-en')) {
            translatePage('en');
        }
    });

    // Apply saved language preference on page load
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        translatePage(savedLanguage);
    }
});
