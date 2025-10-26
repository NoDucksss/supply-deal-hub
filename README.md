# 🧠 NeGOATai  
**AI-powered negotiation assistant for real‐time supplier intelligence in aerospace procurement.**

---

## 📌 Problem Statement  
NeGOATai is designed to help **procurement negotiators** make smarter, faster, and more informed decisions **in real time** with human-in-loop
Built primarliy **Free-Cluely** an open-source framework, it offers a **secure**, **fast**, and **reliable** alternative for live negotiation support — ensuring that sensitive supplier data stays protected while insights remain instant with added context from **Kontext.Dev** and **Weaviate**

---

## 🛰️ Procurement Domain  
The assistant focuses on the **aerospace supply chain**, specifically **satellite component suppliers**, where precision, lead time, and cost-control are critical.

---

##  Domain Application
- Realtime Insights
- Training and Onboarding new-sales people 
---

## 📊 Dataset  
A **mock dataset of 10 aerospace suppliers** was created to simulate real-world conditions.  
Each supplier includes key **KPIs** inspired by modern procurement analytics platforms, covering:  
- Quality metrics (e.g., defect rate, quality score)  
- Pricing metrics (e.g., discount rate, unit price, trend)  
- Availability metrics (e.g., on‐time delivery, lead time)  
This dataset enables dynamic testing of AI negotiation strategy recommendations.

---

## 🧩 Tech Stack  
- ⚙️ **Free-Cluely (custom-modified)** – integrated with contextual awareness from [Kontext.dev](#) and [Weaviate](#) for supplier knowledge retrieval; extended with [OpenAI](#) API for reasoning and dialogue.  
- 💻 **Frontend** – developed using [Lovable](#) for an interactive and intuitive negotiation interface.  
- 🔗 **Beyond Presence API** – enables **live supplier video-call integration**, allowing the AI assistant to appear dynamically during supplier negotiations.

---

## 🤝 Partner Technologies  
- [OpenAI](#)  
- [Weaviate](#)  
- [Kontext.dev](#)  
- [Lovable](#)  
- [Beyond Presence](#)

---

## 📈 Market Share & Size  
The global procurement software market was valued at approximately **USD 7.30 billion in 2023**, and is projected to reach around **USD 18.28 billion by 2032**, with North America accounting for a share of approximately **43.42% in 2023**. :contentReference[oaicite:0]{index=0}  
Additionally, the top 10 vendors in this market held about **59% of the total market share in 2024**. :contentReference[oaicite:1]{index=1}  

---

## 💡 Summary  
**NeGOATai** transforms how procurement professionals engage with suppliers.  
By combining **AI reasoning**, **contextual data**, and **real-time video integration**, it allows negotiations to become strategic dialogues rather than mere cost bargaining.  
In industries like aerospace—where every decision impacts performance and cost—NeGOATai brings clarity, confidence, and competitive advantage to the negotiation table.

---

## 🔗 Additional Repositories  
- [Repo: Free-Cluely custom integration](#)  
- [Repo: Dataset of 10 aerospace suppliers (KPI model)](#)  
- [Repo: Frontend UI (Lovable) for real-time negotiation interface](#)  
- [Repo: Video-call integration via Beyond Presence API](#)

---

## 🚀 Getting Started

1. **Clone our custom Free-Cluely repository**:
   ```bash
   git clone [https://github.com/YourOrg/your-free-cluely-fork.git](https://github.com/bhanuprasanna2001/free-cluely)
   cd free-cluely
   npm install
   npm run dev
   ```

2. Set .env file in your repo with necessary key
OPENAI_API_KEY=your_openai_api_key_here
WEAVIATE_ENDPOINT=your-weaviate.instance
BEYOND_PRESENCE_API_KEY=your_beyond_presence_key
LOVABLE_DASHBOARD_URL=https://supply-deal-hub.lovable.app/
KONTEXT_API_KEYS, URLS etc

4. Upon Navigating the Lovable Dashboard you should be able to login using GMAIL and chat with the Beyond Presence Supplier Agent
   
