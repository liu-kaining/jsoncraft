# -*- coding: utf-8 -*-
# Author: liqian_liukaining
# Description: Flask 后端服务，提供 JSON 解析工具的 Web 接口
# Date: 2025-01-26

from flask import Flask, render_template

# 初始化 Flask 应用
app = Flask(__name__)

@app.route('/')
def index():
    """
    主页面路由
    Returns:
        HTML 页面: 返回 JSON 解析工具的前端页面
    """
    return render_template('index.html')

if __name__ == '__main__':
    # 启动 Flask 服务
    app.run(port=5000, debug=False)