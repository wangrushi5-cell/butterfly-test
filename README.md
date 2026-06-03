# 蝴蝶坞照狸六色循环 H5

本地预览：

```bash
python3 -m http.server 4173 --directory h5
```

浏览器打开 `http://localhost:4173`。

部署时可将 `h5` 目录直接发布到 GitHub Pages、Vercel、Netlify 或对象存储静态网站服务。

题库由 `h5_work/build_question_bank.py` 从 Word 文档自动生成。源文件共 350 题，其中第 101 题缺少一个有效选项，当前发布数据自动排除该题，实际可抽取题库为 349 题。
