import React from "react";
import {MenuIcon} from "./MenuIcon";
import {ComentsIcon} from "./ComentsIcon";
import {ShareIcon} from "./ShareIcon";
import {BlockIcon} from "./BlockIcon";
import {SaveIcon} from "./SaveIcon";

interface IIconProps {
    name: EIcons,
    size: number
}

export enum EIcons {
    menu = 'menu',
    coments = 'coments',
    share = 'share',
    block = 'block',
    save = 'save',
    complains = 'complains'
}

const Icons: { [key in keyof typeof EIcons]: any } = {
    menu: MenuIcon,
    coments: ComentsIcon,
    share: ShareIcon,
    block: BlockIcon,
    save: SaveIcon,
    complains: ComentsIcon
}


export function Icon({ size, name }: IIconProps) {
    const IconName = Icons[name];
    return (
        <IconName size={size} />
    )
}