import {test,expect} from '@playwright/test';
for(const width of [320,390,768,1440]){
 test(`responsive touch targets and legibility at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:844});await page.goto('./');
  await page.getByRole('button',{name:'RU',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Ваш номер телефона'})).toBeVisible();
  for(const button of await page.locator('.language-switch button,.header-inner>.icon-button').all()){
   const box=await button.boundingBox();expect(box!.width).toBeGreaterThanOrEqual(44);expect(box!.height).toBeGreaterThanOrEqual(44);
  }
  const phone=page.getByRole('textbox',{name:'Номер телефона',exact:true});expect(await phone.evaluate(e=>parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16);
  await phone.fill('0501234567');await page.getByRole('button',{name:'Продолжить',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Что случилось?'})).toBeVisible();
  await page.getByRole('textbox',{name:'Что случилось?'}).fill('Нужно повесить телевизор');
  const send=page.getByRole('button',{name:'Отправить',exact:true});await send.scrollIntoViewIfNeeded();expect((await send.boundingBox())!.height).toBeGreaterThanOrEqual(56);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.getByRole('button',{name:'HE',exact:true}).click();await expect(page.locator('html')).toHaveAttribute('dir','rtl');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 });
}
test('200 percent text remains usable and core actions stay reachable',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('./');await page.getByRole('button',{name:'RU',exact:true}).click();await page.getByRole('textbox',{name:'Номер телефона',exact:true}).fill('0501234567');await page.getByRole('button',{name:'Продолжить',exact:true}).click();
 await page.addStyleTag({content:'html{font-size:200% !important}'});
 const input=page.getByRole('textbox',{name:'Что случилось?'});expect(await input.evaluate(e=>parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(32);await input.fill('Течёт кран');const send=page.getByRole('button',{name:'Отправить',exact:true});await send.scrollIntoViewIfNeeded();await expect(send).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await send.click();await expect(page.getByRole('heading',{name:'Разберёмся вместе'})).toBeVisible();
});
