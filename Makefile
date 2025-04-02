.PHONY: install dev build start lint

# Install dependencies
install:
	npm install

# Run the development server
dev:
	npm run dev

# Build the application for production
build:
	npm run build

# Start the production server
start:
	npm start

# Run linting
lint:
	npm run lint

# Clean up node_modules and build artifacts
clean:
	rm -rf node_modules
	rm -rf .next
	rm -rf out

# Help command
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make start    - Start production server"
	@echo "  make lint     - Run linting"
	@echo "  make clean    - Remove node_modules and build directories"