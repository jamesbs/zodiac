import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Apollo, gql } from 'apollo-angular-boost'
import { LangItem } from './lang-item'

const baseUrl = 'http://zodiac-gateway:5000'

@Injectable({ providedIn: 'root' })
export class LangItemProvider {

  constructor(
    private apollo: Apollo,
  ) { }

  get(id: string): Observable<LangItem> {
    return this.apollo.watchQuery<{ getLangItem: LangItem }>({
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
  }
}
