from PIL import Image
import os

# 输入和输出文件路径
input_path = 'static/images/logo.png'
output_path = 'static/images/logo_resized.png'

# 新的尺寸 - 匹配原始头像的最大尺寸400x400
new_size = (400, 400)

# 打开图片
with Image.open(input_path) as img:
    # 调整图片尺寸，保持宽高比并确保图片完全包含在目标尺寸内
    # 使用LANCZOS滤镜获得高质量的缩小效果
    img.thumbnail(new_size, Image.Resampling.LANCZOS)
    
    # 创建一个400x400的透明背景
    new_img = Image.new('RGBA', new_size, (0, 0, 0, 0))
    
    # 计算图片居中的位置
    position = ((new_size[0] - img.width) // 2, (new_size[1] - img.height) // 2)
    
    # 将调整后的图片粘贴到透明背景上
    new_img.paste(img, position)
    
    # 保存调整后的图片
    new_img.save(output_path, 'PNG')
    
    # 输出调整前后的信息
    print(f'原始尺寸: {img.width}x{img.height}像素')
    print(f'调整后尺寸: {new_img.width}x{new_img.height}像素')

# 替换原始文件
os.replace(output_path, input_path)
print(f'已成功将logo.png调整为{new_size[0]}x{new_size[1]}像素并替换原始文件')