# 💍 Khmer Wedding E-Invitation Website

A luxurious, mobile-first static wedding e-invitation website inspired by traditional Cambodian royal aesthetics and romantic floral themes.

- **Live URL**: [https://mrsynan.github.io/E-inviting/](https://mrsynan.github.io/E-inviting/)
- **Repository**: [https://github.com/Mrsynan/E-inviting.git](https://github.com/Mrsynan/E-inviting.git)

---

## 🚀 How to Clone & Run on Another Computer

### 1. Clone the Repository
Open Terminal (Mac/Linux) or Command Prompt / PowerShell (Windows) and run:

```bash
git clone https://github.com/Mrsynan/E-inviting.git
cd E-inviting
```

### 2. Run Locally
Because this is a pure static project (HTML, CSS, JS), you don't need complex database or backend setups. Run any of the following:

#### Option A: Using Python (Pre-installed on macOS / Linux)
```bash
python3 -m http.server 8000
```
Then open your browser at: `http://localhost:8000`

#### Option B: Using Node.js / npx
```bash
npx serve
```

#### Option C: VS Code Live Server
1. Open the folder in VS Code (`code .`).
2. Right-click `index.html` and select **"Open with Live Server"**.

#### Option D: Direct Browser
Double-click `index.html` to open it in Google Chrome or Safari.

---

## 📁 Project Structure

```
E-inviting/
├── index.html        # Main invitation page (Cover overlay + 6 sections + navigation dock)
├── style.css         # Custom responsive styling, animations, fonts, and floral layout
├── content.js        # Wedding details (Couple names, parents, date, venue, guestbook)
├── config.js         # RSVP endpoints, Google Sheets, WhatsApp integration config
├── event.js          # Countdown timer, calendar integration logic
├── customize.html    # Internal tool for customizing guest names & generating links
└── assets/           # High-resolution PNGs, Kbach ornaments, audio music, and flowers
    ├── khmer-royal-button-complete.png  # Royal Cambodian wedding open button
    ├── flower-bottom-left.png           # Transparent watercolor burgundy peony bouquet
    ├── flower-top-right.png            # Transparent delicate botanical line art
    ├── petal.png                       # Velvet falling rose petal asset
    └── music.mp3                       # Background wedding music
```

---

## 🤖 AI Assistant Prompt (Copy & Paste to another AI on your new computer)

If you are using Antigravity, Claude, or ChatGPT on another computer, copy and paste the prompt below to give the AI full context instantly:

```markdown
I am working on an existing Khmer wedding e-invitation project (static HTML5 / CSS3 / Vanilla JS, mobile-first design).
Repository: https://github.com/Mrsynan/E-inviting.git

PROJECT CONTEXT & RULES:
1. Theme: Romantic cream-pink background (#FBEFEA to #FFF5F0) with maroon / burgundy text (#7A1F2B to #8B1E3F), double-layer polished gold accents (#E8CF8E, #D9B76E), and traditional Cambodian royal aesthetics.
2. Assets:
   - Corner florals: assets/flower-bottom-left.png (mirrored for bottom-right) and assets/flower-top-right.png (mirrored for top-left).
   - Open Button: assets/khmer-royal-button-complete.png with 3D embossed Kbach Phni floral motifs and text "បើកលិខិតអញ្ជើញ".
   - Animated falling petals: assets/petal.png rendered behind text (z-index: 2).
3. Fonts:
   - Decorative Khmer headings & Title: Moulpali (font-weight: 400, font-synthesis: none).
   - Body & Parents' names: Battambang 400.
   - Couple names: Battambang 700 bold.
   - English: Cormorant Garamond italic.
4. Core Logic & Content Files:
   - content.js: Couple names (គ្រី ស៊ីណាន & ចយ ច័ន្ទរតនា), parents' names, venue address, date (2027-03-04T17:00:00+07:00).
   - config.js: Google Sheets and WhatsApp RSVP integration.
   - Do NOT translate, rewrite, or shorten any existing names, dates, or addresses unless explicitly asked.
```
