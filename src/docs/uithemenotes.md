# **UI Theme Design Documentation**

### **Database Services Website**

This document defines the **visual identity**, **layout structure**, and **interactive elements** to maintain a consistent and professional design across all pages.

---

## **1. Color Palette**

| **Color**      | **Hex Code**              | **Usage**                                                   |
| -------------- | ------------------------- | ----------------------------------------------------------- |
| **Primary**    | `#1B3A57` (Deep Blue)     | Headings, brand elements, backgrounds (hero, about).        |
| **Secondary**  | `#5E3A9A` (Royal Purple)  | Accent elements, section backgrounds, interactive elements. |
| **Accent**     | `#FFD700` (Gold)          | CTA buttons, highlights, important icons.                   |
| **Background** | `#121212` (Charcoal Gray) | Section backgrounds, footer, testimonials.                  |
| **Text**       | `#EAEAEA` (White/Silver)  | Default text color for body and subheadings.                |

### **Hover States**

- **Accent Hover:** Lighter gold `#ffdf4d`
- **Secondary Hover:** Lighter purple `#7144b2`
- **Primary Hover:** Lighter blue `#264b6c`

---

## **2. Typography & Font Guidelines**

### **Font Families**

- **Sans-serif:** `Roobert`, `Inter`, `ui-sans-serif`, `system-ui` (For all general text).
- **Monospace:** `Inconsolata`, `ui-monospace`, `SFMono-Regular` (For code and data-related elements).

### **Font Sizes & Heading Hierarchy**

| **Element**     | **Class**                | **Size**    | **Usage**                                   |
| --------------- | ------------------------ | ----------- | ------------------------------------------- |
| **H1**          | `text-5xl` to `text-6xl` | 3rem - 4rem | Large headlines (Hero, major sections).     |
| **H2**          | `text-4xl`               | 2.25rem     | Section headings.                           |
| **H3**          | `text-3xl`               | 1.875rem    | Sub-headings.                               |
| **H4**          | `text-2xl`               | 1.5rem      | Minor headings (e.g., service card titles). |
| **Body Text**   | `text-base` to `text-lg` | 16px - 18px | General readability.                        |
| **CTA Buttons** | `text-lg`                | 18px        | Call-to-action buttons.                     |

### **Text Spacing**

- **Line Height:**
  - Headings: `leading-tight`
  - Body text: `leading-relaxed`
- **Letter Spacing:**
  - Default: `tracking-normal`
  - For emphasis on headings: `tracking-wide`

---

## **3. Spacing & Layout**

### **Global Spacing**

- **Use Tailwind's spacing scale** (`4 = 1rem`, `6 = 1.5rem`, etc.).
- **Maintain consistent padding and margins** for all sections.

### **Specific Layout Guidelines**

| **Section**      | **Padding**                      | **Margin**  | **Alignment**                              |
| ---------------- | -------------------------------- | ----------- | ------------------------------------------ |
| **Hero Section** | `p-8` (mobile), `p-16` (desktop) | `mt-4 mb-6` | Centered, full-screen height.              |
| **Headings**     | `mb-4` (H1/H2), `mb-2` (H3/H4)   | -           | Left-aligned or centered based on section. |
| **Paragraphs**   | `mb-4` to `mb-8`                 | -           | Wide spacing for readability.              |
| **Buttons**      | `py-3 px-6`                      | `mt-6`      | Rounded with sufficient whitespace.        |
| **Cards**        | `gap-6` between grid items       | -           | Equal spacing between elements.            |

---

## **4. Component-Specific Guidelines**

### **Hero Section**

✅ **Background:** Dark blue gradient with a subtle digital pattern (`bg-cover bg-center`).  
✅ **Overlay (if needed):** Subtle dark overlay (`bg-opacity-50`) for text contrast.  
✅ **Headline:** Gold (`text-accent`), bold, large serif font.  
✅ **Subtext:** White (`text-textLight`), clean, informative.  
✅ **CTA Button:**

- **Primary CTA:** Gold with black text (`bg-accent text-primary`).
- **Hover:** Subtle lightening (`hover:bg-accent-hover`).

---

### **About Section**

✅ **Background:** Royal Purple (`bg-secondary`) with blended Primary Blue (`bg-primary`).  
✅ **Graphics:** Gold-accented icons & minimalist UI design.  
✅ **Content:** Brief company introduction with a modern, trusted aesthetic.

---

### **Services Section**

✅ **Layout:** 3-4 card grid with hover effects (`hover:bg-purple-hover` or `hover:bg-accent-hover`).  
✅ **Example Cards:**

- **Data Migration:** "Seamless transition without downtime."
- **Cloud Database Solutions:** "Flexible & scalable solutions."
- **Database Security:** "Your data, fortified with industry-leading encryption."  
  ✅ **Typography:** Titles in gold (`text-accent`), body text in white (`text-textLight`).

---

### **Testimonials / Case Studies**

✅ **Background:** Charcoal Gray (`bg-darkBg`) for contrast.  
✅ **Text:** White with gold highlights (`text-textLight text-accent`).  
✅ **Hover Effect:** Floating effect (`hover:scale-105 transition-transform`).

---

### **Contact & Inquiry Section**

✅ **Form Background:** Deep Blue / Purple gradient.  
✅ **Input Fields:** White fields (`bg-light-bg text-primary`).  
✅ **CTA Button:** Gold & black (`bg-accent text-darkBg`).  
✅ **Hover State:** Darker gold (`hover:bg-accent-hover`).

---

## **5. Navbar & Top Bar**

### **Navbar Design**

✅ **Navigation Links:** White (`text-textLight`), consistent padding.  
✅ **Hover Effect:** Soft glow transition.  
✅ **Dropdowns:**

- Background: Matches navbar for consistency.
- Spacing: Sufficient padding & rounded edges.  
  ✅ **Appointment Button:** Gold button (`bg-accent`) with hover lightening.

### **Top Bar for External Links**

✅ **Position:** **Fixed, top-right**, blending into the navbar while standing out.  
✅ **Background:** **Semi-transparent gradient or matching navbar** for seamless integration.  
✅ **Icons (WhatsApp & LinkedIn):**

- **Icon Size:** `lg` (`text-light-bg`).
- **Arrow Icon:** Positioned **45° up**, transitions to **→** when hovered.  
  ✅ **Hover Effect:**

```jsx
<a
  href="https://api.whatsapp.com/send?phone=+44%2079122%2004910%20&text=Hello"
  className="flex items-center space-x-2 group"
>
  <FontAwesomeIcon icon={faWhatsapp} className="text-light-bg" />
  <FontAwesomeIcon
    icon={faArrowUp}
    className="transition-transform rotate-45 group-hover:rotate-90 duration-200 text-light-bg opacity-70"
  />
</a>
```

✅ **Avoid Overlapping:** Positioned with enough margin to not interfere with the navbar.

---

## **6. Interactive & Animated Features**

### **Hover Effects**

✅ **Cards & Buttons:**

- Glow effect (`hover:shadow-lg`).
- Smooth transitions (`transition duration-300`).

### **Animations**

✅ **Floating Data Streams:**

- Subtle background animation (`animation: fadeIn`).
- Used in hero and case studies sections.  
  ✅ **Cursor Interactivity:**
- Slight **gold glow** following the cursor.

---

## **Final Notes & Best Practices**

✅ **Accessibility:** High contrast, readable fonts, ARIA labels.  
✅ **Performance:** Optimized images, minimal animation overhead.  
✅ **Testing:** Mobile responsiveness, cross-browser testing.
