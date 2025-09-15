from PIL import Image

# 打开图片
img = Image.open('static/images/logo.png')

# 获取尺寸
width, height = img.size

# 输出尺寸信息
print(f'原始尺寸: {width}x{height}像素')
print(f'文件大小: {img.filename}')

# 关闭图片
img.close()