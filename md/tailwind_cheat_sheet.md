# 🌀 Tailwind CSS Cheat Sheet

## 📘 What is Tailwind?

Tailwind is a **utility-first CSS framework**. Instead of writing custom CSS, you build layouts using **predefined classes** directly in your HTML.

Think: Lego bricks 🧱 — each class adds a specific style.

---

## ✅ Basic Usage

```html
<button class="bg-blue-600 text-white font-medium py-2 px-4 rounded">
  Save
</button>
```

| Class             | What it does                          |
|------------------|----------------------------------------|
| `bg-blue-600`     | Background color                      |
| `text-white`      | Text color                            |
| `font-medium`     | Font weight                           |
| `py-2 px-4`       | Padding Y (top & bottom), X (sides)   |
| `rounded`         | Rounded corners                       |

---

## 📏 Spacing Examples

```html
<div class="p-4 m-2">Padding 4, Margin 2</div>
```

| Prefix | Means      | Example     |
|--------|------------|-------------|
| `p-4`  | padding     | all sides   |
| `px-2` | padding-x   | left/right  |
| `mt-8` | margin-top  | top         |

---

## 🎨 Colors & Typography

```html
<h1 class="text-3xl font-bold text-gray-800">Hello</h1>
```

| Class           | What it does                     |
|----------------|----------------------------------|
| `text-3xl`      | Font size                        |
| `font-bold`     | Font weight                      |
| `text-gray-800` | Font color                       |

---

## 📱 Responsive Design

Use **prefixes** like `sm:`, `md:`, `lg:`, `xl:`:

```html
<div class="text-sm md:text-lg">Resize me</div>
```

| Prefix | Applies at screen width ≥ |
|--------|----------------------------|
| `sm:`  | 640px                      |
| `md:`  | 768px                      |
| `lg:`  | 1024px                     |
| `xl:`  | 1280px                     |

---

## 📊 Tailwind vs Bootstrap

| Feature           | Tailwind                           | Bootstrap                           |
|------------------|------------------------------------|-------------------------------------|
| 💡 Philosophy     | Utility-first                      | Component-based                     |
| 🎨 Custom Design | Fully flexible                     | Preset styles                       |
| 🧠 Learning Curve | Steeper                            | Easier at first                     |
| 📦 File Size      | Tiny (with purge)                  | Larger                              |
| 🧱 JS Dependency  | None                               | Needed for modals, dropdowns, etc.  |
| 🔄 Responsive     | Utility prefixes (`md:` etc.)      | Grid classes (`col-md-6` etc.)      |

**In short:**  
Tailwind = freedom & flexibility  
Bootstrap = speed & structure  

---

## 🛠️ Pro Tips

- Use [Tailwind Play](https://play.tailwindcss.com) to experiment online
- Combine with React, Flask, or plain HTML
- Use tools like `Preline`, `Flowbite`, or `DaisyUI` for ready-made components
