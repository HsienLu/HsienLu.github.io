---
title: Antigravity Agent Skills
date: 2025-01-01 12:00:00
tags: [AI, Skills]
cover: /images/default-cover.png
categories: AI
---

# Antigravity Agent Skills

## 1. 概述 (Overview)

**Agent Skills** 的概念與 Prompt 類似，但其核心在於將指令**元件化**並儲存為獨立文件。透過這種方式，Agent 可以在需要時讀取並使用這些技能來完成任務，從而避免在對話中消耗過多的 Token。

### 應用範例

- **技術規範**：若平時固定使用 React 18 開發，可撰寫一個 Skill 說明前端開發時應遵循的語法與慣例，避免每次在 Prompt 中重複說明。
- **代碼品質 (Clean Code)**：定義 Clean Code 原則為一項 Skill，讓 Agent 在生成程式碼時自動遵守相關規範。

---

## 2. 安裝與存放路徑 (Install)

Antigravity 支援兩種類型的 Skills，請根據適用範圍存放在對應路徑：

| 類型                     | 存放路徑                                              | 說明                                               |
| :----------------------- | :---------------------------------------------------- | :------------------------------------------------- |
| **專案專用 (Workspace)** | `<workspace-root>/.agent/skills/<skill-folder>/`      | 適用於特定專案的工作流，如團隊部署流程或測試規範。 |
| **全域通用 (Global)**    | `~/.gemini/antigravity/global_skills/<skill-folder>/` | 適用於所有專案，用於個人公用程式或通用工具。       |

---

## 3. 資料夾結構 (Folder Structure)

在 Skill 資料夾中，`SKILL.md` 是唯一必要的檔案，其餘資源可視需求添加：

- `.agent/skills/my-skill/`
  - `SKILL.md`：**主要指令說明（必要）**。
  - `scripts/`：輔助腳本（選填）。
  - `examples/`：參考實作範例（選填）。
  - `resources/`：範本或其他資產（選填）。

---

## 4. 檔案結構 (File Structure)

每個 Skill 都必須在 `SKILL.md` 頂部包含 **YAML Frontmatter** 設定區塊：

### Frontmatter 欄位說明

- **name** (選填)：Skill 的唯一識別碼（建議使用小寫並以連字號 `-` 連結）。若未提供，預設為資料夾名稱。
- **description** (**必要**)：清晰描述此 Skill 的功能與使用時機。Agent 會參考此描述來決定是否調用該 Skill。

### SKILL.md 內容範本

```markdown
---
name: my-skill
description: 協助處理特定任務。當你需要執行 X 或 Y 時使用。
---

# My Skill (技能名稱)

在此處填寫給 Agent 的詳細指示。

## 使用時機 (When to use this skill)

- 當需要...時使用。
- 這對於...非常有幫助。

## 如何使用 (How to use it)

提供步驟引導、慣例以及 Agent 應遵循的模式。
```
