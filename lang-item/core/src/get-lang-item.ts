import { Observable } from 'rxjs'
import { LangItem } from './lang-item'
import { HttpClient } from '@angular/common/http'

export const getLangItem = (http: HttpClient, endpoint) => (id: string) => http.get(endpoint)

