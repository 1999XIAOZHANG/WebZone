from flask import Flask, render_template, session, request, redirect, url_for, flash
from flask_session import Session
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# 配置邮件服务器
EMAIL_HOST = 'smtp.qq.com'  # 使用QQ邮箱SMTP服务器
EMAIL_PORT = 587  # QQ邮箱SMTP端口
EMAIL_USER = '1347884945@qq.com'  # 用于发送提醒的邮箱
EMAIL_PASSWORD = 'your-email-password'  # 注意：这里需要替换为实际的邮箱授权码

# 确保记录文件存在
RECORD_FILE = 'contact_records.txt'
if not os.path.exists(RECORD_FILE):
    with open(RECORD_FILE, 'w') as f:
        f.write('时间戳,姓名,邮箱,主题,内容\n')

# 主页路由
@app.route('/')
def index():
    # 初始化会话数据（如果不存在）
    if 'visitor_count' not in session:
        session['visitor_count'] = 0
    session['visitor_count'] += 1
    
    return render_template('index.html', visitor_count=session['visitor_count'])

# 作品集页面路由
@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

# 项目展示页面路由
@app.route('/projects')
def projects():
    return render_template('projects.html')

# 关于我页面路由
@app.route('/about')
def about():
    return render_template('about.html')

# 联系页面路由
@app.route('/contact')
def contact():
    return render_template('contact.html')

# 发送邮件提醒的函数
def send_email_notification(name, email, subject, message_content):
    try:
        # 创建邮件对象
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = EMAIL_USER
        msg['Subject'] = f'网站联系表单提醒：{subject}'
        
        # 邮件正文
        body = f"""您收到了一条来自网站联系表单的新消息：

姓名: {name}
邮箱: {email}
主题: {subject}
内容:
{message_content}

请及时回复。
"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        # 连接到邮件服务器并发送邮件
        server = smtplib.SMTP(EMAIL_HOST, EMAIL_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, EMAIL_USER, text)
        server.quit()
        
        return True
    except Exception as e:
        print(f"发送邮件失败: {str(e)}")
        return False

# 记录联系信息到文件
def record_contact_info(name, email, subject, message_content):
    try:
        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        # 转义逗号和换行符，避免CSV格式问题
        name = name.replace(',', '，')
        email = email.replace(',', '，')
        subject = subject.replace(',', '，')
        message_content = message_content.replace(',', '，').replace('\n', '\\n')
        
        # 写入记录文件
        with open(RECORD_FILE, 'a', encoding='utf-8') as f:
            f.write(f"{timestamp},{name},{email},{subject},{message_content}\n")
        
        return True
    except Exception as e:
        print(f"记录联系信息失败: {str(e)}")
        return False

# 处理表单提交路由
@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    if request.method == 'POST':
        # 获取表单数据
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # 表单验证
        if not all([name, email, subject, message]):
            flash('请填写所有必填字段', 'error')
            return redirect(url_for('contact'))
        
        # 记录联系信息到文件
        record_success = record_contact_info(name, email, subject, message)
        
        # 发送邮件提醒
        email_success = send_email_notification(name, email, subject, message)
        
        # 打印调试信息
        print(f"收到来自{name}({email})的消息：\n主题：{subject}\n内容：{message}")
        print(f"记录保存: {'成功' if record_success else '失败'}")
        print(f"邮件发送: {'成功' if email_success else '失败'}")
        
        # 重定向回联系页面并显示成功消息
        flash('消息已成功发送，我们会尽快回复您！', 'success')
        return redirect(url_for('contact'))

if __name__ == '__main__':
    # 开发模式运行，生产环境请修改配置
    app.run(host='0.0.0.0', port=5000, debug=True)