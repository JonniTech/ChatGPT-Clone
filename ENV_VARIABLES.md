# Environment Variables

## Current Setup

This project uses **Vite's built-in environment variable support** - no need for `dotenv` package!

### How It Works

Vite automatically loads environment variables from `.env` files:

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

### Usage

In your code, access environment variables using:

```typescript
const apiKey = import.meta.env.VITE_ZAI_API_KEY;
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
```

### Important Rules

1. **Prefix Required**: All environment variables MUST be prefixed with `VITE_` to be exposed to your code
   - ✅ `VITE_ZAI_API_KEY` - Accessible
   - ❌ `ZAI_API_KEY` - NOT accessible (for security)

2. **Never Commit Secrets**: Add `.env.local` to `.gitignore` for sensitive keys

3. **Current Variables** (from `.env`):
   ```env
   VITE_ZAI_API_KEY=c1d20903419742ab802fb53219a705f9.QjC97mC33um33Gim
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_Y2VydGFpbi1rb2RpYWstOTcuY2xlcmsuYWNjb3VudHMuZGV2JA
   ```

### TypeScript Support

For better TypeScript support, you can create `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ZAI_API_KEY: string
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

### Why Not dotenv?

- **Built-in**: Vite handles .env files natively
- **Smaller Bundle**: No extra dependency
- **Better DX**: Hot reload on .env changes
- **Type-safe**: Works with TypeScript out of the box

## Reference

- [Vite Env Variables Docs](https://vitejs.dev/guide/env-and-mode.html)
