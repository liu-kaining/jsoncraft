# -*- coding: utf-8 -*-
# Author: liqian_liukaining
# Description: JsonCraft 的 Docker 配置文件
# Date: 2023-10-01

# 使用官方 Python 3.9 镜像作为基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY . .

# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露 Flask 应用的端口
EXPOSE 5000

# 设置环境变量
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# 启动 Flask 应用
CMD ["flask", "run", "--host=0.0.0.0"]