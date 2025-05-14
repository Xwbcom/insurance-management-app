# 项目介绍
本平台系一款全方位的全栈保险管理系统，其研发严格遵循保险行业的卓越实践，精雕细琢而成。于架构设计层面，着重提升可扩展性与维护便利性。在模块化设计的赋能下，各功能模块既彼此独立，又协同运作。面对业务拓展催生的新功能需求，新模块可便捷接入，而无需对整体架构进行大规模改动，从而灵活顺应保险行业瞬息万变的业务需求。与此同时，明晰的代码结构与标准化的接口规范，大幅提升了日常维护的效率。维护人员能够迅速定位并解决问题，确保系统长期、稳定地契合行业发展步伐。

# 核心功能
## 基础服务块
 - 1.身份管理
（1）基于JWT的认证与授权
（2）角色权限访问控制(RBAC)
（3）密码加密与找回
（4）会话管理
 - 2.保单管理
（1）全生命周期保单管理
（2）保障范围自定义
（3）自动续保服务
（4）文档自动生成
- 3.理赔处理
（1）带验证的理赔申请表
（2）损害评估工具
（3）欺诈检测指标
（4）结算工作流
- 4.财务模块
（1）保费计算引擎
（2）佣金追踪（代理/经纪）
（3）支付网关集成（Stripe/PayPal）
（4）财务对账

## 高级功能
- 1.商业智能
(1) 实时数据看板
(2) 自定义报表生成器
(3) 预测性分析
(4) 合规性监管报告
- 2.集成服务
（1）云存储（AWS S3/Azure Blob）
（2）邮件/SMS通知
（3）第三方API网关
（4）Webhook支持
<!-- by 林科宇 -->


## How to Run
### Backend
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
   （1）打开工具
   - 这个项目需要idea开发软件打开
   （2）检查运行配置
   - 在“菜单”中查看“项目结构”中的SDK版本是否是17及17以上的，“语言级别”是否为SDK默认值
   - 查看运行/调试配置是否为spring boot
   
2. Build and run using Gradle/Maven:
   ```sh
   ./gradlew bootRun  # For Gradle
   mvn spring-boot:run  # For Maven
   ```
   在运行时可能会遇到“依赖项无法解析”的问题
   原因：
   这可能是网络问题导致Maven无法从远程仓库下载依赖，或者是远程仓库的地址不可用
   Maven 的本地缓存中可能保存了错误的元数据，导致无法正确解析依赖
   pom.xml   文件中可能存在配置错误，例如仓库地址或依赖版本错误。
   ```
   如何解决：
   （1）检查依赖版本
   打开 Maven 中央仓库
   搜索   org.apache.tomcat.embed:tomcat-embed-core
   确认是否存在版本   10.1.39  。如果不存在，更换为存在的版本（如   10.1.38  ）
   （2） 更新   pom.xml 
   如果版本不存在，修改   pom.xml   文件中的依赖版本。例如：
    <dependency>
      <groupId>org.apache.tomcat.embed</groupId>
      <artifactId>tomcat-embed-core</artifactId>
      <version>10.1.38</version> <!-- 修改为存在的版本 -->
      <scope>provided</scope>
    </dependency>
    （3） 清理 Maven 缓存
    Maven 的本地缓存可能保存了错误的元数据。可以通过以下命令清理本地缓存：
    mvn dependency:purge-local-repository
    或者手动删除本地 Maven 缓存目录（默认路径为   ~/.m2/repository  ）
    （4）强制更新依赖
    运行以下命令强制 Maven 更新依赖：
    mvn clean install -U

   注意：-U   参数会强制 Maven 检查并更新依赖的快照版本（SNAPSHOT）。如果项目中使用了快照版本的依赖，这些依赖可能会在更新后引入不兼容的更改。
    - 解决办法：
    • 在更新依赖之前，仔细检查依赖的版本更新日志，了解可能的不兼容更改。
    • 在开发环境中进行充分的测试，确保更新后的依赖不会影响项目的功能。

    （5）检查网络连接
    确保你的网络可以访问 Maven 中央仓库（`https://repo1.maven.org/maven2/`）。
    如果网络有问题，可以尝试配置代理或切换到其他网络。
    （6）检查仓库配置
    确保   pom.xml   中的   <repositories>   配置正确。例如：
    <repositories>
      <repository>
        <id>central</id>
        <url>https://repo1.maven.org/maven2/</url>
      </repository>
    </repositories>
    （7）检查 IDE 缓存
    如果你使用的是 IDE（如 IntelliJ IDEA 或 Eclipse），可能需要清理 IDE 的缓存。
    File   ->   Invalidate Caches / Restart   ->   Invalidate and Restart  
    按照上述步骤操作后，应该可以解决依赖解析失败的问题。


3. API will be accessible at `http://localhost:8080`

<!--韦家装-->


# 前端设置与运行指南
本文档提供了全面且分步的指导，涵盖环境设置、Node.js 安装验证，以及保险管理系统前端应用程序的执行。它详细阐述了每个流程，确保用户能够顺利完成配置和部署阶段，从而在启动和运行系统前端组件时获得无缝的体验。
# 先决条件
## 在运行前端项目之前，请确保已安装以下软件：

Node.js：一个用于 JavaScript 的运行时环境。
Angular CLI：一个用于 Angular 的命令行界面工具。
1. 下载并安装 Node.js
访问 Node.js 官方网站。
下载适合你操作系统的 长期支持（LTS） 版本。
按照网站上针对你平台提供的安装说明进行操作。
2. 验证 Node.js 安装
安装完成后，验证 Node.js 和 npm（Node 包管理器）是否安装正确：

### 打开你的终端（命令提示符、PowerShell 或其他任何终端工具）。
运行以下命令检查 Node.js 版本：
bash
node -v
npm -V

3. 设置前端项目
安装好 Node.js 后，按照以下步骤设置并运行前端应用程序：

## 导航到前端文件夹：
sh
cd frontend/insurance-mgmt

## 安装依赖项：
plaintext
npm install

4. 运行前端应用程序
要启动开发服务器：

### 运行 Angular 应用程序：
sh
ng serve

### 打开你的浏览器并访问：
应用程序可在 http://localhost:4200 访问。
每当你对源文件进行更改时，应用程序都会自动重新加载。
 <!-- hyt -->

# 首页介绍组件  
本目录包含保险管理系统前端的主页介绍组件，用于展示应用程序首页的概述或介绍部分。

## 功能特性  
· 动态内容：可渲染与应用程序介绍相关的动态内容  
· 响应式设计：确保介绍模块在不同设备上都能正确显示  
· 高度可定制：支持轻松修改展示文本、样式或布局  

## 文件结构  
src/app/components/homepage-intro/  
├── home-page-intro.component.ts      # 组件TypeScript逻辑  
├── home-page-intro.component.html    # HTML模板  
├── home-page-intro.component.css     # 组件样式表  
├── home-page-intro.module.ts         # Angular模块定义  

# 使用指南  
## 组件导入  
在Angular应用中使用本组件时，请确保在特性模块或AppModule中正确导入：  
```typescript
import { HomePageIntroComponent } from './components/homepage-intro/homepage-intro.component';
```

## 模板嵌入  
可在任意Angular模板中使用组件选择器进行嵌入：  
```html
<app-homepage-intro></app-homepage-intro>
```

## 内容定制  
修改文件即可更新介绍文本或添加新视觉元素，例如：  
```html
<div class="intro-section">
  <h1>欢迎使用保险管理系统</h1>
  <p>高效管理您的保险保单、理赔及客户信息</p>
</div>
```

## 样式调整  
可根据应用设计系统更新样式表，示例：  
```css
.intro-section {
  文本对齐: 居中;
  内边距: 20px;
  背景色: #f9f9f9;
}
```

# 技术栈  
· Angular：用于构建具有响应式架构的动态单页应用(SPA)框架  
· TypeScript：提供静态类型检查，增强代码可维护性和开发效率  
· HTML：采用语义化标记构建网页内容结构  
· CSS：负责样式处理、主题定制及响应式布局实现  

# 前端架构  
前端源代码位于frontend/insurance-mgmt目录，核心架构如下：  
```
frontend/
│
├── src/
│   ├── app/                  # 核心业务逻辑模块与组件
│   ├── assets/               # 静态资源（图片/字体等）
│   ├── environments/         # 环境配置文件
│   ├── index.html            # 应用入口文件（HTML外壳）
│   ├── main.ts               # 启动脚本（Angular平台）
│   ├── styles.css            # 全局样式表
│   └── polyfills.ts          # 浏览器兼容性垫片
│
├── angular.json              # Angular工作区配置
├── package.json              # NPM依赖及构建脚本
└── tsconfig.json             # TypeScript编译器配置
```

# 功能模块  
## 用户管理模块  
实现认证（登录/注册）和基于角色的访问控制(RBAC)  
## 保单管理模块  
支持保险保单记录的增删改查(CRUD)及状态管理  
## 理赔处理模块  
涵盖从提交到审批的全流程理赔工作流及状态追踪  
## 分析看板  
通过图表和指标可视化关键绩效数据（保单签发量、理赔趋势等）  
<!-- by lijintai -->


# 登录组件
## 目录结构
plaintext
login/
├── forgot-password/        # 密码找回功能的子目录
├── login.component.css     # 登录组件的样式文件
├── login.component.html    # 登录表单的HTML模板
├── login.component.spec.ts # 登录组件的单元测试文件
└── login.component.ts      # 管理登录逻辑的TypeScript文件
## 用途
登录组件是用户认证的关键入口，在整体用户体验和系统安全方面发挥着至关重要的作用。它是用户与应用程序交互以获取其功能和受保护资源访问权限的初始界面。具体而言，它使用户能够：

## 使用凭据登录
找回忘记的密码
导航至注册页面
## 功能
输入字段：
用户名：验证邮箱格式
密码：检查是否满足最小长度要求
按钮：
登录：将凭据提交到服务器
忘记密码：重定向到密码找回页面
注册：重定向到注册页面
验证：
对缺失用户名 / 密码的情况显示错误提示
针对无效凭据显示服务器端错误消息
## 路由：
主要路由：/login
重定向：
/register：此路由专门用于引导新用户完成注册流程。当用户点击注册按钮或通过其他导航方式访问该路由时，系统会呈现完整的注册表单界面，包含必要的输入字段（如用户名、邮箱、密码等）及相应的验证机制，确保用户提交符合规范的注册信息，从而顺利创建新账户。
/forgot-password：该路由为忘记密码的用户提供找回密码的入口。用户访问此路由后，会进入密码找回页面，通过输入注册邮箱等信息，触发密码重置流程，如接收重置链接邮件、设置新密码等操作，帮助用户重新获得账户访问权限 。
TypeScript 逻辑：在登录组件的 TypeScript 逻辑中，涵盖了从表单验证到用户认证的全流程功能实现。一方面，通过严谨的表单验证逻辑，对用户输入的用户名和密码进行格式与内容校验，例如验证用户名是否符合邮箱格式规范、密码长度是否满足最低要求，确保用户提交数据的有效性；另一方面，基于 Axios 等 HTTP 客户端库，实现与后端 API 的通信交互，将用户输入的凭据以安全的方式发送至服务器进行身份验证。同时，精心处理服务器响应结果，针对认证成功与失败的不同情况，分别执行相应操作，如成功时利用 Angular 的 Router 服务将用户无缝重定向至仪表板，失败时在页面上精准展示友好的错误提示信息，保障整个登录流程的稳定性与用户体验的流畅性。
## 表单验证
确保必填字段已正确填写。
身份验证
API 通信：向后端 API 发起 POST 请求，安全传输用户凭据。这种交互是系统内用户身份验证的核心机制。
响应处理：
成功场景：从服务器收到成功的身份验证响应后，无缝将用户重定向到仪表板，使用户能立即访问应用程序的主要功能。
失败场景：在身份验证失败的情况下，显示清晰且用户友好的错误消息，引导用户采取可能的纠正措施。
## 导航管理
使用 Angular 强大的路由服务高效管理应用程序路由。这确保了流畅的导航过渡，使用户能够以直观、有序的方式在不同视图和页面之间切换。
<!-- by 龙镇法 -->

# 注册组件
## 目录结构
register/
├── register.component.css     # 注册组件样式
├── register.component.html    # 注册表单HTML模板
├── register.component.spec.ts # 注册组件单元测试
└── register.component.ts      # 注册逻辑TypeScript文件

# 功能概述
提供新用户注册功能，支持用户输入并验证个人信息，完成账户创建流程。
## 核心特性
- 输入表单
-    姓名：必填字段校验
-   密码与确认密码：长度验证与匹配检查
-    邮箱：格式验证与唯一性检查
-    操作按钮
-    登录：跳转到已有用户登录页面
-    注册：提交表单数据创建新账户
## 验证机制
字段完整性检查
密码强度与匹配验证
邮箱格式与重复注册检查
服务器端错误信息展示
## 路由配置
访问路径：/register
注册成功自动跳转：/login
技术实现
表单逻辑
全面的字段验证体系
用户数据提交与响应处理
路由导航与页面跳转
## TypeScript 逻辑
### 响应式表单
同步与异步验证器
跨字段验证（密码匹配）
自定义邮箱唯一性检查
实时错误反馈
### 账户创建
用户数据 HTTP POST 请求
加载状态管理
优雅的错误处理
成功通知
### 导航：使用路由服务进行重定向
注册后路由跳转
错误感知重定向

// 核心组件与技术：
- 泛型表单组
- 自定义验证器与异步验证器
- 使用 RxJS 处理异步操作
- DTO 对象映射
- HTTP 错误处理
- 加载状态管理
- 响应式编程模式
- 依赖注入

### 主要增强点：
强类型：泛型表单组与 DTO 接口
模块化验证：分离同步 / 异步验证逻辑
错误处理：HTTP 状态码映射
安全性：密码强度验证
用户体验优化：加载指示器、表单状态管理
代码质量：私有方法、清晰的关注点分离
可测试性：隔离验证逻辑
性能优化：验证触发机制优化

## 依赖模块
Angular FormsModule
Angular RouterModule
自定义用户服务 (UserService)
表单验证工具库
测试覆盖
单元测试文件 (register.component.spec.ts) 包含以下测试场景：

## 表单验证功能测试
组件初始化测试
API 调用模拟测试
成功与失败响应处理测试
路由跳转功能测试
## 技术规范
采用响应式表单设计
实现表单字段实时验证
统一错误提示样式
符合 WCAG 无障碍标准
移动端适配设计
## 使用指南
导入必要的 Angular 模块
配置 UserService API 端点
自定义验证错误提示信息
集成路由导航配置
运行单元测试确保功能正常
<!-- by 林子煊 -->

# 客户模块
# src/app/customer
├── customer-components     # 包含与客户功能相关的可复用的 Angular 组件。
├── customer-routing.module.ts    # 为与客户相关的页面和组件定义路由配置。
├── customer.module.ts    # 用于对所有与客户相关的组件、服务和配置进行分组的主模块文件。
├── model.ts        # 包含用于定义与客户相关的数据结构的 TypeScript 模型和接口。
├──services             # 包含用于处理与客户相关的业务逻辑、API 调用和数据管理的服务文件。

## 目的和功能
### 目的：
该文件夹组织了前端应用程序中与客户模块相关的所有功能和特性。它确保与客户相关的逻辑、组件和服务被模块化且易于维护。src/app/customer
### 组件目录：
存放专门用于客户相关功能的 Angular 组件，例如客户个人资料视图、表单和仪表盘。
### 路由模块：
管理应用程序中客户特定页面的导航和 URL 映射。
### 模块文件：
将所有与客户相关的功能分组到单个 Angular 模块中，以实现更好的封装和便于集成。
### 模型文件：
定义客户信息的数据结构（接口或类），确保整个应用程序中的类型安全性和一致性。
### 服务目录：
集中处理与客户相关的 API 交互的逻辑，例如获取客户数据、更新个人资料或管理偏好设置。
### 功能总结
该文件夹作为前端应用程序的核心模块化单元，全面整合了客户相关的所有特性与功能。它通过清晰划分组件、路由、模型和服务，实现了各功能模块间的低耦合与高内聚，极大地提升了应用的可维护性、扩展性和开发效率。​
具体而言，customer-components 目录下的可复用组件，如同搭建客户功能界面的 “积木”，支持快速组合出客户资料展示、交互表单等页面；customer-routing.module.ts 则精准控制页面跳转与 URL 映射，确保用户在不同客户功能页面间的流畅切换；customer.module.ts 作为核心枢纽，将分散的功能整合为统一模块，降低了与其他模块间的依赖冲突；model.ts 提供的强类型数据结构，保障了客户数据在传输和处理过程中的一致性和准确性；services 目录集中管理 API 交互与业务逻辑，不仅提升了数据处理效率，还方便对客户相关业务规则进行统一修改与维护。​
此外，这种模块化设计使得代码结构更加清晰，开发者能够快速定位和修改特定功能，减少了维护成本；在扩展新功能时，也能基于现有模块进行高效开发。同时，清晰的模块划分还有助于单元测试和集成测试的开展，提高应用的整体质量与稳定性，为打造高效、可靠的客户功能体系奠定了坚实基础。
<!-- by韦朝刚 -->

# 认证模块
## 目录
组件架构
路由配置
使用 Axios 进行 API 集成
服务器端渲染（SSR）设置
共享功能与优化
安装指南
开发最佳实践
使用 Axios 进行 API 集成
## 安装要求
Axios 是一款基于 Promise 的 HTTP 客户端，适用于浏览器和 Node.js 环境，能够简化 API 调用流程。你可以使用npm或yarn将其安装到项目中：
```
plaintext
npm install axios
```
# 或者
```
yarn add axios
```
如果你正在开发 Angular 应用，并且计划在具有路由功能的应用中集成 Axios，那么需要安装@angular/router包。该包为 Angular 应用提供路由能力，在处理 API 响应以及在不同视图间导航时会发挥重要作用。
```
plaintext
npm install @angular/router
```  
## 认证服务实现
javascript
// 导入Axios
import axios from 'axios';

export default {
  // 假设此处是某个认证相关的方法，例如登录
  xxxxxxx(userData) {
    return axios.post(`${API_URL}/xxxxxx`, userData);
  },
  // 添加拦截器用于错误处理
  setupInterceptors() {
    axios.interceptors.response.use(
      // 正常响应时直接返回
      response => response,
      // 捕获到错误时进行处理
      error => {
        // 处理全局API错误
        return Promise.reject(error);
      }
    );
  }
};

javascript
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  // 使用路由配置初始化根路由模块
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
## 维护建议
推荐实践如下：

及时更新依赖项
密切关注安全公告
在 Angular 版本更新后进行全面测试
记录所有自定义配置
🤝 贡献指南
# 安装 Git
## 下载安装程序
访问 Git 官方网站（https://git-scm.com/downloads），下载适用于 Windows 系统的最新安装程序。
## 运行安装程序
执行下载好的安装文件，并按照安装向导进行操作：

## 接受许可协议
## 选择默认组件
- 1.选择默认编辑器（如 Visual Studio Code）
- 2.保持 “在 Windows 命令提示符中使用 Git” 选项
- 3.使用 OpenSSL 库处理 HTTPS 连接
- 4.检出 Windows 风格换行符，提交时使用 Unix 风格换行符
- 5.使用 Windows 默认控制台窗口
##（可选）安装额外功能
我们欢迎你的贡献！请遵循以下步骤：
- 复刻（Fork）本仓库
- 创建你的功能分支（git checkout -b [分支名称]）
- 提交你的更改（git commit -m '描述本次提交的内容'）
- 将更改推送到你的分支（git push）
- 提交拉取请求（Pull Request）
<!-- by 谢文斌 -->
