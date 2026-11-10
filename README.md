# Clicker Studio｜紓壓按鍵生成器

以 MX 機械鍵軸為基礎的 3D 列印模型生成器，介面使用繁體中文。

線上版本：https://clicker-studio-mx-1109.meako.chatgpt.site

## 功能

- 單鍵、雙鍵、2×2、1×4、方向鍵與自訂排列，共用底座隨排列成形。
- 傳統梯形立體、方形、圓形鍵帽，以及 2 mm 方形／圓形薄板。
- 逐鍵設定鍵帽與文字／圖案顏色，底座顏色獨立調整。
- 自訂文字與上傳圖片，匯出 STL 與含色彩資訊的 3MF。

## 本機使用

需安裝 Node.js 與 npm。於專案目錄執行：

```sh
npm ci
npm run build
npm test
python -m http.server 8000 --directory dist
```

開啟 http://localhost:8000。`dist/` 已包含建置好的網頁，可直接交由靜態網頁主機託管；開發時修改原始碼後請重新建置。

## 檔案

- `app.js`：互動介面、預覽與逐鍵設定。
- `model.cjs`：模型幾何、鍵帽與底座。
- `exporter.js`：STL 與 3MF 匯出。
- `verify.cjs`：模型幾何檢查。
- `dist/`：可部署的 HTML、CSS 與 JavaScript。

## 列印注意事項

3MF 包含物件色彩資訊，匯入 Bambu Studio 後仍需指定印表機及 AMS 耗材；STL 不含顏色。鍵軸接合鬆緊需依耗材與列印誤差試印調整。本版已檢查模型網格，尚未完成實體裝配驗證。
