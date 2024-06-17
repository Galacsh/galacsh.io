# Galacsh's Blog

This is my personal blog that was made with my [blog-template](https://github.com/Galacsh/blog-template).

# How to use this?

To my future myself:

```bash
# Clone with submodule
git clone --recursive git@github.com:Galacsh/galacsh.io.git

cd galacsh.io

# Link assets directory
ln -s "$(pwd)/posts/assets" "public/assets"

# Install dependencies
npm install

# Create environment variables file
cat << EOF > .env.production.local
# Name of the website
NEXT_PUBLIC_APP_NAME="Galacsh"

# Short name of the website
NEXT_PUBLIC_APP_SHORT_NAME="Galacsh"

# Description of the website
NEXT_PUBLIC_APP_DESCRIPTION="Galacsh's personal blog."

# URL of the website (e.g. https://galacsh.github.io)
NEXT_PUBLIC_BASE_URL="https://galacsh.io"

# About the author
NEXT_PUBLIC_ABOUT=">>>> Fill this <<<<"

# Copyright range (e.g. 2023-2024 or 2024)
NEXT_PUBLIC_COPYRIGHT_RANGE="2024"

# Google ANALYTICS
NEXT_PUBLIC_GOOGLE_ANALYTICS="G-0HR866Y002"

# Google Site Verification
NEXT_PUBLIC_VERIFICATION_GOOGLE="cAdoZS7D10cMvqzHphlKCRYBFngAkTHiWSf1pQDNrb8"

# Naver Site Verification
NEXT_PUBLIC_VERIFICATION_NAVER="f2b89b689efac87b9c27e08958ec1df1be546d94"
EOF

# Test
npm start

# Deploy
npm run deploy
```

