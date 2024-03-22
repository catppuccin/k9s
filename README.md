<h3 align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
  Catppuccin for <a href="https://github.com/derailed/k9s">k9s</a>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
  <a href="https://github.com/catppuccin/k9s/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/k9s?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
  <a href="https://github.com/catppuccin/k9s/issues"><img src="https://img.shields.io/github/issues/catppuccin/k9s?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
  <a href="https://github.com/catppuccin/k9s/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/k9s?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="./assets/preview.webp"/>
</p>

## Previews

<details>
  <summary>🌻 Latte</summary>
  <img src="assets/latte.webp"/>
</details>
<details>
  <summary>🪴 Frappé</summary>
  <img src="assets/frappe.webp"/>
</details>
<details>
  <summary>🌺 Macchiato</summary>
  <img src="assets/macchiato.webp"/>
</details>
<details>
  <summary>🌿 Mocha</summary>
  <img src="assets/mocha.webp"/>
</details>

## Usage


1. Download the theme files & copy them into your k9s skins directory.

### Linux
```bash
OUT="${XDG_CONFIG_HOME:-$HOME/.config}/k9s/skins"
mkdir -p "$OUT"
curl -L https://github.com/catppuccin/k9s/archive/main.tar.gz | tar xz -C "$OUT" --strip-components=2 k9s-main/dist
```

### macOS
```bash
OUT="${XDG_CONFIG_HOME:-$HOME/Library/Application Support}/k9s/skins"
mkdir -p "$OUT"
curl -L https://github.com/catppuccin/k9s/archive/main.tar.gz | tar xz -C "$OUT" --strip-components=2 k9s-main/dist
```

2. Edit your `config.yaml` so that it sets `k9s.ui.skin` to a Catppuccin flavor.
```yaml
k9s:
  ui:
    skin: catppuccin-mocha
    # ...or another flavor:
    # skin: catppuccin-macchiato
    # skin: catppuccin-frappe
    # skin: catppuccin-latte

    # ...or the transparent variants:
    # skin: catppuccin-mocha-transparent
    # skin: catppuccin-macchiato-transparent
    # skin: catppuccin-frappe-transparent
    # skin: catppuccin-latte-transparent
```

## 💝 Thanks to

- [Jeff Davis](https://github.com/JefeDavis)
- [winston](https://github.com/nekowinston)

&nbsp;

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
  Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
  <a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
