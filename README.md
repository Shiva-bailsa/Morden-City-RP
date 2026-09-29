# GameHub - GitHub Pages

## Upload to GitHub

1. Create a new GitHub repository, for example `gamehub`.
2. Upload `index.html` and `admin.html` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save. GitHub will give you the Pages URL.

## Important limitation

This version is a static GitHub Pages site. The Admin Panel uses browser `localStorage`.
That means games added through the Admin Panel are only visible in that same browser/device.

For a real public admin system where one admin can add a game and everyone sees it,
you need a backend/database (for example Firebase, Supabase, or another server/API).

## Files

- `index.html` - public GameHub
- `admin.html` - testing admin panel

No build step is required.
