import { test, expect } from '../fixtures/mainPage';
import { MainPage } from '../models/MainPage';

test.describe('тесты главной страницы', () => {
  test('Проверка отображения элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });
  test('Проверка названия элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибутов href элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });
  test('Проверка переключения лайтмода', async ({ mainPage }) => {
    await test.step('Нажатие на иконку переключенеия лайтмода', async () => {
      await mainPage.clickSwitchLightIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });
  test(`Проверка стилей со светлой темой`, async ({ mainPage }) => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMod();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMod();
    });
  });
  test(`Проверка стилей с темной темой`, async ({ mainPage }) => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMod();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMod();
    });
  });
});
