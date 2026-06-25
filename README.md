# Qiniu Campus Activity Page Redesign

这是一个个人 **vibe coding** 实践项目尝试。项目目标是基于一个已有的活动页面内容，使用 AI 辅助完成内容识别、信息整理、页面重新设计与前端工程化实现。

本项目并不是简单生成一个静态 HTML 文件，而是尝试将 AI 生成结果整理为一个可以预览、可以继续编辑、也更符合前端工程规范的 React 项目。

## 项目背景

原始任务是对一个已有活动页进行重新设计。实践过程中，主要关注以下问题：

- AI 是否能够识别并整理原网页中的有效内容。
- 设计师如何介入 AI 生成内容，对信息结构和页面表达进行二次调整。
- 面对稍微复杂的页面任务，如何拆分 AI 工作流程，而不是一次性要求 AI 完成全部设计与代码。
- 最终产物是否可以让设计师直接预览，并交付给前端工程师继续开发。
- AI 生成的代码是否可以被整理为更规范的软件工程项目。

## 实践流程

本项目采用了分阶段的 AI 辅助流程。

1. **内容识别**

   首先让 AI 访问并识别原始活动页内容，将页面中的有效信息整理为结构化 Markdown 文档。

   对应文件：

   - `docs/content.zh.md`
   - `docs/prompt-01-extract-content.zh.md`
   - `docs/prompt-01-structure-content.zh.md`

2. **设计师修订**

   在 AI 初步整理内容后，由设计师对内容结构、信息优先级和页面表达重点进行调整。

   对应文件：

   - `docs/content.designer-revision.zh.md`

3. **页面重新设计**

   基于整理后的内容，通过更规范的提示词让 AI 重新设计并实现一个现代化活动落地页。

   对应文件：

   - `docs/prompt-02-build-landing-page.zh.md`
   - `docs/prompt-02-build-landing-page.designer-revision.zh.md`

4. **继续优化**

   在初版页面基础上继续优化视觉表现、招聘信息展示、活动流程表达和整体可信度。

   对应文件：

   - `docs/prompt-03-refine-landing-page.zh.md`
   - `docs/prompt-03-refine-landing-page.designer-revision.zh.md`

5. **工程整理**

   最后将项目整理为 Vite + React + Tailwind CSS 工程，补齐必要配置，并规范文件命名，避免中文文件名和临时命名影响后续协作。

## 关于 AI 实践边界

本项目的一个重要观察是：面对稍微复杂的设计和前端实现任务，直接要求 AI 一次性修改或生成完整页面，往往不容易达到预期效果。

更可控的方式是将任务拆分：

- 先识别原始内容。
- 再整理信息结构。
- 再由设计师修订重点和表达。
- 再生成页面设计与代码。
- 最后进行工程整理和迭代优化。

这种流程更接近真实设计和前端协作方式，也更容易让 AI 的输出保持可检查、可调整、可交付。

## 技术栈

- Vite
- React
- Tailwind CSS
- lucide-react

## 项目结构

```text
.
├── docs/                  # 内容整理、提示词和设计修订文档
├── src/                   # 前端源码
│   ├── components/        # 页面组件
│   ├── data/              # 页面数据
│   ├── App.jsx            # 应用主体
│   ├── main.jsx           # React 入口
│   └── styles.css         # 全局样式
├── index.html             # Vite HTML 入口
├── package.json           # 项目依赖和脚本
├── package-lock.json      # 依赖锁定文件
├── postcss.config.js      # PostCSS 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── vite.config.js         # Vite 配置
```

## 本地运行

安装依赖：

```bash
npm install
```

启动本地开发预览：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173/
```

构建生产版本：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 交付说明

如果交付给前端工程师，建议交付完整项目文件夹或 Git 仓库，但不要交付 `node_modules/`。

前端工程师拿到项目后，可以通过以下命令恢复依赖并启动：

```bash
npm install
npm run dev
```

如果只是给他人预览页面，建议部署构建后的 `dist/` 目录，或使用 Vercel、Netlify、GitHub Pages 等平台生成在线预览链接。

## 工程规范说明

本项目整理时重点考虑了以下规范：

- 文件名使用英文、数字、短横线和点分隔，避免中文文件名。
- 文档集中放在 `docs/` 目录。
- 源码集中放在 `src/` 目录。
- 组件拆分到 `src/components/`。
- 页面内容数据放在 `src/data/`。
- 使用 `package.json` 管理依赖和运行脚本。
- 使用 `.gitignore` 排除 `node_modules/`、`dist/`、`.DS_Store` 等不适合提交的文件。

## 版本管理与协作

后续建议使用 Git 和 GitHub 进行版本管理：

- 用 Git 记录每一次重要修改。
- 用 GitHub 作为远程仓库，方便备份和团队协作。
- 通过分支或 Pull Request 管理设计修改、内容修改和代码修改。
- 在迭代过程中持续保留 `docs/` 中的提示词和内容整理记录，方便回溯 AI 协作过程。

## 项目定位

这个项目更适合作为一次 AI 辅助设计与前端工程化实践记录，而不仅是一个页面成品。它关注的不只是最终页面效果，也包括从内容识别、设计判断、提示词拆分、代码生成到工程交付的完整过程。
