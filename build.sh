#!/usr/bin/env bash

# stupid build script that just combines each flavour with _base.yml in ./src/

FLAVOURS=(
"latte"
"frappe"
"macchiato"
"mocha"
)

for FLAVOUR in "${FLAVOURS[@]}"; do
	cat "src/$FLAVOUR.yml" "src/_base.yml" > "dist/$FLAVOUR.yml"
done
