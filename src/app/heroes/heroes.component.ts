import {Component} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        resp => {
          this.heroes = resp
        },
        e => {
          console.log('observable error heroService.getHeroes()' + e )
        },
        () => {
          console.log('observable complete heroService.getHeroes()')
        }
      );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
