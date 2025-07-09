// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 根据环境自动设置 base URL
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'hello-vue-app'
  
  return {
    plugins: [vue()],
    
    // 关键配置：GitHub Pages 的基础路径
    base: isProduction ? `/${repoName}/` : '/',
    
    // 可选：自定义构建目录
    build: {
      outDir: 'docs', // GitHub Pages 默认使用 docs 目录或 gh-pages 分支
      assetsDir: 'static'
    }
  }
})