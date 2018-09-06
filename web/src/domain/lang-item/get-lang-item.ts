import { Injectable } from '@angular/core'
import { Query } from 'apollo-angular'
import gql from 'graphql-tag'


@Injectable({ providedIn: 'root' })
export class GetLangItem extends Query {
  document = gql`
    query GetLangItem($id: ID!) {
      getLangItem(id: $id) {
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
}
