import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
  currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  frameworkAsSignal = signal({ name: 'Angular', releaseDate: 2016 });
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Hecho');
    }, 3000);
  }
}
