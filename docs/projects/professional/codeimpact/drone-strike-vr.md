---
tags:
  - Unity
  - C#
  - VR
  - Meta Quest
  - Android
  - Game
  - Optimization
---

# Drone Strike VR

**Role:** Unity Developer (sole developer)

## Overview
A VR base-defence strategy game for Oculus Quest. Players protect their main tower from waves of enemy drones while attacking the opponent's key infrastructure.

- **Economy:** an oil factory generates credits used to buy new assets. Credits carry over between levels.
- **Defence:** radar improves drone detection, air defence shoots down incoming threats, and handheld weapons let the player fight directly.
- **Offence:** precision-guided missiles and kamikaze drones target the enemy's radar, oil factory and air defence. Destroying them wins the level.
- **Progression:** each level adds complexity and new weapons, and leaderboards score players on remaining oil and base damage.

*The project was stopped before the end of production.*

## Challenge
I was the only developer on a project of this scale. With many moving units and simultaneous AI behaviours, performance problems built up quickly on the Quest's mobile hardware.

## What I Did
- Used Unity's **profiling tools** to find CPU bottlenecks, memory spikes and inefficient update loops.
- Reworked the offending systems, which improved both stability and overall frame rate on device.

## Media
### Project showcase
<video controls preload="metadata" width="100%">
  <source src="../../../../content/projects/codeimpact/drone-strike-vr/explanation.mp4" type="video/mp4">
</video>
