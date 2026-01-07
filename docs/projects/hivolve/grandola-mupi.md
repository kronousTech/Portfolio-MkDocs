# Grandola Mupi
<div class="tags">
  <span class="md-tag">Unity</span>
  <span class="md-tag">C#</span>
  <span class="md-tag">Game</span>
  <span class="md-tag">Android</span>
  <span class="md-tag">iOS</span>
</div>

## Role
Unity Developer

## Client
Grândola's Municipal Chamber.

## Overview
This project was designed for an interactive Mupi, featuring small, engaging, and educational games centered around Melides pottery. The primary aim was to offer a compact yet enjoyable experience, providing users with both entertainment and insights into the world of Melides pottery.

## Challenges
The trickiest aspect of this project was putting together the Word Search game, especially since it was my first attempt at creating one.

## Solutions
To develop the Word Search game, I devised a system for placing words on a grid, allowing certain letter squares to serve multiple words. 
First, I randomly determined the direction of the word—horizontal or vertical. Once the direction was set, I selected a starting position by calculating a range within the grid size, considering the word's letter count. Moving through the squares, I checked if each square was either empty or contained the same letter as the one being placed.

If placing the word wasn't feasible, I sought a new position. In cases of repeated unsuccessful attempts, I reset the temporary grid board and restarted the generation process. To minimize the need for restarts, I ensured the grid was slightly larger than the largest word, this made the need for restarts very rare. After placing all the words, I filled the remaining empty squares with random letters and then displayed the grid on the screen.

## Media
<div class="slider">
  <button class="prev"><-</button>
  <img src="../../../content/projects/hivolve/grandola-mupi/Screenshot_5.png">
  <img src="../../../content/projects/hivolve/grandola-mupi/Screenshot_1.png">
  <img src="../../../content/projects/hivolve/grandola-mupi/Screenshot_2.png">
  <img src="../../../content/projects/hivolve/grandola-mupi/Screenshot_3.png">
  <button class="next">-></button>
  <div class="counter"></div>
</div>