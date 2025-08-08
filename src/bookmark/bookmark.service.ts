import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  async getBookmarks(userId) {}

  async getBookmarkById(userId) {}

  async createBookmark(userIdr) {}

  async editBookmarkById(userId) {}

  async deleteBookmarkById(userId) {}
}
