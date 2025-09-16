# Public Repository Setup Plan for chat-widget-dist

This document contains the complete setup instructions for the already-created empty public repository `ai-enhanced-engineer/chat-widget-dist`.

## Prerequisites
- Empty public repository `ai-enhanced-engineer/chat-widget-dist` already exists
- You have access to create files and configure settings in the repository
- npm account ready for token generation (if not already done)

## Step 1: Create Directory Structure

Create the following directories in the repository root:

```
mkdir -p .github/workflows
mkdir -p dist
```

## Step 2: Create Root Files

### 2.1 Create `package.json`

Create file: `package.json`

```json
{
  "name": "@ai-enhanced/chat-widget",
  "version": "0.0.0-development",
  "description": "Embeddable AI Assistant Widget for websites - Zero-code integration",
  "main": "./dist/assistant-widget.js",
  "files": ["dist"],
  "keywords": [
    "ai",
    "chat",
    "widget",
    "customer-support",
    "chatbot",
    "assistant",
    "zero-code",
    "embeddable"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ai-enhanced-engineer/chat-widget-dist.git"
  },
  "homepage": "https://github.com/ai-enhanced-engineer/chat-widget-dist#readme",
  "bugs": {
    "url": "https://github.com/ai-enhanced-engineer/chat-widget-dist/issues"
  },
  "publishConfig": {
    "access": "public",
    "provenance": true
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 2.2 Create `README.md`

Create file: `README.md`

```markdown
# AI Assistant Widget - CDN Distribution

[![npm version](https://badge.fury.io/js/@ai-enhanced%2Fchat-widget.svg)](https://badge.fury.io/js/@ai-enhanced%2Fchat-widget)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/ai-enhanced-engineer/chat-widget-dist/badge)](https://www.jsdelivr.com/package/gh/ai-enhanced-engineer/chat-widget-dist)

Zero-code embeddable AI Assistant Widget for websites. Add intelligent chat support to any website with a single line of code.

## 🚀 Quick Start

### Method 1: CDN via GitHub (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js"></script>
<assistant-widget client-id="your-client-id"></assistant-widget>
```

### Method 2: CDN via npm
```html
<script src="https://cdn.jsdelivr.net/npm/@ai-enhanced/chat-widget@latest/dist/assistant-widget.js"></script>
<assistant-widget client-id="your-client-id"></assistant-widget>
```

### Method 3: npm Package
```bash
npm install @ai-enhanced/chat-widget
```

```javascript
import '@ai-enhanced/chat-widget/dist/assistant-widget.js';
```

## 📖 Configuration Options

```html
<assistant-widget
  client-id="your-client-id"
  title="Chat with us!"
  theme="modern"
  position="bottom-right"
  accent-color="#6366f1">
</assistant-widget>
```

### Available Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `client-id` | string | **required** | Your unique client identifier |
| `title` | string | "AI Assistant" | Widget title displayed in header |
| `theme` | string | "modern" | Theme: `modern`, `minimal`, `classic` |
| `position` | string | "bottom-right" | Position: `bottom-right`, `bottom-left` |
| `accent-color` | string | "#6366f1" | Primary color for the widget |

## 🌐 CDN Options

### Version Pinning Strategies

**Latest Version (Auto-updates)**
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js"></script>
```

**Major Version (Safe Updates)**
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@v1/dist/assistant-widget.js"></script>
```

**Exact Version (Locked)**
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.4.0/dist/assistant-widget.js"></script>
```

### Multi-CDN Fallback
```html
<script>
(function() {
    const CDN_ENDPOINTS = [
        'https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js',
        'https://cdn.jsdelivr.net/npm/@ai-enhanced/chat-widget@latest/dist/assistant-widget.js',
        'https://unpkg.com/@ai-enhanced/chat-widget@latest/dist/assistant-widget.js'
    ];

    function loadWidget(index = 0) {
        if (index >= CDN_ENDPOINTS.length) {
            console.error('All CDN endpoints failed');
            return;
        }

        const script = document.createElement('script');
        script.src = CDN_ENDPOINTS[index];
        script.onload = () => console.log(`Widget loaded from CDN ${index + 1}`);
        script.onerror = () => loadWidget(index + 1);
        document.head.appendChild(script);
    }

    loadWidget();
})();
</script>
```

## 🔧 Framework Integration

### React/Next.js
```jsx
import { useEffect } from 'react';

export default function ChatWidget({ clientId, theme = 'modern' }) {
  useEffect(() => {
    if (!customElements.get('assistant-widget')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js';
      document.head.appendChild(script);
    }
  }, []);

  return <assistant-widget client-id={clientId} theme={theme} />;
}
```

### Vue.js
```vue
<template>
  <assistant-widget :client-id="clientId" :theme="theme" />
</template>

<script>
export default {
  props: ['clientId', 'theme'],
  mounted() {
    if (!customElements.get('assistant-widget')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js';
      document.head.appendChild(script);
    }
  }
}
</script>
```

### WordPress
```php
// functions.php
function enqueue_ai_chat_widget() {
    wp_enqueue_script(
        'ai-chat-widget',
        'https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_ai_chat_widget');

function add_ai_chat_widget() {
    echo '<assistant-widget client-id="your-client-id" theme="modern"></assistant-widget>';
}
add_action('wp_footer', 'add_ai_chat_widget');
```

## ⚡ Performance

- **Bundle Size**: ~50KB gzipped
- **Load Time**: <200ms (P95)
- **Memory Usage**: <50MB per instance
- **Global CDN**: Sub-100ms response times worldwide

## 🔒 Security & Privacy

- **Zero Data Collection**: No personal information stored
- **Anonymous Sessions**: Only visitor ID and chat messages
- **Input Sanitization**: XSS prevention and content validation
- **Shadow DOM Isolation**: Complete style and script encapsulation

## 📊 Browser Support

- Chrome 63+
- Firefox 63+
- Safari 13+
- Edge 79+
- Mobile browsers with Web Components support

## 🆘 Troubleshooting

### Widget Not Loading
1. Check browser console for errors
2. Verify client-id is correct
3. Test with different CDN endpoint
4. Ensure Web Components support

### Connection Issues
1. Check network connectivity
2. Verify backend services are running
3. Try refreshing the page
4. Contact support if issues persist

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](https://github.com/ai-enhanced-engineer/chat-widget-dist)
- [Issues](https://github.com/ai-enhanced-engineer/chat-widget-dist/issues)
- [npm Package](https://www.npmjs.com/package/@ai-enhanced/chat-widget)

---

**Note**: This is a distribution repository containing only compiled assets. Source code is maintained separately.
```

### 2.3 Create `LICENSE`

Create file: `LICENSE`

```
MIT License

Copyright (c) 2024 AI Enhanced Engineer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 2.4 Create `.gitignore`

Create file: `.gitignore`

```
# Dependencies
node_modules/

# Logs
*.log
npm-debug.log*

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE files
.idea/
.vscode/
*.swp
*.swo

# Build artifacts are tracked in this repo
# dist/ is intentionally NOT ignored
```

## Step 3: Create GitHub Actions Workflow

### 3.1 Create Publishing Workflow

Create file: `.github/workflows/publish.yml`

```yaml
name: Publish to CDN

on:
  repository_dispatch:
    types: [publish-release]

permissions:
  contents: write
  packages: write
  id-token: write

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - name: Download artifacts from private repo
        run: |
          mkdir -p dist

          # Download widget JavaScript
          if [[ ! -z "${{ github.event.client_payload.artifacts.widget_js }}" ]]; then
            echo "Downloading widget.js from: ${{ github.event.client_payload.artifacts.widget_js }}"
            curl -L -o dist/assistant-widget.js \
              -H "Authorization: Bearer ${{ secrets.CROSS_REPO_DOWNLOAD_TOKEN }}" \
              "${{ github.event.client_payload.artifacts.widget_js }}"
          fi

          # Download CSS if provided
          if [[ ! -z "${{ github.event.client_payload.artifacts.style_css }}" ]]; then
            echo "Downloading style.css from: ${{ github.event.client_payload.artifacts.style_css }}"
            curl -L -o dist/style.css \
              -H "Authorization: Bearer ${{ secrets.CROSS_REPO_DOWNLOAD_TOKEN }}" \
              "${{ github.event.client_payload.artifacts.style_css }}"
          fi

          # Verify downloads
          ls -la dist/

          # Check file sizes
          if [[ -f "dist/assistant-widget.js" ]]; then
            size=$(stat -f%z "dist/assistant-widget.js" 2>/dev/null || stat -c%s "dist/assistant-widget.js" 2>/dev/null)
            echo "Widget JS size: $size bytes"
            if [[ $size -lt 1000 ]]; then
              echo "Error: Widget JS file too small, likely download failed"
              exit 1
            fi
          else
            echo "Error: Widget JS file not found"
            exit 1
          fi

      - name: Update package.json with version
        run: |
          VERSION="${{ github.event.client_payload.version }}"
          echo "Updating package.json to version: $VERSION"
          npm version $VERSION --no-git-tag-version

      - name: Publish to npm
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: |
          echo "Publishing @ai-enhanced/chat-widget@${{ github.event.client_payload.version }} to npm"
          npm publish --provenance --access public

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v1
        with:
          tag_name: v${{ github.event.client_payload.version }}
          name: Release v${{ github.event.client_payload.version }}
          body: |
            ## 🚀 Release v${{ github.event.client_payload.version }}

            ${{ github.event.client_payload.notes }}

            ### 📦 CDN Access

            **jsDelivr (GitHub):**
            ```html
            <script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@${{ github.event.client_payload.version }}/dist/assistant-widget.js"></script>
            ```

            **jsDelivr (npm):**
            ```html
            <script src="https://cdn.jsdelivr.net/npm/@ai-enhanced/chat-widget@${{ github.event.client_payload.version }}/dist/assistant-widget.js"></script>
            ```

            **unpkg:**
            ```html
            <script src="https://unpkg.com/@ai-enhanced/chat-widget@${{ github.event.client_payload.version }}/dist/assistant-widget.js"></script>
            ```
          files: |
            dist/assistant-widget.js
            dist/style.css
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Commit version update
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add package.json
          git commit -m "chore: update version to ${{ github.event.client_payload.version }} [skip ci]"
          git push
```

## Step 4: Create Initial dist Directory Files

### 4.1 Create dist/.gitkeep

Create file: `dist/.gitkeep`

```
# This directory holds the distribution files
# Files are populated by the GitHub Actions workflow when a new release is published
```

## Step 5: Configure Repository Secrets

After creating all files, configure the following secrets in the repository settings:

### 5.1 NPM_TOKEN

1. Generate npm automation token:
```bash
npm login
npm token create --type=automation
```

2. Add to repository:
- Go to: Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `NPM_TOKEN`
- Value: [Your npm automation token]

### 5.2 CROSS_REPO_DOWNLOAD_TOKEN (Optional)

If the private repository releases require authentication:

1. Generate a Personal Access Token:
- Go to: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- Click "Generate new token"
- Permissions needed: `repo` (full control)

2. Add to repository:
- Go to: Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `CROSS_REPO_DOWNLOAD_TOKEN`
- Value: [Your personal access token]

## Step 6: Initialize Git and Push

After creating all files locally, initialize and push to the repository:

```bash
# Initialize git if not already done
git init

# Add remote
git remote add origin https://github.com/ai-enhanced-engineer/chat-widget-dist.git

# Add all files
git add .

# Commit
git commit -m "feat: Initial repository setup for CDN distribution"

# Push to main branch
git push -u origin main
```

## Step 7: Verification

### 7.1 Check Repository Structure
Verify the following structure exists:
```
chat-widget-dist/
├── .github/
│   └── workflows/
│       └── publish.yml
├── dist/
│   └── .gitkeep
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

### 7.2 Verify Workflow
1. Go to Actions tab in GitHub
2. You should see "Publish to CDN" workflow
3. It will be triggered by repository_dispatch events from the private repository

### 7.3 Test npm Package Name Availability
```bash
npm view @ai-enhanced/chat-widget
# Should return "npm ERR! 404 Not Found" if package name is available
```

## Step 8: Expected CDN URLs (After First Release)

Once the first release is published, the widget will be accessible at:

### Primary (jsDelivr via GitHub)
- Latest: `https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js`
- Version: `https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.0.0/dist/assistant-widget.js`

### Secondary (jsDelivr via npm)
- Latest: `https://cdn.jsdelivr.net/npm/@ai-enhanced/chat-widget@latest/dist/assistant-widget.js`
- Version: `https://cdn.jsdelivr.net/npm/@ai-enhanced/chat-widget@1.0.0/dist/assistant-widget.js`

### Fallback (unpkg)
- Latest: `https://unpkg.com/@ai-enhanced/chat-widget@latest/dist/assistant-widget.js`
- Version: `https://unpkg.com/@ai-enhanced/chat-widget@1.0.0/dist/assistant-widget.js`

## Troubleshooting

### Common Issues

**Issue: Workflow not triggering**
- Verify repository_dispatch event is being sent from private repository
- Check Actions tab for any failed workflow runs

**Issue: npm publish fails**
- Verify NPM_TOKEN is correctly set
- Check if package name is available on npm
- Ensure package.json has valid format

**Issue: Artifact download fails**
- Check if artifacts are accessible from private repository
- Verify CROSS_REPO_DOWNLOAD_TOKEN has correct permissions
- Ensure artifact URLs are correct in the dispatch payload

**Issue: CDN not serving files**
- Wait 5-10 minutes for CDN propagation
- Check if GitHub release was created successfully
- Verify files exist in the dist/ directory

---

This completes the setup for the public distribution repository. The repository is now ready to receive releases from the private repository and distribute them via multiple CDN endpoints.