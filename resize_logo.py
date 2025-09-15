from PIL import Image
import os

# 图片路径
input_path = 'static/images/logo.png'
output_path = 'static/images/logo_resized.png'

# 检查图片是否存在
if not os.path.exists(input_path):
    print(f"错误: 找不到图片文件 {input_path}")
    exit()

# 调整图片大小
try:
    # 打开图片
    with Image.open(input_path) as img:
        # 获取原始尺寸
        width, height = img.size
        print(f"原始尺寸: {width}x{height}")
        
        # 设置新尺寸 (调整为原始尺寸的50%，保持宽高比)
        new_width = int(width * 0.5)
        new_height = int(height * 0.5)
        
        # 调整大小，使用高质量的LANCZOS滤镜
        resized_img = img.resize((new_width, new_height), Image.LANCZOS)
        
        # 保存调整后的图片
        resized_img.save(output_path)
        print(f"已调整大小并保存为: {output_path}")
        print(f"新尺寸: {new_width}x{new_height}")
        
        # 重命名调整后的图片覆盖原图片
        if os.path.exists(output_path):
            os.remove(input_path)
            os.rename(output_path, input_path)
            print(f"已替换原图片: {input_path}")
            
except Exception as e:
    print(f"调整图片大小时出错: {e}")