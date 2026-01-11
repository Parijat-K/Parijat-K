---
name: "PhoneGap SMS Scheduler Plugin"
tech:
  - Apache Cordova
  - PhoneGap Build
  - Android SDK
  - Java
  - de.appplant Local Notification
tags:
  - Background Services
  - SMS Automation
  - Cordova Plugin
  - Mobile Architecture
  - Freelance
description: >-
  Delivered a Cordova/PhoneGap plugin that schedules SMS delivery through a
  wake-efficient background listener, allowing clients to queue and cancel
  messages with native precision while staying compatible with PhoneGap Build.
featured: false
---

## Engagement Overview

I was hired as a freelance engineer to rescue a PhoneGap Build application that
needed reliable, battery-friendly scheduled SMS delivery without exposing the
client's proprietary codebase. After reviewing their PhoneGap prototype and
requirements documents, I proposed shipping a dedicated plugin that would bridge
JavaScript commands with Android's native scheduling stack.

## Solution Highlights

- Built a Cordova plugin that wraps the `de.appplant.cordova.plugin.local-notification`
  AlarmManager workflow, replacing notification payloads with SMS payloads.
- Authored a lightweight Java background receiver that interprets IDs coming
  from JavaScript, dispatches SMS jobs via `SmsManager`, and exposes
  `schedule`, `cancel`, and `getScheduledIds` commands resembling
  `setTimeout`/`clearTimeout` semantics.
- Ensured the plugin stayed compatible with PhoneGap Build by packaging all
  native assets and documenting the exact `config.xml` entries and required
  Android permissions.
- Provided runnable demo HTML/JS showing how to queue multiple messages, cancel
  them by ID, and keep the service dormant until AlarmManager wakes it—avoiding
  constant background execution and preserving battery life.

## Impact

- Enabled the client to keep their existing PhoneGap Build workflow while
  gaining deterministic scheduled SMS delivery on Android.
- Reduced failure risk for penalty-sensitive reminders by surfacing explicit IDs
  for each job and offering cancellation hooks.
- Earned repeat freelance work and a performance bonus after thorough testing
  confirmed the plugin's reliability.
