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
│   ├── about.html        # 关于我页面
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

## 自定义内容

您可以根据需要自定义以下内容：

1. **个人信息**：编辑`about.html`中的个人介绍、技能、教育背景和工作经验
2. **作品集**：在`portfolio.html`中添加您的作品
3. **项目展示**：在`projects.html`中展示您的项目
4. **联系信息**：在`contact.html`中更新您的联系方式

## 配置说明

- 网站主题颜色：在`static/css/style.css`中修改CSS变量
- 粒子背景效果：在`static/js/particles-config.js`中调整粒子效果配置
- 表单处理：在`app.py`的`submit_contact`函数中添加表单处理逻辑

## 部署到生产环境

要将网站部署到生产环境，建议使用以下步骤：

1. 使用Gunicorn作为WSGI服务器：
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:8000 app:app
   ```

2. 配置Nginx作为反向代理（可选）

3. 确保更新`app.py`中的`SECRET_KEY`为强密钥

## 技术栈

- **后端**：Python, Flask
- **前端**：HTML5, CSS3, JavaScript
- **UI框架**：自定义科幻风格UI
- **会话管理**：Flask-Session
- **依赖管理**：pip/Conda

## 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件（如果提供）

## 联系我们

如有任何问题或建议，请通过网站上的联系方式与我联系。

---

© [年份] [您的名字] - 未来科技个人网站