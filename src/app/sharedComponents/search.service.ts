import { Injectable } from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  textSearch: any = '';
  resultSearchBox: any;
  searchOption = [];
  public postsData: Post[];
  postUrl = 'http://api.sorenabook.ir/api/v1/users/products';
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  allProductBySearch(data: any): any{
    return this.http.post('http://api.sorenabook.ir/api/v1/users/allProductBySearch', data);
  }
  filteredListOptions(): any[] {
    const posts = this.postsData;
    const filteredPostsList = [];
    for (const post of posts) {
      for (const options of this.searchOption) {
        // @ts-ignore
        if (options.title === post.title) {
          // @ts-ignore
          filteredPostsList.push(post);
        }
      }
    }

    return filteredPostsList;
  }
}
