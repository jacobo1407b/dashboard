import { BrowserWindow, session, dialog } from 'electron';
import * as dev from 'electron-is-dev';
import * as path from 'path'
import * as chalck from 'chalk';
import User from './models/User';
import About from './models/About'
import Banner from './models/Banner';
import Carousel from './models/Carousel';
import Feature from './models/Features';
import Message from './models/Message';
import News from './models/News';
import Social from './models/Social';
import { connect } from 'mongoose';
import { idAbout, idBanner } from './utils/constantes';
import { encryptPassword, matchPassword } from './utils/hash';
import { Cookie, IABout, AboutRequest, IBanner, BannerRequest, ICarousel } from './types'
import { CarouselReq, IFeature, IMsg, MsgReq, NewReq, INews, ISocial, socialReq } from './types'

export default class Main {
    private static url: string = "";

    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = null;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({
            width: 1270,
            height: 690,
            minWidth: 1200,
            minHeight: 680,/*
            maxWidth: 2048,
            maxHeight: 900,*/
            //resizable: false,
            title: "Dashboard",
            titleBarStyle: "hiddenInset",
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
            },
        });
        Main.mainWindow.setMenu(null);
        Main.mainWindow.setMenuBarVisibility(false);
        Main.mainWindow
            .loadURL(
                dev
                    ? "http://localhost:3000"
                    : `file://${path.join(__dirname, "../index.html")}`
            );
        if (dev) {
            Main.mainWindow.webContents.openDevTools();
        }
        Main.mainWindow.on('closed', Main.onClose);
        Main.connectDB();
    }
    // electron inicio

    private static async connectDB(): Promise<void> {
        connect(Main.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(chalck.blue('INFO: ') + chalck.green('Datebase is connect successfully'))
        }).catch(err => {
            console.log(chalck.red('ERROR: ') + err)
            dialog.showMessageBox({ message: "No tienes una conexion a internet ", type: "error" })
        })

    }
    //db connect
    public static async updatePassword(id: string, password: string): Promise<boolean> {
        try {
            const newpassword = await encryptPassword(password);
            await User.findByIdAndUpdate(id, {
                password: newpassword
            });
            return true
        } catch (error) {
            return false
        }
    }

    public static async updateEmail(id:string, email:string){
       return await User.findByIdAndUpdate(id,{email},{new:true})
    }
    private static async registerUser() {
        const newPassword = await encryptPassword("1234567890");
        const user = new User({
            email: "test@test.com",
            password: newPassword,
            username: "undefined"
        });
        var result = await user.save();
        console.log(result)
    }

    //login
    private static async matchUser(hash: string, password: string): Promise<boolean> {
        const check = await matchPassword(password, hash);
        return check
    }

    public static async login(email: string, password: string): Promise<any> {
        const user = await User.findOne({ email }, { __v: 0 });
        if (user) {
            const check = await Main.matchUser(user.password, password);
            if (check) {
                const cookie: Cookie = {
                    url: "http://localhost",
                    name: "session",
                    value: JSON.stringify(user)
                }
                session.defaultSession.cookies.set(cookie)
                return {
                    login: true,
                    msg: "",
                    user
                }
            } else {
                return {
                    login: false,
                    msg: "Password is not correct",
                    user: null
                }
            }
        } else {
            return {
                login: false,
                msg: "Email is not correct",
                user: null
            }
        }
    }

    public static async isAuthenticate(): Promise<any> {
        const sess = await session.defaultSession.cookies.get({ name: "session" })
        if (sess[0]) {
            return {
                user: JSON.parse(sess[0].value),
                autenticate: true
            }
        } else {
            return {
                user: null,
                autenticate: false
            }
        }
    }
    public static async updateUsername(username: string, id: string): Promise<any> {
        return await User.findByIdAndUpdate(id, { username: username }, { new: true })
    }
    public static async logout(): Promise<void> {
        session.defaultSession.cookies.remove('http://localhost', "session")
    }
    //login
    /**
     * about
     */
    public static async getAbout(): Promise<IABout> {
        const about: IABout = await About.findById(idAbout, { __v: 0 });
        return about
    }

    public static async editAbout(request: AboutRequest): Promise<IABout> {
        const update = await About.findByIdAndUpdate(idAbout, request, { new: true });
        return update
    }
    /**
     * Banner
     */

    public static async getBanner(): Promise<IBanner> {
        const banner: IBanner = await Banner.findById(idBanner, { __v: 0 })
        return banner
    }

    public static async editBanner(req: BannerRequest): Promise<IBanner> {
        const update = await Banner.findByIdAndUpdate(idBanner, req, { new: true });
        return update
    }
    /**
     * Carousel
     */
    public static async getCarousel(): Promise<ICarousel[]> {
        const carousels: ICarousel[] = await Carousel.find();
        return carousels
    }

    public static async editCarousel(id: string, data: CarouselReq): Promise<ICarousel> {
        const update: ICarousel = await Carousel.findByIdAndUpdate(id, data, { new: true });
        return update;
    }

    public static async deleteCarousel(id: string): Promise<boolean> {
        await Carousel.findByIdAndDelete(id);
        return true;
    }

    public static async postCarousel(data: CarouselReq): Promise<ICarousel> {
        const addCarousel = new Carousel(data);
        const carousel: ICarousel = await addCarousel.save();
        return carousel;
    }

    /*Feature
     */

    public static async getFeature(): Promise<IFeature[]> {
        const features: IFeature[] = await Feature.find();
        return features
    }

    public static async editFeature(id: string, data): Promise<IFeature> {
        const fetur: IFeature = await Feature.findByIdAndUpdate(id, data, { new: true });
        return fetur;
    }

    /**
     * MSG
     */

    public static async getMsg(): Promise<IMsg[]> {
        const mesags: IMsg[] = await Message.find();
        return mesags
    };
    public static async countMsg(): Promise<number> {
        const filter: IMsg[] = await Message.find({ read: false })
        const count: number = filter.length;
        return count
    }

    public static async deleteMsg(id: string): Promise<boolean> {
        await Message.findByIdAndDelete(id);
        return true
    };

    public static async reading(data: MsgReq, id: string): Promise<IMsg> {
        const msg: IMsg = await Message.findByIdAndUpdate(id, data, { new: true })
        return msg
    }
    /*News
     */

    public static async getNews(): Promise<INews[]> {
        const news: INews[] = await News.find();
        return news
    }

    public static async postNew(data: NewReq): Promise<INews> {
        const ne = new News(data);
        const add: INews = await ne.save();
        return add
    }

    public static async editNew(data: NewReq, id: string): Promise<INews> {
        const updateNew: INews = await News.findByIdAndUpdate(id, data, { new: true });
        return updateNew
    }

    public static async deleteNew(id: string): Promise<boolean> {
        await News.findByIdAndDelete(id);
        return true;
    }
    /**
     * social
     */

    public static async getSocial(): Promise<ISocial[]> {
        const getall: ISocial[] = await Social.find();
        return getall;
    }

    public static async editSocial(id: string, data: socialReq): Promise<ISocial> {
        const social = await Social.findById(id, data, { new: true });
        return social
    }

    static async main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 

        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);

    }
}