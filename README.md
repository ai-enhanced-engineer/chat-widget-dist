# AI Assistant Widget

Zero-code embeddable AI chat widget for any website. Add intelligent support with a single line of code.

## Quick Start

### CDN (Recommended)

**Production (version pinned):**
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.13.0/dist/assistant-widget.js"></script>
<assistant-widget client-id="your-client-id"></assistant-widget>
```

**Alternative CDN sources:**
```html
<!-- jsDelivr (npm) -->
<script src="https://cdn.jsdelivr.net/npm/@bot-brewers/chat-widget@1.13.0/dist/assistant-widget.js"></script>

<!-- unpkg (npm) -->
<script src="https://unpkg.com/@bot-brewers/chat-widget@1.13.0/dist/assistant-widget.js"></script>
```

> **Note:** Pin to a specific version (e.g., `@1.13.0`) to avoid breaking changes. Using `@latest` may point to untagged commits without widget files.

### npm
```bash
npm install @bot-brewers/chat-widget
```

```javascript
import '@bot-brewers/chat-widget';
```

## Configuration

### All Available Attributes

```html
<assistant-widget
  client-id="your-client-id"
  title="Chat with us!"
  theme="dark"
  initial-message="Hello! How can I help you today?"
  position="bottom-right"
  accent-color="#6366f1">
</assistant-widget>
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `client-id` | string | **required** | Your unique client identifier |
| `title` | string | "AI Assistant" | Widget header title |
| `theme` | string | "light" | Theme mode: `light` or `dark` |
| `initial-message` | string | - | Custom welcome message shown when widget opens |
| `position` | string | "bottom-right" | Widget placement: `bottom-right` or `bottom-left` |
| `accent-color` | string | "#6366f1" | Primary color for widget UI elements |
| `open` | boolean | false | Programmatically open/close the widget |

### Theme Support

The widget automatically adapts to your site's color scheme:
- **Explicit theme:** Set `theme="dark"` or `theme="light"`
- **System preference:** Omit `theme` to respect `prefers-color-scheme`
- **Override:** `data-theme="dark"` takes precedence

## Installation Examples

### Basic Installation
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to my site</h1>

    <!-- Add widget at end of body -->
    <script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.13.0/dist/assistant-widget.js"></script>
    <assistant-widget client-id="my-site"></assistant-widget>
</body>
</html>
```

### With Dark Theme
```html
<assistant-widget
  client-id="my-site"
  theme="dark"
  title="Support Chat"
  initial-message="Hi! How can we help you today?">
</assistant-widget>
```

### Multiple Pages with Different Messages
```html
<!-- Homepage -->
<assistant-widget
  client-id="my-site"
  initial-message="Welcome! I'm here to help you navigate our site.">
</assistant-widget>

<!-- Product page -->
<assistant-widget
  client-id="my-site"
  initial-message="Questions about this product? I'm here to help!">
</assistant-widget>

<!-- Support page -->
<assistant-widget
  client-id="my-site"
  initial-message="Let me help resolve your issue.">
</assistant-widget>
```

### Custom Styling
```html
<assistant-widget
  client-id="my-site"
  accent-color="#10b981"
  position="bottom-left">
</assistant-widget>
```

## Versions

### CDN Support by Version

| Version | CDN Support | Status | Notes |
|---------|-------------|--------|-------|
| v1.13.0 | ✅ Yes | Latest | Recommended for production |
| v1.12.0 | ✅ Yes | Stable | |
| v1.11.0 | ✅ Yes | Stable | |
| v1.10.0 | ✅ Yes | Stable | |
| v1.9.0 | ✅ Yes | Stable | |
| v1.8.0 | ✅ Yes | Stable | |
| v1.7.2 | ✅ Yes | Stable | First version with artifact-based publishing |
| v1.7.1 | ✅ Yes | Stable | CDN workflow fixed |
| v1.7.0 | ❌ No | Broken | Missing widget files in repository |
| v1.0.1 | ❌ No | Broken | Pre-CDN era |

### Choosing a Version

**For production:**
```html
<!-- Pin to specific version -->
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.13.0/dist/assistant-widget.js"></script>
```

**For development/testing:**
```html
<!-- Use npm @latest (may have caching delays) -->
<script src="https://cdn.jsdelivr.net/npm/@bot-brewers/chat-widget@latest/dist/assistant-widget.js"></script>
```

### Migration from v1.7.0

If you're using v1.7.0 and experiencing 404 errors:
1. Update CDN URL to `@1.13.0` or later
2. If using self-hosted files, migrate to CDN to get automatic updates

## Troubleshooting

### Widget Not Loading (404 Error)

**Symptom:** Browser console shows "Failed to load resource: 404"

**Cause:** Using a version without CDN support (v1.7.0 or earlier)

**Solution:**
```html
<!-- Change from -->
<script src="...@1.7.0/dist/assistant-widget.js"></script>

<!-- To -->
<script src="...@1.13.0/dist/assistant-widget.js"></script>
```

### Widget Not Visible

**Check these:**
1. Is `client-id` set correctly?
2. Is the script loading? (Check Network tab in DevTools)
3. Any console errors? (Check Console tab in DevTools)
4. Is the widget hidden by CSS? (Check z-index conflicts)

### Theme Not Applied

**Ensure:**
- Use `theme="dark"` or `theme="light"` (lowercase)
- Not `data-theme` (unless you want to override)
- Widget supports both automatic detection and manual theme setting

## For Maintainers

### Automated Release Process

Releases are automatically triggered when the main widget repository (`ai-assistant-widget`) publishes a new version:

1. Widget build workflow runs in `ai-assistant-widget`
2. Artifacts are uploaded (assistant-widget.js, style.css)
3. Publish workflow in this repo is triggered
4. Downloads artifacts from source repository
5. Commits files to `dist/` directory
6. Creates git tag (e.g., v1.13.0)
7. Publishes to npm as `@bot-brewers/chat-widget`
8. Creates GitHub release

### Manual Release (Emergency)

If automated release fails:

1. Go to [Actions tab](https://github.com/ai-enhanced-engineer/chat-widget-dist/actions)
2. Select "Publish Release" workflow
3. Click "Run workflow"
4. Fill in:
   - **Version**: Semantic version (e.g., "1.13.1")
   - **Source Repo**: `ai-enhanced-engineer/ai-assistant-widget`
   - **Run ID**: Build workflow run ID from source repo
   - **Artifact Name**: Name of the uploaded artifact (e.g., "widget-dist-1.13.1")
   - **Release Notes**: Changelog or description

### Verifying a Release

After publishing, verify:
```bash
# Check git tag has files
git ls-tree -r v1.13.0 dist/

# Should show:
# dist/.gitkeep
# dist/assistant-widget.js
# dist/style.css

# Test CDN URL
curl -I https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.13.0/dist/assistant-widget.js
# Should return: HTTP 200 OK

# Test npm
npm view @bot-brewers/chat-widget version
# Should return: 1.13.0
```

### CDN Cache Purging

jsDelivr caches are automatic, but you can manually purge:
- GitHub CDN: `https://purge.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@1.13.0/dist/assistant-widget.js`
- npm CDN: `https://purge.jsdelivr.net/npm/@bot-brewers/chat-widget@1.13.0/dist/assistant-widget.js`

## Browser Support

- Chrome 63+
- Firefox 63+
- Safari 13+
- Edge 79+

## License

MIT License - see [LICENSE](LICENSE) file.

---

**Note**: This is a distribution repository. Source code is maintained separately.