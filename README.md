# Audio Converter App - Landing Page

这是 Audio Converter 应用的官方 Landing Page（着陆页），用于介绍应用功能并提供下载链接。

## 🚀 项目概述

这是一个专业的音频转换应用的宣传网站，采用现代化的响应式设计，包含：
- 吸引人的主页横幅
- 详细的功能介绍
- 多平台下载链接
- 联系方式和项目信息

## 📱 预览

网站包含以下主要部分：
- **主页横幅**: 应用介绍和下载按钮
- **功能特色**: 6 个核心功能展示
- **下载区域**: iOS、Android、桌面版下载链接
- **联系区域**: 反馈和支持信息
- **响应式设计**: 完美适配手机、平板、桌面设备

## 🛠️ 技术栈

- **HTML5**: 语义化结构
- **CSS3**: 现代化样式，包含 Grid、Flexbox、动画
- **Vanilla JavaScript**: 轻量级交互效果
- **GitHub Pages**: 静态网站托管
- **GitHub Actions**: 自动化部署

## 📁 项目结构

```
audioConverterWeb/
├── index.html              # 主页面文件
├── style.css               # 样式文件
├── script.js               # JavaScript 交互
├── package.json            # 项目配置
├── README.md               # 项目说明
└── .github/
    └── workflows/
        └── deploy.yml      # 自动部署配置
```

## 🚀 快速开始

### 本地开发

1. 克隆项目到本地：
```bash
git clone https://github.com/your-username/audioConverterWeb.git
cd audioConverterWeb
```

2. 安装依赖：
```bash
npm install
```

3. 启动本地服务器：
```bash
npm start
```

4. 在浏览器中访问 `http://localhost:3000`

### 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 GitHub Actions 作为部署源
4. 推送到 main 分支会自动触发部署

## 🔧 自定义配置

### 修改应用信息

编辑 `index.html` 中的以下内容：
- 应用名称和描述
- 功能特色介绍
- 联系邮箱
- GitHub 项目链接

### 更新样式

修改 `style.css` 来调整：
- 主题颜色
- 字体和排版
- 布局和间距
- 动画效果

### 添加下载链接

在 `showComingSoon()` 函数中替换实际的下载链接，或者直接修改 HTML 中的下载按钮 `href` 属性。

## 📱 响应式设计

网站完全支持响应式设计：
- **桌面端** (> 768px): 双栏布局，完整功能展示
- **平板端** (768px): 调整间距和字体大小
- **移动端** (< 768px): 单栏布局，优化触摸交互

## ⚡ 性能优化

- 使用 CSS3 动画替代 JavaScript 动画
- 图片懒加载和压缩
- 代码压缩和合并
- CDN 加速（可选）

## 🔐 SEO 优化

已包含基础 SEO 优化：
- Meta 标签优化
- 语义化 HTML 结构
- Open Graph 标签（可扩展）
- 结构化数据（可扩展）

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 这个项目
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 邮箱: contact@audioconverter.com
- GitHub: [项目地址](https://github.com/your-username/audioConverterWeb)
- 问题反馈: [Issues](https://github.com/your-username/audioConverterWeb/issues)

## 🎯 未来计划

- [ ] 添加多语言支持
- [ ] 集成应用统计数据
- [ ] 添加用户评价展示
- [ ] 博客/新闻功能
- [ ] 在线演示功能

---

⭐ 如果这个项目对您有帮助，请给它一个 Star！