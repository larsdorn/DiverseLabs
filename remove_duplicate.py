#!/usr/bin/env python3

with open('/Users/dorn/WebstormProjects/SSD-create/styles.css', 'r') as f:
    lines = f.readlines()

# Find the two LOCATION SECTION headers
location_section_lines = []
for i, line in enumerate(lines):
    if 'LOCATION SECTION' in line:
        location_section_lines.append(i)
        print(f"Found 'LOCATION SECTION' at line {i+1}")

# Find CONTACT SECTION after the second LOCATION SECTION
contact_section_line = None
for i in range(location_section_lines[-1], len(lines)):
    if 'CONTACT SECTION' in lines[i]:
        contact_section_line = i
        print(f"Found 'CONTACT SECTION' at line {i+1}")
        break

if len(location_section_lines) >= 2 and contact_section_line:
    print(f"Removing lines {location_section_lines[1]+1} to {contact_section_line}")
    # Remove the duplicate (second) location section, keep up to first location section, then add contact onwards
    new_lines = lines[:location_section_lines[1]+2] + lines[contact_section_line-2:]

    with open('/Users/dorn/WebstormProjects/SSD-create/styles.css', 'w') as f:
        f.writelines(new_lines)
    print("Removed duplicate LOCATION SECTION")
else:
    print("Could not find both location sections or contact section")

