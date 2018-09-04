import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Apollo, gql } from 'apollo-angular-boost'
import { LangItem } from './lang-item'

const baseUrl = 'http://localhost:5000'

@Injectable({ providedIn: 'root' })
export class LangItemProvider {

  constructor(
    private apollo: Apollo,
  ) { }

  get(id: string): Observable<LangItem> {
    return this.apollo.watchQuery({
      query: gql`
        {
          getLangItem(id: "${id}") {
            id,
            chinese,
            pinyin,
            english,
            examples {
              chinese
              pinyin
              english
            }
          }
        }
      `
    }).valueChanges.pipe(map(result => {
      return result.data.getLangItem as LangItem
    }))
    // return this.http.get<LangItem>(`${baseUrl}/lang-item/${id}`)
  }

  a() {
    this.apollo.watchQuery<>(gql``)
      .valueChanges
      .subscribe(a => {

      })
  }
}
