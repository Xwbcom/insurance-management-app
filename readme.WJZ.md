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