---

# JsonCraft - 专业 JSON 解析工具

**JsonCraft** 是一个功能强大的 JSON 解析工具，专为开发者设计，提供从格式化、压缩到验证的一站式 JSON 数据处理解决方案。无论是简单的配置文件还是复杂的嵌套数据结构，JsonCraft 都能轻松应对，帮助开发者高效处理 JSON 数据。

---

## 功能特性

### 1. **JSON 格式化**
- 将压缩的 JSON 数据转换为易于阅读的格式化文本。
- 支持自定义缩进（默认 4 空格）。
- 自动对齐键值对，提升可读性。

### 2. **JSON 压缩**
- 将格式化的 JSON 数据压缩为单行文本。
- 去除多余的空格和换行符，减少文件体积。
- 适用于网络传输或存储优化。

### 3. **实时 JSON 验证**
- 实时检测 JSON 语法错误。
- 精准定位错误位置（行号、列号）。
- 高亮显示错误行，快速修复问题。

### 4. **语法高亮**
- 对 JSON 数据进行语法高亮显示。
- 区分键、值、字符串、数字、布尔值和特殊符号。
- 提升代码可读性，减少视觉疲劳。

### 5. **错误定位**
- 自动解析错误信息，定位到具体行和列。
- 高亮显示错误行，快速定位问题。
- 支持复杂嵌套结构的错误检测。

### 6. **字符统计**
- 实时统计输入 JSON 的字符数。
- 帮助开发者了解数据规模。

### 7. **一键复制**
- 将处理后的 JSON 数据一键复制到剪贴板。
- 支持格式化、压缩后的内容复制。
- 提升开发效率，减少手动操作。

### 8. **清空功能**
- 一键清空输入和输出区域。
- 快速开始新的 JSON 数据处理。

### 9. **响应式设计**
- 支持左右分栏布局，输入和输出区域独立显示。
- 自适应不同屏幕尺寸，完美适配桌面和移动设备。

### 10. **用户友好界面**
- 简洁直观的操作界面，易于上手。
- 提供状态提示，实时反馈操作结果。
- 支持快捷键操作，提升使用效率。

---

## 使用场景

- **开发调试**：快速格式化 API 返回的 JSON 数据，方便调试。
- **配置文件处理**：压缩 JSON 配置文件，减少文件体积。
- **数据验证**：实时验证 JSON 数据格式，确保数据准确性。
- **教学演示**：通过语法高亮和格式化功能，直观展示 JSON 数据结构。

---

## 技术栈

- **前端**：HTML5、CSS3、JavaScript
- **后端**：Python Flask
- **语法高亮**：自定义正则表达式实现
- **错误定位**：基于 JSON 解析错误信息实现精准定位

---

## 快速开始

1. 安装依赖：
   ```bash
   pip install flask
   ```

2. 启动服务：
   ```bash
   python app.py
   ```

3. 访问应用：
   打开浏览器，访问 `http://localhost:5000`。

---

## 未来计划

- 支持 JSON Schema 验证。
- 添加树形视图模式，方便查看复杂嵌套结构。
- 支持导入/导出 JSON 文件。
- 提供更多自定义选项（如缩进大小、高亮主题等）。

---

JsonCraft 致力于为开发者提供高效、便捷的 JSON 数据处理体验，是您开发工作中的得力助手！