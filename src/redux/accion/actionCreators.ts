import * as actionTypes from '../acctionType';
import { IModal, ModalAccion, UserAccion, IUser, IFeature, FeatureAccion } from '../myTypes';
import { IBanner, BannerAccion, IABout, AboutAccion } from '../myTypes'
import { ICarousel, CarouselAccion, INews, NewsAccion,ISocial,SocialAccion} from '../myTypes'
import { IGallery, GalleryAccion, MsgAccion, IMsg, BandejaAccion } from '../myTypes'
export function openModal(modal: IModal): ModalAccion {
    const action: ModalAccion = {
        type: actionTypes.OPEN_MODAL,
        modal
    };

    return action;
};

export function userInitial(user: IUser): UserAccion {
    const action: UserAccion = {
        type: actionTypes.USER_INITIAL,
        user
    }
    return action
}

export function bannerStorage(banner: IBanner): BannerAccion {
    const action: BannerAccion = {
        type: actionTypes.SET_BANNER,
        banner
    }
    return action;
}

export function aboutStorage(about: IABout): AboutAccion {
    const action: AboutAccion = {
        type: actionTypes.SET_ABOUT,
        about
    }
    return action
}

export function featureStorage(feature: IFeature[]): FeatureAccion {
    const action: FeatureAccion = {
        type: actionTypes.SET_FEATURE,
        feature
    }
    return action
}

export function carouselStorage(carousel: ICarousel[]): CarouselAccion {
    const action: CarouselAccion = {
        type: actionTypes.SET_CAROUSEL,
        carousel
    }

    return action
}

export function newsStorage(news: INews[]): NewsAccion {
    const action: NewsAccion = {
        type: actionTypes.SET_NEWS,
        news
    }
    return action
}

export function galleryStorage(gallery: IGallery[]): GalleryAccion {
    const action: GalleryAccion = {
        type: actionTypes.SET_GALLERY,
        gallery
    }
    return action
}

export function msgStorage(msg: IMsg[]): MsgAccion {
    const action: MsgAccion = {
        type: actionTypes.SET_MSG,
        msg
    }
    return action;
}

export function globalBandeja(bandeja: number): BandejaAccion {
    const action: BandejaAccion = {
        type: actionTypes.BANDEJA,
        bandeja
    }
    return action;
}

export function socialStorage(social:ISocial[]): SocialAccion{
    const action: SocialAccion = {
        type:actionTypes.SET_SOCIAL,
        social
    }

    return action;
}