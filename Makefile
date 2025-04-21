.PHONY: serve open clean help

# Serve the HTML file locally
serve:
	python3 -m http.server 3000

# Open the HTML file in browser
open:
	open site.html

# Open and serve the site
view: open serve

# Clean up unnecessary files (be careful with this command)
clean:
	@echo "This will remove all files except site.html, vercel.json, Makefile, and README.md"
	@echo "Press Ctrl+C to cancel or Enter to continue"
	@read
	@find . -type f -not -path "./.git/*" -not -name "site.html" -not -name "vercel.json" -not -name "Makefile" -not -name "README.md" -not -name ".gitignore" -delete
	@find . -type d -not -path "./.git*" -not -path "." -not -path "./public" | sort -r | xargs rm -rf

# Help command
help:
	@echo "Available commands:"
	@echo "  make serve   - Start a local server at http://localhost:3000"
	@echo "  make open    - Open site.html in your default browser"
	@echo "  make view    - Open the site and serve it locally"
	@echo "  make clean   - Remove unnecessary files (use with caution)"