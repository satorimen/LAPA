import { openDB } from 'idb';
import { initialData, type AppData } from './model';
const database=()=>openDB('lapa-prototype',1,{upgrade(db){db.createObjectStore('state');}});
let queue:Promise<unknown>=Promise.resolve();
export async function loadData():Promise<AppData>{const db=await database();const stored=await db.get('state','app');return stored?{...initialData,...stored}:initialData;}
export function saveData(data:AppData){queue=queue.catch(()=>{}).then(async()=>{const db=await database();await db.put('state',data,'app');});return queue;}
export const flushStorage=()=>queue;
export async function compressPhoto(file:File):Promise<string>{if(file.size>20*1024*1024)throw new Error('size');if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('type');const bitmap=await createImageBitmap(file,{imageOrientation:'from-image'});const ratio=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*ratio);canvas.height=Math.round(bitmap.height*ratio);const ctx=canvas.getContext('2d');if(!ctx)throw new Error('canvas');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();return canvas.toDataURL('image/jpeg',.82);}
