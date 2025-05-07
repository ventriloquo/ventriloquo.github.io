---
layout: default.vto
title: "Conversor"
---
<head>
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/assets/css/styles.css" />
  <script src="/assets/js/walls/convert.js" defer></script>
</head>

<div id="loading-screen">
  <p>Loading...</p>
</div>
<br/>
<div id="main-container">
  <div id="drop-zone" ondragover="handleImage();">
    <input type="file" id="image-loader" name="image-loader"  accept=".jpg, .jpeg, .png, .webp" />
  </div>
  <br/>
  <canvas id="image-canvas"></canvas>

  <div style="display:flex; justify-content: center;">
    <button class="important-button"  id ="download-button" type="button" onclick="downloadImage()">Baixar</button>
    <button class="important-button" id ="reset-button" type="button" onclick="reset()">Restaurar</button>
  </div>

  <div style="text-align: center">
    <h3 id = "loading">Selecione um tema</h3>
    <div id="palette" style="height:1em;">
    </div>
    <hr/>
    <button type="button" onclick="changeTheme('Brogrammer')">Brogrammer</button>
    <button type="button" onclick="changeTheme('Onedark')">Onedark</button>
    <button type="button" onclick="changeTheme('Gruvbox')">Gruvbox</button>
    <button type="button" onclick="changeTheme('Nord')">Nord</button>
    <button type="button" onclick="changeTheme('Solarized')">Solarized</button>
    <button type="button" onclick="changeTheme('Catppuccin')">Catppuccin</button>
    <button type="button" onclick="changeTheme('Dracula')">Dracula</button>
    <button type="button" onclick="changeTheme('Everforest')">Everforest</button>
  <br/>

  <hr/>
    <button class="important-button" id="convert" type="button" onclick="initialize()">Converter</button>
  </div>
</div>
<!--
    Original Code From:
    https://github.com/NotNeelPatel/WallpaperThemeConverter
-->
