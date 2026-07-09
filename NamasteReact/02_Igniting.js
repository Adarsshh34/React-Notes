npm  - to install packages
npx - to execute packages

# In package.json
^ -> install minor version like 2.8.3 to 2.8.4
~ -> install majore version like 2.8 to 3.0

# In Package-lock.json
maintain exact version of dependency
while package.json only maintain approximate version

import React from "react" -> "react" is package install in node modules and React comes from there

when we do create-react-app it uses webpacks behind scene

parcel, vite, webpacks -> all are bundlers 

# Parcel 
- Dev Build
- Local Server
- HMR - hot module replacement (reflect changes in browser just by saving file)
- File Watching Alogorithm - written in c++
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support old browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod builds

# Browserlist
