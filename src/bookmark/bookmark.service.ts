import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createBookmarkDto, editBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks(userId: number) {
    return await this.prisma.bookmark.findMany({
      where: { userId },
    });
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });

    return bookmark;
  }

  async createBookmark(userId: number, dto: createBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: { userId: userId, ...dto },
    });
    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    dto: editBookmarkDto,
    bookmarkId: number,
  ) {
    const bookmark = await this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
        userId,
      },
      data: {
        ...dto,
      },
    });
    return bookmark;
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    return await this.prisma.bookmark.delete({
      where: { userId, id: bookmarkId },
    });
  }
}
