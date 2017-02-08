/**
 * @license
 *
 * ModernPlaylist.ts: Data structure for modern SoundManager2 playlist
 * -----------------------------------------------
 * Copyright (c) 2016 - 2017, The Little Moe New LLC. All rights reserved.
 *
 * This file is part of the project 'Sm2Shim'.
 * Code released under BSD-2-Clause license.
 *
 */

namespace Sm2Shim.Player.Models
{
    export interface IModernPlaylist
    {
        schemaVersion: number;
        loop: boolean;
        autoPlay: boolean;
        isPlaylistOpen: boolean;
        playlist: Array<IModernPlaylistItem>;
        compactMode: boolean;
    }

    interface IModernPlaylistItem
    {
        audioFileUrl: string;
        lrcUrl: string;
        title: string;
        album: string;
        artist: string;
        isExplicit: boolean;
        navigationUrl: string;
    }
}