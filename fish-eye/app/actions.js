// app/actions.ts
"use server"

import { prisma } from "@/lib/prisma.js";
import { refresh } from 'next/cache';

export async function likeMedia(mediaId) {
    const media = await prisma.Media.findUnique({
        where: { id: mediaId }
    });

    if(media)
    {
        await prisma.Media.update({
            where: { id: media.id },
            data: { likes: media.likes + 1 }
        });
    }

    // Indique à Next.js de rafraîchir les données sur la page
    refresh();
}