#!/usr/bin/env python3
"""Check that every SVG is well-formed XML and no tracked file exceeds 2 MB."""
import os, sys, subprocess
import xml.etree.ElementTree as ET

LIMIT = 2 * 1024 * 1024
files = subprocess.run(["git", "ls-files", "-z"], capture_output=True, check=True).stdout.decode().split("\0")
errors, svgs = [], 0
for f in filter(None, files):
    if not os.path.isfile(f):
        continue
    if os.path.getsize(f) > LIMIT:
        errors.append(f"{f}: {os.path.getsize(f)} bytes exceeds 2 MB")
    if f.lower().endswith(".svg"):
        svgs += 1
        try:
            ET.parse(f)
        except ET.ParseError as e:
            errors.append(f"{f}: invalid SVG/XML: {e}")
print(f"checked {len([x for x in files if x])} files, {svgs} SVGs")
for e in errors:
    print("ERROR", e)
sys.exit(1 if errors else 0)
