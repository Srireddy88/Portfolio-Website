# 🌐 Portfolio Website Hosting on AWS
```
https://srireddy88.github.io/Portfolio-Website/
```
## 📌 Project Overview
This project is a **personal portfolio website** built with **HTML, CSS, and basic JavaScript**, hosted on **Amazon S3** and served globally via **Amazon CloudFront**.  

It demonstrates skills in:  
- Frontend (HTML, CSS, JS basics)  
- AWS S3 (static website hosting)  
- AWS CloudFront (CDN, caching, invalidations)  
- Bucket policies & access control  

---

## 🚀 Features
- Responsive static website (HTML, CSS, JS)  
- Hosted on AWS S3 with CloudFront as CDN  
- Configured **bucket policies** for secure access  
- **CloudFront invalidations** to refresh cached content  
- Low-latency delivery worldwide  

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript (basics)  
- **Cloud Services**: AWS S3, AWS CloudFront  

---

## ⚡ Deployment Steps

### 1. Create S3 Bucket
1. Go to AWS S3 → Create bucket → Name it `portfolio-srilakshmi`.  
2. Upload project files:  index.html, styles.css, script.js
<img width="1920" height="1080" alt="Screenshot 2025-09-02 090416" src="https://github.com/user-attachments/assets/27d5b7db-7170-40fd-860a-cdb507287e3f" />
3. Keep bucket **private** (no public access).  
<img width="1920" height="1080" alt="Screenshot 2025-09-02 090522" src="https://github.com/user-attachments/assets/9d7e1ea3-230c-4e17-b399-1a5c703b61ea" />

---

### 2. Setup CloudFront
1. Create a new **CloudFront Distribution**.  
2. Set origin domain to:  portfolio-srilakshmi.s3.amazonaws.com
<img width="1920" height="1080" alt="Screenshot 2025-09-02 090532" src="https://github.com/user-attachments/assets/369a47d9-b6fc-4a99-858a-f4252dfb60c3" />
3. Configure **Origin Access Control (OAC)** so only CloudFront can access S3.  
4. Set **Default Root Object** → `index.html`.  

---

### 3. Configure S3 Bucket Policy
Example policy to allow CloudFront access:  

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::portfolio-srilakshmi/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::043309351655:distribution/E1U9SY21BUJYHE"
        }
      }
    }
  ]
}

```
**CloudFront URL: **
```
https://d1nj818o8h6bw.cloudfront.net/
```

