#!/usr/bin/env -S deno run --allow-write=dist
import { stringify } from "https://deno.land/std@0.210.0/yaml/stringify.ts";
import {
  ColorName,
  flavorEntries,
} from "https://deno.land/x/catppuccin@v1.0.1/mod.ts";

flavorEntries.map(([flavorName, flavor]) => {
  const p = flavor.colorEntries.reduce((acc, [name, color]) => {
    acc[name] = color.hex;
    return acc;
  }, {} as Record<ColorName, string>);

  const theme = {
    // general K9s styles
    body: {
      fgColor: p.text,
      bgColor: p.base,
      logoColor: p.mauve,
    },
    // Command prompt styles
    prompt: {
      fgColor: p.text,
      bgColor: p.mantle,
      suggestColor: p.blue,
    },
    // ClusterInfoView styles.
    info: {
      fgColor: p.peach,
      sectionColor: p.text,
    },
    // Dialog styles.
    dialog: {
      fgColor: p.yellow,
      bgColor: p.overlay2,
      buttonFgColor: p.base,
      buttonBgColor: p.overlay1,
      buttonFocusFgColor: p.base,
      buttonFocusBgColor: p.pink,
      labelFgColor: p.rosewater,
      fieldFgColor: p.text,
    },
    frame: {
      // Borders styles.
      border: {
        fgColor: p.mauve,
        focusColor: p.lavender,
      },
      // MenuView attributes and styles
      menu: {
        fgColor: p.text,
        keyColor: p.blue,
        // Used for favorite namespaces
        numKeyColor: p.maroon,
      },
      // CrumbView attributes for history navigation.
      crumbs: {
        fgColor: p.base,
        bgColor: p.maroon,
        activeColor: p.flamingo,
      },
      // Resource status and update styles
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
      // Border title styles.
      title: {
        fgColor: p.teal,
        bgColor: p.base,
        highlightColor: p.pink,
        counterColor: p.yellow,
        filterColor: p.green,
      },
    },
    views: {
      // Charts skins...
      charts: {
        bgColor: p.base,
        chartBgColor: p.base,
        dialBgColor: p.base,
        defaultDialColors: [
          p.green,
          p.red,
        ],
        defaultChartColors: [
          p.green,
          p.red,
        ],
        resourceColors: {
          cpu: [
            p.mauve,
            p.blue,
          ],
          mem: [
            p.yellow,
            p.peach,
          ],
        },
      },
      // TableView attributes.
      table: {
        fgColor: p.text, // Doesn't Work
        bgColor: p.base,
        cursorFgColor: p.surface0, // Doesn't Work
        cursorBgColor: p.surface1, // should be rosewater
        markColor: p.rosewater, // Doesn't Work
        // Header row styles.
        header: {
          fgColor: p.yellow,
          bgColor: p.base,
          sorterColor: p.sky,
        },
      },
      // Xray view attributes.
      xray: {
        fgColor: p.text, //Doesn't Work
        bgColor: p.base,
        // Need to set this to a dark color since color text can't be changed
        // Ideally this would be rosewater
        cursorColor: p.surface1,
        cursorTextColor: p.base, //Doesn't Work
        graphicColor: p.pink,
      },
      // YAML info styles.
      yaml: {
        keyColor: p.blue,
        colonColor: p.subtext0,
        valueColor: p.text,
      },
      // Logs styles.
      logs: {
        fgColor: p.text,
        bgColor: p.base,
        indicator: {
          fgColor: p.lavender,
          bgColor: p.base,
        },
      },
    },
    help: {
      fgColor: p.text,
      bgColor: p.base,
      sectionColor: p.green,
      keyColor: p.blue,
      numKeyColor: p.maroon,
    },
  };

  const yaml = stringify({
    k9s: theme,
  });

  Deno.writeTextFileSync(`./dist/${flavorName}.yml`, yaml);
});
