# Docker & Git Дадлагын Даалгавар

## Төслийн тухай
Docker болон Git-ийн үндсэн зарчмуудыг судалж, Express.js backend API-ийг чингэлэгжүүлсэн (containerize) даалгавар

## Судалсан ойлголтууд
- **Docker:** Image build, Container run, Port Mapping (-p 3000:3000), .dockerignore.
- **Git:** Commit history, Branching, Merge, .gitignore.

## Ажиллуулах заавар
```bash
docker build -t my-express-app .
docker run -d -p 3000:3000 --name express-container my-express-app
