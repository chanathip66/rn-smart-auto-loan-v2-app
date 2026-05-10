# 🚗 Smart Auto Loan

> วางแผนออกรถฉบับมือโปร — แอปคำนวณค่างวดรถยนต์แบบรวดเร็ว

แอปพลิเคชันมือถือสำหรับคำนวณค่างวดผ่อนรถยนต์ พัฒนาด้วย **React Native + Expo** รองรับการเลือกเงินดาวน์ ระยะเวลาผ่อน และอัตราดอกเบี้ย พร้อมแสดงสรุปยอดผ่อนต่อเดือนแบบเข้าใจง่าย

---

<div align="center">

## 📱 หน้าจอแอปพลิเคชัน

<table>
  <tr>
    <td align="center"><b>Splash</b></td>
    <td align="center"><b>Input</b></td>
    <td align="center"><b>Result</b></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/0812e30f-2587-4087-89fe-4cc3790cd519" width="220" /></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/9a0d660a-8d92-4b92-9949-ce25bbe138f6" width="220" /></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/f111a15d-f527-4ab0-bf04-a2150ae555e8" width="220" /></td>
  </tr>
</table>

</div>

---

## ✨ ฟีเจอร์

- 💰 ป้อนราคารถยนต์เป็นบาท
- 📊 เลือกเปอร์เซ็นต์เงินดาวน์ (5% – 35%)
- 📅 เลือกระยะเวลาผ่อน (24 – 84 งวด)
- 📈 ป้อนอัตราดอกเบี้ยต่อปี (% per year)
- 🧮 คำนวณค่างวดต่อเดือนแบบ **Flat Rate** (อัตราดอกเบี้ยคงที่)
- 📋 แสดงสรุป: ราคารถ / เงินดาวน์ / ยอดจัด / ดอกเบี้ยรวม / ยอดผ่อนรวม
- 🎨 UI ภาษาไทยใช้ฟอนต์ **Kanit** อ่านง่ายสบายตา

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Expo](https://expo.dev) ~54.0 |
| Language | TypeScript ~5.9 |
| UI | React Native 0.81 / React 19 |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction) (file-based) |
| Font | [@expo-google-fonts/kanit](https://github.com/expo/google-fonts) |

---

## 🚀 เริ่มต้นใช้งาน

### 1. ติดตั้ง dependencies

```bash
npm install
```

### 2. รันแอปด้วย Expo

```bash
npx expo start
```

จากนั้นเลือกช่องทางที่ต้องการ:

- 📱 **Expo Go** — สแกน QR Code บนมือถือ
- 🤖 **Android Emulator** — กด `a`
- 🍎 **iOS Simulator** — กด `i`
- 🌐 **Web** — กด `w`

---

## 📁 โครงสร้างโปรเจกต์

```
rn-smart-auto-loan-v2-app/
├── app/
│   ├── _layout.tsx      # โหลดฟอนต์ + Stack Navigator
│   ├── index.tsx        # หน้า Splash Screen
│   ├── input.tsx        # หน้าฟอร์มป้อนข้อมูล
│   └── result.tsx       # หน้าแสดงผลการคำนวณ
├── assets/
│   └── images/          # รูปภาพและไอคอนทั้งหมด
├── app.json             # คอนฟิก Expo
├── package.json
└── tsconfig.json
```

---

## 🧮 สูตรการคำนวณ

แอปนี้ใช้สูตรดอกเบี้ยคงที่ (Flat Rate) ซึ่งเป็นรูปแบบสินเชื่อรถยนต์ทั่วไปในประเทศไทย

```
เงินดาวน์      = ราคารถ × (เปอร์เซ็นต์ดาวน์ ÷ 100)
ยอดจัด         = ราคารถ − เงินดาวน์
ดอกเบี้ยรวม    = ยอดจัด × (ดอกเบี้ย% ÷ 100) × (จำนวนงวด ÷ 12)
ยอดผ่อนรวม    = ยอดจัด + ดอกเบี้ยรวม
ค่างวด/เดือน   = ยอดผ่อนรวม ÷ จำนวนงวด
```

### 📌 ตัวอย่างการคำนวณ

| รายการ | ค่า |
| --- | ---: |
| ราคารถ | 850,000 บาท |
| เงินดาวน์ | 20% (170,000 บาท) |
| ระยะเวลาผ่อน | 48 งวด |
| ดอกเบี้ย | 2.59% ต่อปี |
| **ค่างวด/เดือน** | **≈ 15,634.67 บาท** |

---

## 👤 ผู้พัฒนา

**Chanathip Chueycherm**
รหัสนักศึกษา: `6852D10005`

---

## 📄 License

โปรเจกต์นี้จัดทำขึ้นเพื่อการศึกษา
