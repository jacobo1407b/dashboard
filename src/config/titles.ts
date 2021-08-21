import {getTitlesApp} from 'api';

const basetitle: string = `${getTitlesApp()} - `; //cambiar por nombre de la aplicacion
export const homePage: string = `${basetitle}dashboard`;
export const userPage: string = `${basetitle}configuración de usuario`;
export const mesgPage: string = `${basetitle}bandeja de mensajes`;
export const gallPage: string = `${basetitle}gallery del sitio web`;
export const newsPage: string = `${basetitle}sección de noticias`;
export const banePage: string = `${basetitle}configuración de página principal`;
export const abouPage: string = `${basetitle}configuración información`;
export const featPage: string = `${basetitle}configuración de servicios`;
export const caroPage: string = `${basetitle}configurar carrusel de página principal`;
export const logiPage: string = `${basetitle}Ingreso`;