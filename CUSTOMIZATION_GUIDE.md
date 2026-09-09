# VoltEdge Innovation Community — Web Customization & Management Manual

This guide explains how to customize, update, and manage the VoltEdge Innovation Community website directly inside **GitHub** without needing any local software, terminals, or command-line tools.

---

## Table of Contents
1. [Editing Directly on GitHub (Web Workflow)](#1-editing-directly-on-github-web-workflow)
2. [How to Add or Edit Projects](#2-how-to-add-or-edit-projects)
3. [How to Add or Edit Teams in Teams & Achievements](#3-how-to-add-or-edit-teams-in-teams--achievements)
4. [How to Add, Remove, or Update Executive Board Members](#4-how-to-add-remove-or-update-executive-board-members)
5. [How to Edit Division Descriptions & Purpose](#5-how-to-edit-division-descriptions--purpose)
6. [How to Update Community Policies](#6-how-to-update-community-policies)
7. [Membership Form Submissions & Dedicated Admin Website Architecture](#7-membership-form-submissions--dedicated-admin-website-architecture)

---

## 1. Editing Directly on GitHub (Web Workflow)

You can update this website in 3 simple steps from your phone, tablet, or browser:

```
+-------------------------------------------------------------------------+
|                        GITHUB WEB EDIT WORKFLOW                         |
+-------------------------------------------------------------------------+
| 1. Open your repository on GitHub.com                                   |
| 2. Press the `.` (dot) key on your keyboard to open the Web Editor      |
|    (OR navigate to the file and click the ✏️ Pencil icon)               |
| 3. Make your changes in the file                                        |
| 4. Click "Commit changes..." -> Select "Commit directly to main branch" |
| 5. Cloudflare Pages automatically rebuilds and publishes in ~60 seconds!|
+-------------------------------------------------------------------------+
```

---

## 2. How to Add or Edit Projects

### File to Edit:
👉 `src/data/seedData.ts` (around line 98)

All projects displayed on the **Projects page** (`/projects`) are defined in the `INITIAL_PROJECTS` array inside `src/data/seedData.ts`.

### Project Data Structure:
Each project has the following fields:

| Field | Type | Description | Example |
|---|---|---|---|
| `id` | String | Unique project identifier | `'proj-005'` |
| `title` | String | Project Title | `'Autonomous Solar Tracker'` |
| `division` | String | Division Track | `'Robotics & Engineering'` or `'Computing & Technology'` |
| `status` | String | Current Status | `'Active Build'`, `'In Progress'`, `'Prototyping'`, `'In Incubation'` |
| `problemStatement` | String | Real-world problem being solved | `'Solar panels lose 30% efficiency when stationary.'` |
| `solution` | String | What the squad is building | `'Dual-axis servo tracker aligning panel with sunlight.'` |
| `techStack` | Array | Technologies and tools used | `['Arduino', 'LDR Sensors', 'Fusion 360', 'C++']` |
| `members` | Array | Student member names | `['Omer Ruknuddin', 'Ahmed Irfan Akrami']` |
| `repositoryUrl` | String | GitHub repository link | `'https://github.com/voltedgeinnovationcommunity/solar-tracker'` |
| `liveUrl` | String (Optional) | Live demo website link | `'https://voltedge-demo.pages.dev'` |

### Copy-Paste Template to Add a New Project:
Add this block inside the `export const INITIAL_PROJECTS = [` array:

```typescript
  {
    id: 'proj-005',
    title: 'Your Project Title Here',
    division: 'Robotics & Engineering',
    status: 'In Incubation',
    problemStatement: 'Explain the real-world problem or bottleneck your team wants to solve.',
    solution: 'Explain the prototype, software tool, or hardware mechanism your squad is building.',
    techStack: ['Python', 'Arduino', 'OpenCV'],
    members: ['Student Name 1', 'Student Name 2', 'Student Name 3'],
    repositoryUrl: 'https://github.com/voltedgeinnovationcommunity/your-repo-name',
    liveUrl: 'https://optional-demo-link.pages.dev'
  },
```

---

## 3. How to Add or Edit Teams in Teams & Achievements

### File to Edit:
👉 `src/pages/TeamsAchievements.tsx`

The **Teams & Achievements** page (`/teams`) strictly has two sections: **Active Teams** and **Achievements**.

### Step 1: Update Team 007 Member Names
At the top of `src/pages/TeamsAchievements.tsx` (lines 16–23):
```typescript
  const team007Members = [
    'Abdullah',
    'Mohiddin',
    'Omer',
    'Irfan',
    'Zaid',
    'Shamveel'
  ];
```
Simply edit or add names in this list.

### Step 2: Add a Second Active Team Card
Locate the `<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">` block in Section 1.
To add another team alongside Team 007, copy the Team 007 `<CardComponent>` block and adjust:
- Team Name (e.g., `Team VoltEdge 008`)
- Competition / Event (e.g., `State Tech Fest 2026`)
- Member names list
- Portfolio button link (`https://...`)

---

## 4. How to Add, Remove, or Update Executive Board Members

### File to Edit:
👉 `src/data/seedData.ts` (lines 1–44)

The Executive Board on the **About page** (`/about`) displays the coordination team. **All members are first-year students who are also learning**, holding organizational responsibility for their respective tracks. Zero photos or avatars are used.

### Member Data Structure:
```typescript
  {
    name: 'Full Student Name',
    role: 'Founder & Director of [Division]',
    desc: 'First-year student directing [track responsibilities]...',
    division: 'Robotics & Engineering', // or 'Computing & Technology', 'Events & Workshops', 'Operations & Community'
    linkedin: 'https://linkedin.com/in/username'
  },
```

### Current Leadership Roster:
- **Abdullah Saami Sada**: `Founder & Director of Operations & Community`
- **Mohiddin Ahmed Motiya**: `Founder & Director of Events & Workshops`
- **Omer Ruknuddin**: `Founder & Director of Computing & Technology`
- **Ahmed Irfan Akrami**: `Founder & Director of Robotics & Engineering`
- **Mohammed Zaid Fareed**: `Founder & Assistant Lead – Robotics, Engineering & Events` *(Assisting in both Robotics & Engineering and Events & Workshops)*
- **Shamveel Bukhari Khateeb**: `Founder & Lead – Media & Documentation`

To change or add a member, edit the `CORE_LEADERSHIP_TEAM` array in `seedData.ts`.

---

## 5. How to Edit Division Descriptions & Purpose

### Files to Edit:
- **Home Page**: `src/pages/Home.tsx` (around lines 60–85)
- **Community Page**: `src/pages/Community.tsx` (around lines 15–45)

Each track has a title, focus, and status:
```typescript
  {
    id: 'robotics',
    title: 'Robotics Engineering',
    focus: 'Connect with like-minded peers interested in robotics and hardware systems. Form squads to build wherever you want, collaborating through our community with future plans for dedicated community maker spaces.',
    status: 'Active Track'
  }
```

---

## 6. How to Update Community Policies

### File to Edit:
👉 `src/pages/PrivacyPolicy.tsx`

All community policies are located on the dedicated `/privacy` page. You can directly edit the markdown-like content blocks:
1. **Information Privacy**: Student data security and non-commercial storage.
2. **Community Participation Terms**: Student membership expectations and voluntary squad work.
3. **Code of Conduct**: Respectful communication, peer assistance, and non-discrimination.
4. **Anti-Leak Policy**: Protecting unpublished prototypes, code repositories, and squad discussions.
5. **Contact**: Official community email address.

---

## 7. Membership Form Submissions & Dedicated Admin Website Architecture

### Where does the application form submit currently?
On the public website (`/apply`):
1. When a student fills out the form and clicks **Submit**, the form validates all fields and checkpoint agreements.
2. It assigns a unique Reference ID (e.g., `VE-2026-4819`).
3. It currently stores the submission locally in the browser's `localStorage` (`voltedge_applications`) and displays a success confirmation.

---

### Can we create a completely separate website for Admins?
**YES, absolutely!** In modern software architecture, keeping the **Public Community Website** and the **Admin Management Portal** as two separate websites is the recommended, industry-standard approach.

```
+---------------------------------------------------------------------------------------+
|                               SYSTEM ARCHITECTURE OVERVIEW                            |
+---------------------------------------------------------------------------------------+
|                                                                                       |
|   PUBLIC WEBSITE (voltedge.community)           SEPARATE ADMIN PORTAL (admin.voltedge)|
|   +------------------------------------+        +-----------------------------------+ |
|   | - Student visitors browse projects |        | - Password-protected login        | |
|   | - Read About & Teams info          |        | - View pending student applicants | |
|   | - Open Application Form (/apply)   |        | - One-Click [APPROVE] / [REJECT]  | |
|   +-----------------+------------------+        +-----------------+-----------------+ |
|                     |                                             |                   |
|                     | Submits Form Data                           | Fetches & Updates |
|                     v                                             v                   |
|           +-----------------------------------------------------------------+         |
|           |             FREE CLOUD DATABASE (Supabase or Cloudflare D1)      |         |
|           |   Tables: applications, members, squads, projects, teams        |         |
|           +---------------------------------+-------------------------------+         |
|                                             |                                         |
|                                             v On Approval                             |
|                           +-----------------------------------+                       |
|                           |      AUTOMATED EMAIL SERVICE      |                       |
|                           |  Dispatches Welcome Email with:   |                       |
|                           |  • Private WhatsApp Community Link|                       |
|                           |  • Private Discord Server Invite  |                       |
|                           +-----------------------------------+                       |
+---------------------------------------------------------------------------------------+
```

### Features of the Dedicated Admin Portal:
1. **Applicant Approval Pipeline**:
   - View pending applicants with their academic background, division choice, skills, and problem statements.
   - Click **Approve** $\rightarrow$ Automatically triggers an email sending them the private WhatsApp & Discord links.
   - Click **Reject** $\rightarrow$ Dispatches a polite status update.
2. **Member Roster Management**:
   - Search, filter, and view all active members.
   - Promote or demote member roles (e.g. *Member* $\rightarrow$ *Squad Lead* $\rightarrow$ *Division Coordinator*).
   - Track active projects each member is contributing to.
3. **Weekly Project & Team Manager**:
   - Add new projects with problem statements, solutions, tech stacks, and team members via a simple form (no code editing needed).
   - Real-time sync: when you hit "Publish Project" in the Admin Portal, it immediately appears on the public website!
4. **Completely Independent Security**:
   - The admin source code, database credentials, and member contact lists are isolated in a private repository, ensuring zero risk of credential leaks on the public website.

---
*VoltEdge Innovation Community — "Driven by Volts, Defined by Vision."*
