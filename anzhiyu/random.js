var posts=["2023/05/20/hello-world/","2023/05/20/Git基本使用/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};