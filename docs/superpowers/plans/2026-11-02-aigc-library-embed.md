# AIGC 资料库嵌入计划

- 新增 `/aigc-library` 页面，以 iframe 引用 `https://library.zencolor.cn/library.html`，保留 `allow="clipboard-write"`。
- 官网主导航增加「AIGC 资料库」。
- 先以真实 Next.js 页面测试锁定路由、iframe 地址及剪贴板权限，再实现最小改动。
- 通过类型检查、生产构建和浏览器端搜索、提示词体检、复制验收后部署。
