import os
import re

def fix_imports(directory):
    # Regex to capture import paths starting with ./ or ../
    # format: import ... from "path" or import ... from 'path'
    # Capture group 2 is the path.
    pattern = re.compile(r'(from\s+[\'"])((\.{1,2}\/)[^\'"]+)([\'"])')

    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules') # Don't traverse node_modules
        
        for file in files:
            if file.endswith('.ts'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                def replacer(match):
                    prefix = match.group(1)
                    path = match.group(2)
                    suffix = match.group(4)
                    
                    if not path.endswith('.js'):
                        return f'{prefix}{path}.js{suffix}'
                    return match.group(0)

                new_content = pattern.sub(replacer, content)
                
                if new_content != content:
                    print(f"Updating {filepath}")
                    with open(filepath, 'w') as f:
                        f.write(new_content)

if __name__ == "__main__":
    fix_imports('.')
