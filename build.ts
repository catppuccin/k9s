#!/usr/bin/env -S deno run --allow-write=./dist
import { stringify } from "https://deno.land/std@0.210.0/yaml/stringify.ts";
import {
  type Colors,
  flavorEntries,
} from "https://deno.land/x/catppuccin@v1.0.3/mod.ts";

const theme = (p: Colors<string>, transparent = false) => {
  const t = (c: string) => transparent ? "default" : c;

  const definitions = {
    body: {
      fgColor: p.text,
      bgColor: t(p.base),
      logoColor: p.mauve,
    },
    prompt: {
      fgColor: p.text,
      bgColor: t(p.mantle),
      suggestColor: p.blue,
    },
    help: {
      fgColor: p.text,
      bgColor: t(p.base),
      sectionColor: p.green,
      keyColor: p.blue,
      numKeyColor: p.maroon,
    },
    frame: {
      // border title styles
      title: {
        fgColor: p.teal,
        bgColor: t(p.base),
        highlightColor: p.pink,
        counterColor: p.yellow,
        filterColor: p.green,
      },
      // borders styles
      border: {
        fgColor: p.mauve,
        focusColor: p.lavender,
      },
      // MenuView attributes and styles
      menu: {
        fgColor: p.text,
        keyColor: p.blue,
        // used for favorite namespaces
        numKeyColor: p.maroon,
      },
      // history navigation
      crumbs: {
        fgColor: p.base,
        bgColor: t(p.maroon),
        activeColor: p.flamingo,
      },
      // resource status and update styles
      status: {
        newColor: p.blue,
        modifyColor: p.lavender,
        addColor: p.green,
        pendingColor: p.peach,
        errorColor: p.red,
        highlightColor: p.sky,
        killColor: p.mauve,
        completedColor: p.overlay0,
      },
    },
    // ClusterInfoView styles
    info: {
      fgColor: p.peach,
      sectionColor: p.text,
    },
    views: {
      table: {
        fgColor: p.text,
        bgColor: t(p.base),
        cursorFgColor: p.surface0,
        cursorBgColor: p.surface1,
        markColor: p.rosewater,
        header: {
          fgColor: p.yellow,
          bgColor: t(p.base),
          sorterColor: p.sky,
        },
      },
      xray: {
        fgColor: p.text,
        bgColor: t(p.base),
        cursorColor: p.surface1,
        cursorTextColor: p.base,
        graphicColor: p.pink,
      },
      charts: {
        bgColor: t(p.base),
        chartBgColor: t(p.base),
        dialBgColor: t(p.base),
        defaultDialColors: [p.green, p.red],
        defaultChartColors: [p.green, p.red],
        resourceColors: {
          cpu: [p.mauve, p.blue],
          mem: [p.yellow, p.peach],
        },
      },
      yaml: {
        keyColor: p.blue,
        valueColor: p.text,
        colonColor: p.subtext0,
      },
      logs: {
        fgColor: p.text,
        bgColor: t(p.base),
        indicator: {
          fgColor: p.lavender,
          bgColor: t(p.base),
          toggleOnColor: p.green,
          toggleOffColor: p.subtext0,
        },
      },
    },
    dialog: {
      fgColor: p.yellow,
      bgColor: t(p.overlay2),
      buttonFgColor: p.base,
      buttonBgColor: t(p.overlay1),
      buttonFocusFgColor: p.base,
      buttonFocusBgColor: p.pink,
      labelFgColor: p.rosewater,
      fieldFgColor: p.text,
    },
  };

  return stringify({ k9s: definitions });
};

for (const [flavorName, flavor] of flavorEntries) {
  const palette = {} as Colors<string>;
  for (const [name, color] of flavor.colorEntries) {
    palette[name] = color.hex;
  }

  Deno.writeTextFileSync(
    `./dist/catppuccin-${flavorName}.yaml`,
    theme(palette, false),
  );
  Deno.writeTextFileSync(
    `./dist/catppuccin-${flavorName}-transparent.yaml`,
    theme(palette, true),
  );
}
