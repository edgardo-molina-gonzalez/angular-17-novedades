import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titulo"></app-title>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-white rounded shadow p-10">
        <h2 class="text-2xl font-bold mb-5">If: {{ showContent() }}</h2>
        <button
          class="p-2 bg-blue-500 rounded text-white"
          (click)="toggleContent()"
        >
          Click me!
        </button>

        <!-- @if -->
        @if(showContent()){
        <p>Hola mundo</p>
        }@else {
        <p>No hay nada wey</p>
        }
      </div>

      <!-- @switch -->
      <div class="bg-white rounded shadow p-10">
        <h2 class="text-3xl font-bold">Switch {{ grade() }}</h2>
        @switch (grade()) { @case("A"){
        <p>Excelente nota!</p>
        } @case( "B"){
        <p>Nota regular...</p>
        } @default {
        <p>Reprobado wey!</p>
        }}
      </div>

      <!-- @for -->
      <div class="bg-white rounded shadow p-10">
        <h2 class="text-3xl font-bold">for</h2>
        <!-- framework1 -->
        <ul>
          @for(framework of frameworks(); track framework; let i = $index){
          <li>{{ i + 1 }} {{ framework }}</li>
          }
        </ul>
        <!-- framework2 -->
        <ul>
          @for(framework of frameworks2(); track framework){
          <li>{{ framework }}</li>
          }@empty{
          <p>No hay nada que mostrar.</p>
          }
        </ul>
      </div>
    </section>
  `,
})
export default class ControlFlowComponent {
  titulo = 'Control flow';

  showContent = signal(false);
  grade = signal<Grade>('A');
  frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
