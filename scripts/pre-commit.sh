#!/usr/bin/env bash

echo "▶️ Running ESLint..."
npm run lint
ESLINT_EXIT_CODE=$?

echo "▶️ Running Prettier check..."
npm run format:check
PRETTIER_EXIT_CODE=$?

if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $PRETTIER_EXIT_CODE -ne 0 ]; then
  echo "❌ Pre-commit checks failed. Fix issues before committing."
  exit 1
fi

echo "✅ Pre-commit checks passed."
exit 0
