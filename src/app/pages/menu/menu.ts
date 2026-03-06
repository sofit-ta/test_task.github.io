import { Component, signal } from '@angular/core';
import { Header } from '../../shared/header/header';

interface MenuItem {
  id: number;
  label: string;
  value: number;
  partId: number;
}
interface Part {
  id: number;
  label: string;
}
@Component({
  selector: 'app-menu',
  imports: [Header],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  parts: Part[] = [
    { id:1,label:'Тип 1' },
    { id:2,label:'Тип 2' },
  ];
  items: MenuItem[] = [
    { id: 1, label: '1 элемент', value: 10, partId: 1},
    { id: 2, label: '2 элемент', value: 48, partId: 1},
    { id: 3, label: '3 элемент', value: 34, partId: 1},
    { id: 4, label: '4 элемент', value: 55, partId: 1},
    { id: 5, label: '1 элемент', value: 15, partId: 2},
    { id: 6, label: '2 элемент', value: 30, partId: 2},
  ];
  currentPartId = signal(1);
  selectedPart1: number[] = [];
  selectedPart2: number[] = [];
  switchPart(partId: number) {
    this.currentPartId.set(partId);
  }
  getCurrentItems() {
    return this.items.filter(item => item.partId === this.currentPartId());
  }
  getSelectedArray() {
    if (this.currentPartId() === 1) {
      return this.selectedPart1;
    }
    return this.selectedPart2;
  }
  toggle(id: number) {
    const arr = this.getSelectedArray();

    const index = arr.indexOf(id);

    if (index >= 0) {
      arr.splice(index, 1);
    } else {
      arr.push(id);
    }
  }
  isSelected(id: number) {
    return this.getSelectedArray().includes(id);
  }
  getSelectedCount() {
    return this.getSelectedArray().length;
  }
  getTotalValue() {
    let summ = 0;
    const selected = this.getSelectedArray();

    this.getCurrentItems().forEach(item => {
      if (selected.includes(item.id)) {
        summ += item.value;
      }
    });
    return summ;
  }
  getSelectedPart() {
    const part = this.parts.find(p => p.id === this.currentPartId());
    return part ? part.label : '';
  }
}