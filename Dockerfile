# Dockerfile 範例 (使用最新的 Ubuntu 基礎映像)
FROM node:lts
# 在容器內部創建一個與本機掛載點名稱一致的資料夾
RUN mkdir /app
# 設定容器啟動時的預設工作目錄
WORKDIR /app
# 容器啟動時執行的指令
CMD ["echo", "Hello from Docker container!"]