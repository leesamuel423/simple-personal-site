# Samuel Lee Personal Page

## Getting Started

### Using Make

This project includes a Makefile to simplify common commands:

```bash
# Install dependencies
make install

# Start development server
make dev

# Build for production
make build

# Start production server
make start

# Run linting
make lint
```

### Manual Commands

Alternatively, you can use npm directly:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The site content is managed through data files in the `/app` directory. To update content, modify the data in:

- `/app/data.ts` - Projects, work experience, education, blog posts, and contact info
- `/app/blog/` - Blog post content (MDX files)

