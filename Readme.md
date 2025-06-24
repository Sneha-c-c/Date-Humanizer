# 📦 date-humanizer

[![NPM version](https://img.shields.io/npm/v/@snehacc/date-humanizer.svg)](https://www.npmjs.com/package/@snehacc/date-humanizer)
[![Downloads](https://img.shields.io/npm/dm/@snehacc/date-humanizer.svg)](https://www.npmjs.com/package/@snehacc/date-humanizer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

> 🗓️ A lightweight npm package to convert dates into human-readable format  
> Example: `2025-06-24` → `24 June 2025`

---

## 📦 Installation

```bash
npm install @snehacc/date-humanizer

## Usage

const { toHumanDate } = require('@snehacc/date-humanizer');

console.log(toHumanDate('2025-06-24')); // Output: 24 June 2025

# Function

toHumanDate(dateInput: string | Date): string


