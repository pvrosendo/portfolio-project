.PHONY: install dev build preview test lint format check

install:
	pnpm install

ui:
	pnpm dlx shadcn@latest add $(filter-out $@,$(MAKECMDGOALS))
%:
	@:

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format

check:
	pnpm check