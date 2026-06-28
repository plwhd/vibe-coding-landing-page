export const activity = {
  title: '2026 七牛校招季',
  themeLine: 'AI 项目实战挑战赛',
  eyebrow: '产研专场盛启',
  subtitle: 'SSP Offer + 50000 奖金，等一个来搞事的你',
  proposition: '面向云计算、AI、开发者和校园招聘的项目实战挑战。用作品证明实力，拿 Offer，赢奖金。',
  target: '国内外院校 2024-2026 届毕业生，及在读学生均可参加',
  targetNote: '中国大陆以毕业证为准，中国港澳台及海外以学位证为准',
  period: '2025.09.08 - 2025.12.31',
  applyDeadline: '9月22日 23:59',
  location: '线上',
  stockCode: '02567.HK',
  primaryCta: '上传简历并报名',
  secondaryCta: '查看实战议题',
  sourceUrl: 'https://www.qiniu.com/activity/detail/68ac208628614a718ed2319c'
}

export const heroMetrics = [
  { value: 'SSP', label: '高潜 Offer', detail: '路演式终面，优秀项目优先评定' },
  { value: '¥50,000', label: '最高奖金', detail: '一等奖项目奖金，能力至上' },
  { value: '100+', label: 'Offer 开放', detail: '覆盖研发、产品、AI、解决方案等方向' }
]

export const navItems = [
  { label: '亮点', href: '#highlights' },
  { label: '岗位', href: '#jobs' },
  { label: '流程', href: '#timeline' },
  { label: '议题', href: '#topics' },
  { label: '奖项', href: '#awards' },
  { label: '规则', href: '#rules' },
  { label: '加入七牛', href: '#join' }
]

export const highlights = [
  {
    value: '100+',
    label: 'Offer 开放中',
    detail: '覆盖研发、产品、测试、大数据、技术支持、售前等岗位'
  },
  {
    value: '¥50,000',
    label: '最高项目奖金',
    detail: '一等奖 1 队，同时有二等奖、三等奖与创作奖'
  },
  {
    value: 'SSP',
    label: '能力至上',
    detail: '用项目实战和路演终面证明实力，不泡池子不养鱼'
  },
  {
    value: 'AI',
    label: '前沿实战方向',
    detail: '大模型、AIGC、3D、语音交互、嵌入式智能小车'
  }
]

export const jobs = [
  {
    title: '后端开发工程师',
    cities: ['北京', '上海', '杭州', '深圳', '西安'],
    category: '研发',
    duties: [
      '参与核心业务系统开发，深入业务，设计、开发并维护高可用、高并发、高扩展的后端服务',
      '参与系统性能优化、稳定性建设、技术架构升级，解决生产环境中的复杂问题',
      '在真实业务场景中学习和应用微服务、云原生、AI 工程化等前沿技术',
      '通过对产品的深度理解和思考，推动前沿技术在真实场景中应用落地'
    ],
    requirements: [
      '扎实的数据结构与算法基础，熟悉 Go / Java / C++ 任一语言',
      '理解数据库、缓存、消息队列、分布式系统等基础组件',
      '具备良好的工程意识，关注系统稳定性、可维护性和代码质量',
      '能结合业务目标拆解技术问题，并持续学习云原生与 AI 工程化技术'
    ],
    bonus: '拥有技术博客、技术论坛文章、论文、专利或开源项目贡献经历；熟悉 LLM、Agent 产品、工具或框架；熟练使用 Copilot、Cursor、Claude Code 等 AI 编程助手提升开发效率'
  },
  {
    title: '前端开发工程师',
    cities: ['上海', '杭州', '深圳', '西安'],
    category: '研发',
    duties: [
      '参与核心产品的前端开发工作，建设云平台控制台、开发者工具与复杂交互页面',
      '参与前端架构演进、组件库建设、工程化工具链优化，提升开发效率和交付质量',
      '从前端技术视角参与产品创新，为产品设计和技术方案提供新思路',
      '关注性能、可访问性和用户体验，推动高质量前端工程实践落地'
    ],
    requirements: [
      '本科以上学历，毕业 2 年以内或应届',
      '具备 HTML、CSS、JavaScript / TypeScript、HTTP 协议、浏览器等基础知识',
      '了解前端工程化，熟悉 React、Vue、Angular 等至少一个主流框架或库',
      '有工程实践经验，具备良好的编码规范和习惯，熟悉 Git、Lint 等工具',
      '具备良好的计算机基础、逻辑思维能力、沟通协调能力和自驱力'
    ],
    bonus: '爱折腾、有好奇心，关注前沿技术；活跃于 GitHub 并有开源贡献或技术分享；了解或使用过 Go、Python、Java、C++ 等后端语言；熟练使用 Copilot、Cursor、Claude Code 等 AI 编程助手'
  },
  {
    title: '全栈开发工程师',
    cities: ['上海', '杭州'],
    category: '研发',
    duties: ['负责从前端交互到服务端接口的完整功能闭环', '参与产品需求拆解和技术方案设计', '快速验证 AI / 云服务新场景'],
    requirements: ['同时具备前端和后端开发能力', '能独立完成模块设计和落地', '熟悉 Web 应用开发流程'],
    bonus: '有完整产品从 0 到 1 实践经验'
  },
  {
    title: '大模型推理优化工程师',
    cities: ['上海'],
    category: 'AI',
    duties: ['优化大模型推理性能与资源利用率', '参与模型服务部署、压测与调优', '构建面向业务场景的推理加速方案'],
    requirements: ['熟悉深度学习基础和推理框架', '理解 GPU、CUDA 或模型量化相关概念', '具备扎实的系统性能分析能力'],
    bonus: '有 TensorRT、vLLM、推理服务或 GPU 调优经验'
  },
  {
    title: '产品经理',
    cities: ['北京', '上海'],
    category: '产品',
    duties: ['洞察开发者和企业客户需求', '规划云服务或 AI 产品功能', '协调研发、设计、运营推进交付'],
    requirements: ['具备清晰的结构化表达能力', '能将复杂技术转化为产品方案', '关注数据和用户反馈'],
    bonus: '有技术背景、ToB 产品或 AI 产品实践经验'
  },
  {
    title: '测试开发工程师',
    cities: ['上海', '深圳'],
    category: '研发',
    duties: ['建设自动化测试和质量保障体系', '参与接口、性能、稳定性测试', '推动缺陷定位和质量度量'],
    requirements: ['熟悉至少一门编程语言', '理解软件测试方法和工程流程', '具备问题定位和持续改进意识'],
    bonus: '有自动化测试、压测平台或云服务测试经验'
  },
  {
    title: '大数据开发工程师',
    cities: ['上海'],
    category: '数据',
    duties: ['构建数据处理、分析和指标体系', '参与实时或离线数据链路开发', '提升数据服务稳定性和可观测性'],
    requirements: ['熟悉 SQL 和数据建模基础', '了解 Spark / Flink / Hive 等生态', '具备工程化数据处理能力'],
    bonus: '有海量数据处理或实时计算实践经验'
  },
  {
    title: '技术支持',
    cities: ['上海'],
    category: '客户技术',
    duties: ['响应客户技术问题并推动解决', '沉淀产品使用方案和最佳实践', '与研发协作定位线上问题'],
    requirements: ['具备良好的沟通和技术理解能力', '熟悉网络、存储、音视频或云服务基础', '能快速学习并定位问题'],
    bonus: '有开发者社区、客户支持或云产品实践经验'
  },
  {
    title: '业务架构师',
    cities: ['深圳', '西安'],
    category: '解决方案',
    duties: ['理解客户业务场景并设计技术架构', '输出行业解决方案和落地路径', '支持重点项目售前与交付衔接'],
    requirements: ['具备系统性方案设计能力', '理解云计算、音视频或 AI 相关技术', '能进行跨团队沟通和方案表达'],
    bonus: '有行业项目、架构设计或解决方案经验'
  },
  {
    title: '成本运营',
    cities: ['深圳'],
    category: '运营',
    duties: ['分析资源成本与业务用量', '推动成本优化和运营策略落地', '建立数据化成本管理机制'],
    requirements: ['具备数据分析和业务理解能力', '熟悉 Excel / SQL 等分析工具', '对资源效率和经营指标敏感'],
    bonus: '有云资源、供应链或经营分析经验'
  },
  {
    title: '售前解决方案工程师',
    cities: ['北京', '上海', '深圳'],
    category: '解决方案',
    duties: ['面向客户讲解产品能力和解决方案', '完成技术交流、方案设计和 PoC 支持', '协同销售推进商机转化'],
    requirements: ['具备技术表达和客户沟通能力', '理解云计算、音视频、AI 产品基础', '能快速学习行业场景'],
    bonus: '有竞赛、项目路演或 ToB 技术方案经验'
  }
]

export const timeline = [
  { step: '01', title: '上传简历并报名', phase: '报名', batchOne: '即日起', batchTwo: '即日起', detail: '提交 PDF 简历并填写投递信息' },
  { step: '02', title: '收到回执通知', phase: '确认', batchOne: '2 日内', batchTwo: '2 日内', detail: '未收到可在校招群联系牛小七' },
  { step: '03', title: '解锁实战议题', phase: '创作', batchOne: '9.22 00:00', batchTwo: '10.20 00:00', detail: '选择方向，开始项目创作' },
  { step: '04', title: '提交作品成果', phase: '提交', batchOne: '9.28 23:59', batchTwo: '10.26 23:59', detail: '提交代码、文档、Demo 视频' },
  { step: '05', title: '路演式终面', phase: '终面', batchOne: '10 月上旬', batchTwo: '11 月上旬', detail: '以作品路演完成终面' },
  { step: '06', title: 'Offer 发放', phase: '结果', batchOne: '10 月中旬', batchTwo: '11 月中旬', detail: '优秀项目优先评定' },
  { step: '07', title: '获奖公布', phase: '公布', batchOne: '10 月中旬', batchTwo: '11 月中旬', detail: '同步公布项目奖项' }
]

export const topics = [
  {
    title: '文本或图片生成 3D 模型',
    tag: 'AIGC / 3D',
    summary: '开发一个根据文本或图片生成单个 3D 素材元素的应用。',
    detail:
      '需要设计目标用户、功能优先级、3D 模型生成 API 选型、效果评估系统，并落地减少第三方 API 调用次数的方案。',
    deliverable: 'APP + 效果评估系统 + 调用频次优化功能 + 作品说明文档'
  },
  {
    title: 'AI 角色扮演网站',
    tag: 'LLM / Voice',
    summary: '用户可以搜索哈利波特、苏格拉底等角色，并与其进行语音聊天。',
    detail:
      '需要实现 3 个以上 AI 角色技能，只允许调用 LLM、语音识别和 TTS 能力，不能调用第三方 Agent 能力。',
    deliverable: '角色扮演 Web App + 语音对话 + 技能说明文档'
  },
  {
    title: 'ESP32 智能小车',
    tag: 'Embedded / Robot',
    summary: '融合超声避障、颜色寻路、相机视觉，完成自主移动任务。',
    detail:
      '必做硬件初始化、超声避障、颜色寻路；加分项包括视觉辅助、WiFi 图像传输、多传感器融合和特色功能。',
    deliverable: '小车硬件实现 + 控制程序 + 演示视频 + 设计文档'
  },
  {
    title: '小说生成漫画应用',
    tag: 'AIGC / Story',
    summary: '把一篇小说理解、拆分并生成相应漫画内容。',
    detail:
      '需要说明用户故事、实现挑战、AIGC 模型选型和未来规划；不能调用第三方 Agent 能力。',
    deliverable: '小说到漫画生成应用 + 模型选型说明 + 产品文档'
  },
  {
    title: '语音对话控制电脑',
    tag: 'LLM / Desktop',
    summary: '用语音对话控制电脑，例如播放音乐、写文章或组合复杂任务。',
    detail:
      '需要明确功能优先级、实现挑战、LLM 选型和未来规划，只允许调用 LLM、语音识别和 TTS 能力。',
    deliverable: '语音控制应用 + 复杂任务编排能力 + 说明文档'
  }
]

export const awards = [
  { title: '一等奖', count: 'x1', prize: '¥50000', tone: 'from-amber-300 to-orange-400' },
  { title: '二等奖', count: 'x2', prize: '¥10000', tone: 'from-sky-300 to-blue-500' },
  { title: '三等奖', count: 'x3', prize: '¥2000', tone: 'from-emerald-300 to-teal-500' },
  { title: '创作奖', count: 'x10', prize: '¥500', tone: 'from-slate-300 to-slate-500' }
]

export const rules = {
  review: [
    {
      title: '用户价值',
      weight: '60%',
      detail: '产品目标合理性、产品设计合理性、功能丰富度、是否符合用户需求等'
    },
    {
      title: '技术质量',
      weight: '40%',
      detail: '架构设计、可维护性、可扩展性、代码健壮度、代码规范、复用性与可读性等'
    }
  ],
  submission: [
    '作品需符合本次议题方向的要求，并确保团队及个人提交的作品自主完成。',
    '提交产品所有源代码、运行说明、架构设计文档、模块规格、分工和录制的 Demo 视频。',
    '代码仓库需保留开发过程痕迹；组队投递需有多人提交记录，并建议基于 pull request 协作。',
    '代码抄袭、技术抄袭或代码重复率在 50% 以上，将取消路演资格，并列入招聘黑名单。'
  ]
}

export const winners = [
  ['一等奖', '宋玉良打铁之旅', '语音对话控制电脑应用'],
  ['二等奖', '一个人投递也需要队伍名', 'AI 角色扮演网站'],
  ['二等奖', '请展示你的prompt', 'AI 角色扮演网站'],
  ['三等奖', '天工开物', '小说生成漫画应用'],
  ['三等奖', '好运降临队', '文本或图片生成 3D 模型'],
  ['三等奖', '千早爱音', 'AI 角色扮演网站'],
  ['创作奖', '终将胜利队', '语音对话控制电脑应用'],
  ['创作奖', '宝宝巴士', '小说生成漫画应用'],
  ['创作奖', '丽塔队', '小说生成漫画应用'],
  ['创作奖', '不知道叫什么队', 'AI 角色扮演网站'],
  ['创作奖', 'AIPM', 'AI 角色扮演网站'],
  ['创作奖', '回来吧堡垒之夜', '文本或图片生成 3D 模型'],
  ['创作奖', '七牛牛牛', 'AI 角色扮演网站'],
  ['创作奖', '厦门密码', 'AI 角色扮演网站'],
  ['创作奖', 'codewin', 'AI 角色扮演网站'],
  ['创作奖', '极光队', 'ESP32 智能小车']
]

export const qiniu = {
  reasons: [
    '参与一个覆盖超过 95% 中国网民的产品开发',
    '从云到 AI 到具身智能，干最前沿的事',
    '用实力拿 SSP Offer，第一名还有 5 万奖金'
  ],
  stats: [
    ['02567.HK', '香港联交所上市企业'],
    ['169万+', '开发者'],
    ['95%+', '中国网民间接覆盖'],
    ['AI + 云', '音视频、大模型、算力推理']
  ],
  description:
    '七牛云是国内领先的云和 AI 服务提供商，服务 B站、小红书、快手、蔚来等平台和企业，并推出“灵矽AI平台”，为智能硬件和机器人 AI 多模态应用提供全栈 AI 服务。',
  video: 'https://www.qiniu.com/4b9c2a6c3add689adb0e845112a062ab.mp4'
}

export const referral = {
  title: '报名福利与推荐奖励',
  description:
    '报名成功后即送 1200 万 Token。校招期间每日限量发放 1 万元代金券，可用于购买 GPU 算力与全栈应用服务器。',
  invite:
    '推荐好友报名，耳机、键盘、Switch 等好礼抱回家；邀请好友注册 qiniu.com/ai 开发者，最高享百亿 Token 奖励。',
  action: '领取算力好礼',
  url: 'https://www.wjx.cn/vm/wQujgPw.aspx#'
}

export const qrCodes = [
  {
    label: '七牛云公众号',
    hint: '关注动态',
    image: 'https://www-static.qbox.me/_next/static/media/qr-qiniu.f95bbe59dd7f83a953109fa704ac0ec9.jpg'
  },
  {
    label: '扫码进群',
    hint: '报名咨询',
    image: 'https://www-static.qbox.me/_next/static/media/qq-qrcode.c2843b8c460f915930a4f74d2bac9f2f.png'
  },
  {
    label: '1024 实训营',
    hint: '训练营入口',
    image: 'https://www-static.qbox.me/_next/static/media/qr-1024.f443e979a0b976053a56f6d74b1d1c56.jpg'
  }
]

export const formFields = {
  jobs: jobs.map((job) => job.title),
  cities: ['北京', '上海', '杭州', '深圳', '西安'],
  sources: ['七牛官方公众号/视频号', 'BOSS直聘', '牛客网', '学校就业信息网', '学校院系就业信息群', '七牛员工内推', '朋友同学推荐', '第三方机构/平台']
}
