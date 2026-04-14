#!/usr/bin/env python3
import re

with open('/Users/dorn/WebstormProjects/SSD-create/styles.css', 'r') as f:
    content = f.read()

# Count occurrences before
count_before = content.count('text-orientation: mixed')
print(f"Found {count_before} instances of 'text-orientation: mixed'")

# Replace all occurrences of text-orientation: mixed with sideways-right
content = content.replace('text-orientation: mixed !important;', 'text-orientation: sideways-right !important;')

# Count occurrences after
count_after = content.count('text-orientation: mixed')
print(f"After replacement: {count_after} instances remain")

with open('/Users/dorn/WebstormProjects/SSD-create/styles.css', 'w') as f:
    f.write(content)

print("✅ Fixed text-orientation in all .location-based-text rules")

