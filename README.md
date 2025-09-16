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
npm install @ai-enhanced/chat-widget
```

```javascript
import '@ai-enhanced/chat-widget';
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

## Browser Support

- Chrome 63+
- Firefox 63+
- Safari 13+
- Edge 79+

## License

MIT License - see [LICENSE](LICENSE) file.

---

**Note**: This is a distribution repository. Source code is maintained separately.