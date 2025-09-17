# AI Assistant Widget

Zero-code embeddable AI chat widget for any website. Add intelligent support with a single line of code.

## Quick Start

### CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/ai-enhanced-engineer/chat-widget-dist@latest/dist/assistant-widget.js"></script>
<assistant-widget client-id="your-client-id"></assistant-widget>
```

### npm
```bash
npm install @bot-brewers/chat-widget
```

```javascript
import '@bot-brewers/chat-widget';
```

## Configuration

```html
<assistant-widget
  client-id="your-client-id"
  title="Chat with us!"
  position="bottom-right"
  accent-color="#6366f1">
</assistant-widget>
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `client-id` | string | **required** | Your unique client ID |
| `title` | string | "AI Assistant" | Widget header title |
| `position` | string | "bottom-right" | Widget position: `bottom-right`, `bottom-left` |
| `accent-color` | string | "#6366f1" | Primary widget color |

## For Maintainers: Manual Release

To manually publish a new version:

1. Go to the [Actions tab](https://github.com/ai-enhanced-engineer/chat-widget-dist/actions)
2. Select "Publish Release" workflow
3. Click "Run workflow"
4. Fill in the required inputs:
   - **Version**: The version to publish (e.g., "1.0.0")
   - **Widget URL**: Direct download URL for the widget file from the main repository release
   - **Release notes**: Optional description of the release
5. Click "Run workflow" to start the release process

The workflow will:
- Download the widget file
- Publish to npm as `@bot-brewers/chat-widget`
- Create a GitHub release
- Update the package version

## Browser Support

- Chrome 63+
- Firefox 63+
- Safari 13+
- Edge 79+

## License

MIT License - see [LICENSE](LICENSE) file.

---

**Note**: This is a distribution repository. Source code is maintained separately.