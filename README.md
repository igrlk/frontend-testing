# Frontend Testing Examples

A practical demonstration of different testing approaches for frontend applications hooked up to a CI/CD pipeline.

## 🧪 Testing Stack & Files

This project implements a comprehensive testing strategy using:

- **Unit Tests** - [Vitest](https://vitest.dev/)
  - *unit* - [formatNumber](src/utils/formatNumber.ts)
  - *test* - [formatNumber.test.ts](src/utils/formatNumber.test.ts)

- **Component Tests** - [Storybook](https://storybook.js.org/)
  - *component* - [Form](src/components/Form.tsx)
  - *story with a test* - [Form.stories.tsx](src/components/Form.stories.tsx)

- **End-to-End Tests** - [Playwright](https://playwright.dev/)
  - *playwright docs test* - [app.e2e.ts](e2e/playwright-docs.spec.ts)
  - *todo app test* - [app.e2e.ts](e2e/todo-app.spec.ts)

## 🚀 CI/CD

The project uses GitHub Actions to automatically run all test suites on pull requests.


## 📝 License

This project is open source and available under the [MIT License](LICENSE).
