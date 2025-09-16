# 未来科技个人网站

一个具有科幻风格和灵动丝滑UI设计的个人网站，使用Python Flask框架开发，预留了可添加个人内容的目录和栏目空间。

## 项目特点

- 🚀 **科幻风格UI**：采用深色背景、霓虹灯效果和动态粒子背景
- 🎨 **灵动丝滑的交互体验**：平滑滚动、悬停效果和过渡动画
- 📱 **响应式设计**：适配各种屏幕尺寸，从手机到桌面设备
- 📁 **可扩展性强**：预留了多个个人内容展示区域
- 🛠️ **易于部署**：提供详细的安装和部署指南

## 目录结构

```
├── app.py                # Flask应用主文件
├── requirements.txt      # Python依赖列表
├── conda-env.yml         # Conda环境配置文件
├── templates/            # HTML模板文件
│   ├── base.html         # 基础模板
│   ├── index.html        # 主页
│   ├── portfolio.html    # 作品集页面
│   ├── projects.html     # 项目展示页面
│   ├── about.html        # 关于我们页面
│   └── contact.html      # 联系页面
└── static/               # 静态资源文件
    ├── css/              # CSS样式文件
    ├── js/               # JavaScript脚本文件
    └── images/           # 图片资源
```

## 安装指南

### 使用Conda创建新环境

1. 确保您已安装[Conda](https://docs.conda.io/en/latest/)

2. 在项目根目录下运行以下命令创建新环境：

   ```bash
   conda env create -f conda-env.yml
   ```

3. 激活新环境：

   ```bash
   conda activate future-tech-website
   ```

### 直接安装依赖

如果您不使用Conda，可以直接使用pip安装依赖：

```bash
pip install -r requirements.txt
```

## 运行网站

1. 确保已激活环境

2. 运行Flask应用：

   ```bash
   python app.py
   ```

3. 打开浏览器，访问以下地址：

   ```
   http://localhost:5000/
   ```

## 联系我们

如有任何问题或建议，请通过网站上的联系方式与我们联系。
