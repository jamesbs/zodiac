import { Component, OnInit } from '@angular/core'
import { trigger, transition, state, style, animate } from '@angular/animations'
import { Router, ActivatedRoute } from '@angular/router'
import { merge } from 'rxjs'
import { mergeMap, map, share } from 'rxjs/operators'

import { CardProvider } from '../../domain/providers'
import { SlideDirection, getDirection } from './slide-direction'
import { createMover } from './mover'
import { createCardContext } from './card'
import { GetLangItem } from '../../domain/lang-item/get-lang-item'
import { LangItem } from '../../domain/lang-item/lang-item'
import { ApolloQueryResult } from 'apollo-client';

const slide = animate('1200ms cubic-bezier(0.230, 1.000, 0.320, 1.000)')

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: [ './play-cards.component.styl' ],
  animations: [
    trigger('entry', [
      state('before', style({ 'transform': 'translateX(-100%)' })),
      state('current', style({ 'transform': 'translateX(0)' })),
      state('after', style({ 'transform': 'translateX(101%)' })),

      transition('before => current', slide),
      transition('current => after', slide),
      transition('after => current', slide),
      transition('current => before', slide),
    ]),
    trigger('load', [

    ]),
  ],
})
export class PlayCardsComponent implements OnInit {
  card$ = this.route.params
    .pipe(
      mergeMap(({ cardId }) => this.cardProvider.get(cardId)),
      mergeMap(card =>
        this.getLangItem.watch({ id: card.langItemId })
          .valueChanges
          .pipe(
            map((result: ApolloQueryResult<{ getLangItem: LangItem }>) => result.data.getLangItem),
            map(langItem => createCardContext(card, langItem))
          )),
      share())

  previous = createMover(this.card$, ({ previous }) => previous)
  next = createMover(this.card$, ({ next }) => next)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cardProvider: CardProvider,
    private getLangItem: GetLangItem,
  ) { }

  ngOnInit() {
    merge(this.previous.moveId$, this.next.moveId$)
      .subscribe(moveId => {
        this.router.navigate(['play', moveId])
      })
  }

  hasPrevious = this.previous.id$.pipe(map(id => id !== undefined))
  hasNext = this.next.id$.pipe(map(id => id !== undefined))
}
