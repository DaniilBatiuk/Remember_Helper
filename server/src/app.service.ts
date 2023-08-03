import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';

@Injectable()
export class AppService {
  private htmlString = `...`;

  private extractWordsFromHTML(htmlString: string): string[] {
    const words: string[] = [];
    const cheerioInstance = cheerio.load(htmlString);

    cheerioInstance('span.display-term').each((index, element) => {
      const word = cheerioInstance(element).text();
      words.push(word);
    });

    return words;
  }

  getHello(): string[] {
    const words = this.extractWordsFromHTML(this.htmlString);
    return words;
  }
}
