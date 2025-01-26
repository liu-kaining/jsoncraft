/*
  Author: liqian_liukaining
  Description: JSON 解析工具的核心 JavaScript 逻辑
  Date: 2025-01-26
*/

// 状态管理对象
const state = {
    originalJSON: null, // 原始 JSON 对象
    formattedJSON: ''   // 格式化后的 JSON 字符串
};

/**
 * 处理 JSON 数据
 * @param {string} action - 操作类型 ('format' 或 'compress')
 */
function processJSON(action) {
    try {
        const input = document.getElementById('input').value;
        if (!input.trim()) return showStatus('请输入JSON内容', 'warning');

        const jsonObj = JSON.parse(input);
        state.originalJSON = jsonObj;

        switch(action) {
            case 'format':
                state.formattedJSON = JSON.stringify(jsonObj, null, 4);
                break;
            case 'compress':
                state.formattedJSON = JSON.stringify(jsonObj)
                    .replace(/\s*([\{\}\[\]"])\s*/g, '$1')
                    .replace(/([:,])\s*/g, '$1');
                break;
        }

        updateOutput();
        showStatus('处理成功', 'success');
    } catch (e) {
        handleValidationError(e);
    }
}

/**
 * 更新输出区域内容
 */
function updateOutput() {
    const output = document.getElementById('output');
    output.innerHTML = syntaxHighlight(state.formattedJSON);
}

/**
 * JSON 语法高亮
 * @param {string} json - JSON 字符串
 * @returns {string} - 高亮后的 HTML 字符串
 */
function syntaxHighlight(json) {
    return json
        .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, match => {
            const cls = /:$/.test(match) ? 'json-key' : 'json-string';
            return `<span class="${cls}">${match}</span>`;
        })
        .replace(/\b(true|false|null)\b/g, match =>
            `<span class="json-boolean">${match}</span>`)
        .replace(/(-?\d+\.?\d*([eE][+\-]?\d+)?)/g, match =>
            `<span class="json-number">${match}</span>`)
        .replace(/[{}\[\],:]/g, match =>
            `<span class="json-punctuation">${match}</span>`);
}

/**
 * 复制内容到剪贴板
 */
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(state.formattedJSON);
        showStatus('已复制到剪贴板', 'success');
    } catch (err) {
        showStatus('复制失败，请手动选择复制', 'error');
    }
}

/**
 * 清空所有内容
 */
function clearAll() {
    document.getElementById('input').value = '';
    state.formattedJSON = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('errorMarker').style.display = 'none';
    document.getElementById('errorLoc').textContent = '';
    showStatus('已清空', 'info');
    updateCharCount();
}

/**
 * 验证 JSON 格式
 */
function validateJSON() {
    const input = document.getElementById('input');
    try {
        JSON.parse(input.value);
        input.classList.remove('invalid');
        document.getElementById('errorMarker').style.display = 'none';
        document.getElementById('errorLoc').textContent = '';
        updateCharCount();
    } catch (e) {
        input.classList.add('invalid');
        handleValidationError(e);
    }
}

/**
 * 处理验证错误
 * @param {Error} error - 错误对象
 */
function handleValidationError(error) {
    showStatus(`错误: ${error.message}`, 'error');
    highlightErrorPosition(error);
    console.error(error);
}

/**
 * 高亮错误位置
 * @param {Error} error - 错误对象
 */
function highlightErrorPosition(error) {
    const input = document.getElementById('input');
    const marker = document.getElementById('errorMarker');
    const errorLoc = document.getElementById('errorLoc');

    const match = error.message.match(/position\s+(\d+)/);
    if (!match) return;

    const errorPos = parseInt(match[1]);
    const text = input.value;
    const preText = text.substring(0, errorPos);

    const lineNumber = preText.split('\n').length;
    const lineStart = preText.lastIndexOf('\n') + 1;
    const colNumber = errorPos - lineStart + 1;

    const lineHeight = 24;
    const lineTop = (lineNumber - 1) * lineHeight;

    marker.style.display = 'block';
    marker.style.top = `${lineTop}px`;
    marker.style.height = `${lineHeight}px`;
    marker.style.left = '0';
    marker.style.width = '100%';

    errorLoc.textContent = `错误位置：第${lineNumber}行，第${colNumber}列`;
}

/**
 * 更新字符统计
 */
function updateCharCount() {
    document.getElementById('charCount').textContent =
        document.getElementById('input').value.length;
}

/**
 * 显示状态提示
 * @param {string} message - 提示信息
 * @param {string} type - 提示类型 ('success', 'warning', 'error', 'info')
 */
function showStatus(message, type = 'info') {
    const statusElem = document.getElementById('status');
    statusElem.textContent = message;
    statusElem.className = `status-indicator ${type}`;
}

// 输入框高度自适应
document.getElementById('input').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    validateJSON();
});